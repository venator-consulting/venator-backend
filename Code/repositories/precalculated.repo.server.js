const connection = require("../config/mysql.config");
const Posting = require("../models/posting.model.server");
const { Op, fn, col, QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");
const DATE_RANGE = require("../models/enums/date.ranges");
const keywords = require("../models/analysis/text.analysis.keywords");

const sequelize = Sequelize.getSequelize();

getDateRange = async (orgId, prcId) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, "organisation_id_is_required");
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, "procedure_id_is_required");
  let query = `SELECT MAX(documentDate)  maxdate, MIN(documentDate) mindate from posting_${orgId} pos
                          WHERE
                              pos.procedureId = :procedureId
                              AND pos.accountNumber is not NULL`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });
  if (!result || !result.length)
    throw new Exception(httpStatus.BAD_REQUEST, "no_document_date");
  if (!result[0].mindate)
    throw new Exception(httpStatus.BAD_REQUEST, "no_document_date");
  return result;
};

calculateDateRanges = (mindate, maxdate, step) => {
  if (maxdate < mindate)
    throw new Exception(
      httpStatus.BAD_REQUEST,
      "MaxDate_must_be_bigger_than_MinDate"
    );
  const ranges = [mindate];
  let tempDate = new Date(mindate);
  switch (step) {
    case DATE_RANGE.MONTHLY:
      // get the start of the next month if less than the maxdate, then push it to the array
      while (tempDate < maxdate) {
        tempDate.setMonth(tempDate.getMonth() + 1, 1);
        if (tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(new Date(maxdate.getFullYear(), maxdate.getMonth(), maxdate.getDate() + 1));
      break;
    case DATE_RANGE.TOW_MONTHS:
      // get the start of the next-next month (+2) if less than the maxdate, then push it to the array
      while (tempDate < maxdate) {
        tempDate.setMonth(tempDate.getMonth() + 2, 1);
        if (tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(new Date(maxdate.getFullYear(), maxdate.getMonth(), maxdate.getDate() + 1));
      break;
    case DATE_RANGE.QUARTER:
      while (tempDate < maxdate) {
        tempDate.setMonth(tempDate.getMonth() + 3, 1);
        if (tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(new Date(maxdate.getFullYear(), maxdate.getMonth(), maxdate.getDate() + 1));
      break;
    case DATE_RANGE.HALF_ANNUAL:
      while (tempDate < maxdate) {
        tempDate.setMonth(tempDate.getMonth() + 6, 1);
        if (tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(new Date(maxdate.getFullYear(), maxdate.getMonth(), maxdate.getDate() + 1));
      break;
    case DATE_RANGE.ANNUAL:
      while (tempDate < maxdate) {
        tempDate.setFullYear(tempDate.getFullYear() + 1, 1, 1);
        if (tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(new Date(maxdate.getFullYear(), maxdate.getMonth(), maxdate.getDate() + 1));
      break;
    default:
      ranges.push(new Date(maxdate.getFullYear(), maxdate.getMonth(), maxdate.getDate() + 1));
      break;
  }
  return ranges;
};

module.exports.deletePrevDataTextWord = async (orgId, prcId) => {
  let query = `DELETE FROM text_analysis_word_${orgId} WHERE procedureId = ${prcId}`;
  let result = await connection.getConnection().execute(query);
  return result;
};

module.exports.deletePrevDataTextAccount = async (orgId, prcId) => {
  let query = `DELETE FROM text_analysis_account_${orgId} WHERE procedureId = ${prcId}`;
  let result = await connection.getConnection().execute(query);
  return result;
};

/**
 *
 * @param {*} orgId
 * @param {*} prcId
 * @param {*} keys
 * @returns
 */
storeDataByWord = async (orgId, prcId, keys, dateRanges, step) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, "organisation_id_is_required");
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, "procedure_id_is_required");
  let query = ` INSERT INTO text_analysis_word_${orgId} (recordsCount, accountsCount, word, fromDate, toDate, procedureId, step) `;
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    let originalKey = keys[index];
    originalKey = originalKey.replace("like '%", "");
    originalKey = originalKey.replace("%'", "");
    originalKey = originalKey.replace("REGEXP '(\\b|[^a-zA-Z]+)", "");
    originalKey = originalKey.replace("([^a-zA-Z]+|\\s*)'", "");

    for (let i = 1; i < dateRanges.length; i++) {
      let fromDate = dateRanges[i - 1];
      let toDate = dateRanges[i];

      query += `  
              SELECT
                  IF (SUM(pos.totalCount) > 0, SUM(pos.totalCount),0) recordsCount,
                  IF (COUNT(pos.accountNumber) > 0,COUNT(pos.accountNumber),0) accountsCount,
                  IF(1 = 1,
                      '${originalKey}',
                      '${originalKey}') word,
                  IF(1 = 1,
                    '${fromDate.toISOString().split('T')[0]}',
                    '${fromDate.toISOString().split('T')[0]}') fromDate,
                  IF(1 = 1,
                    '${toDate.toISOString().split('T')[0]}',
                    '${toDate.toISOString().split('T')[0]}') toDate,
                  IF(1 = 1,
                    '${prcId}',
                    '${prcId}') procedureId,
                  IF(1 = 1,
                    '${step}',
                    '${step}') step
              from
                  (SELECT
                      p.accountNumber ,
                      count(p.accountNumber) totalCount
                  from
                      posting_${orgId} p
                  WHERE
                      p.procedureId = ${prcId}
                      AND p.documentDate >= '${fromDate.toISOString().split('T')[0]}'
                      AND p.documentDate < '${toDate.toISOString().split('T')[0]}'
                      AND (
                      UPPER(p.textPosting) ${key}
                      OR UPPER(p.reference) ${key}
                      OR UPPER(p.textHeader) ${key}
                      )
                  GROUP by
                      p.accountNumber) pos
              `;
      query += " UNION ";
    }
  }
  query = query.slice(0, -6);
  // console.log(query);
  let result = await connection.getConnection().execute(query);
  return result;
};

storeDataByAccount = async (orgId, prcId, keys, dateRanges, step) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, "organisation_id_is_required");
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, "procedure_id_is_required");
  let query = ` INSERT INTO text_analysis_account_${orgId} (accountNumber, accountName, totlaCount, fromDate, toDate, procedureId, step) `;
  for (let i = 1; i < dateRanges.length; i++) {
    let fromDate = dateRanges[i - 1];
    let toDate = dateRanges[i];
    query += `SELECT p.accountNumber , p.accountName , COUNT(p.id) as totlaCount,
                      IF(1 = 1,
                        '${fromDate.toISOString().split('T')[0]}',
                        '${fromDate.toISOString().split('T')[0]}') fromDate,
                      IF(1 = 1,
                        '${toDate.toISOString().split('T')[0]}',
                        '${toDate.toISOString().split('T')[0]}') toDate,
                      IF(1 = 1,
                        '${prcId}',
                        '${prcId}') procedureId,
                      IF(1 = 1,
                        '${step}',
                        '${step}') step
                            FROM posting_${orgId}  p
                            WHERE procedureId = ${prcId} 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber is not NULL 
                                `;
    query += keys.length > 0 ? " AND ( " : "";

    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      query += `  p.reference ${key}
                        OR p.textPosting ${key}
                        OR p.textHeader ${key} OR`;
    }
    query += keys.length > 0 ? " 1 <> 1) " : "";

    query += "GROUP BY p.accountNumber , p.accountName";

    query += " UNION ";
  }
  query = query.slice(0, -6);
  let result = await connection.getConnection().execute(query);
  return result;
};

module.exports.textAnalysisByWord = async (orgId, prcId, step) => {
  const dateRange = await getDateRange(orgId, prcId);

  if (dateRange.length < 1) {
    throw new Exception(httpStatus.BAD_REQUEST, "no_document_date");
  }
  if (
    !dateRange[0].mindate ||
    !(dateRange[0].mindate instanceof Date) ||
    !dateRange[0].maxdate ||
    !(dateRange[0].maxdate instanceof Date)
  ) {
    throw new Exception(httpStatus.BAD_REQUEST, "no_document_date");
  }
  const mindate = dateRange[0].mindate;
  const maxdate = dateRange[0].maxdate;

  const dateRanges = calculateDateRanges(mindate, maxdate, step);

  const result = await storeDataByWord(orgId, prcId, keywords, dateRanges, step);
};


module.exports.getrDateRangeOptions = async (orgId, prcId, step) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, "organisation_id_is_required");
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, "procedure_id_is_required");
  let query = `SELECT DISTINCT t.fromDate , t.toDate FROM text_analysis_word_${orgId} t
      WHERE procedureId = :procedureId AND step = :step`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
      step: step
    },
    type: QueryTypes.SELECT,
  });
  return result;
};


module.exports.getrDataByRange = async (orgId, prcId, fromDate, toDate) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, "organisation_id_is_required");
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, "procedure_id_is_required");
  let query = `SELECT * FROM text_analysis_word_${orgId} t
      WHERE procedureId = :procedureId AND fromDate = :fromDate AND toDate = :toDate`;

  let result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
      fromDate: fromDate,
      toDate: toDate
    },
    type: QueryTypes.SELECT,
  });
  if (result.length && result.length > 0) {
    result = result.filter((rec) => +rec.recordsCount > 0);
  }
  return result;
};


module.exports.textAnalysisByAccount = async (orgId, prcId, step) => {
  const dateRange = await getDateRange(orgId, prcId);

  if (dateRange.length < 1) {
    throw new Exception(httpStatus.BAD_REQUEST, "no_document_date");
  }
  if (
    !dateRange[0].mindate ||
    !(dateRange[0].mindate instanceof Date) ||
    !dateRange[0].maxdate ||
    !(dateRange[0].maxdate instanceof Date)
  ) {
    throw new Exception(httpStatus.BAD_REQUEST, "no_document_date");
  }
  const mindate = dateRange[0].mindate;
  const maxdate = dateRange[0].maxdate;

  const dateRanges = calculateDateRanges(mindate, maxdate, step);

  const result = await storeDataByAccount(orgId, prcId, keywords, dateRanges, step);
};