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

/**
 * INSERT INTO table2
    SELECT * FROM table1
    WHERE condition;
 */
/**
 *
 * @param {*} orgId
 * @param {*} prcId
 * @param {*} keys
 * @returns
 */
getData = async (orgId, prcId, keys, dateRanges) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, "organisation_id_is_required");
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, "procedure_id_is_required");
  let query = `INSERT INTO text_analysis_word_${orgId} (`;
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    let originalKey = keys[index];
    originalKey = originalKey.replace("like '%", "");
    originalKey = originalKey.replace("%'", "");
    originalKey = originalKey.replace("REGEXP '(\\b|[^a-zA-Z]+)", "");
    originalKey = originalKey.replace("([^a-zA-Z]+|\\s*)'", "");

    for (let index = 1; index < dateRanges.length; index++) {
      let fromDate = dateRanges[index - 1];
      let toDate = dateRanges[index];

      query += `  
              SELECT
                  SUM(pos.totalCount) recordsCount,
                  COUNT(pos.accountNumber) accountsCount,
                  IF(1 = 1,
                      '${originalKey}',
                      '${originalKey}') word,
                  IF(1 = 1,
                    '${fromDate.toLocaleDateString()}',
                    '${fromDate.toLocaleDateString()}') fromDate,
                  IF(1 = 1,
                    '${toDate.toLocaleDateString()}',
                    '${toDate.toLocaleDateString()}') toDate,
                  IF(1 = 1,
                    '${prcId}',
                    '${prcId}') procedureId
              from
                  (SELECT
                      p.accountNumber ,
                      count(p.accountNumber) totalCount
                  from
                      posting_${orgId} p
                  WHERE
                      p.procedureId = :procedureId
                      AND p.documentDate >= ${fromDate}
                      AND p.documentDate < ${toDate}
                      AND (
                      UPPER(p.textPosting) ${key}
                      OR UPPER(p.reference) ${key}
                      OR UPPER(p.textHeader) ${key}
                      )
                  GROUP by
                      p.accountNumber) pos
              `;
      query += index < keys.length - 1 ? " UNION " : "";
    }
  }
  query += ')';
  let result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.INSERT,
  });
  if (result.length > 0) {
    result = result.filter((rec) => +rec.recordsCount > 0);
  }
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

  const result = await getData(orgId, prcId, keywords, dateRanges);
};
