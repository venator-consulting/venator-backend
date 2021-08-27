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
  let tempDate;
  switch (step) {
    case DATE_RANGE.MONTHLY:
      // get the start of the next month if less than the maxdate, then push it to the array
      tempDate = new Date(mindate.getFullYear(), mindate.getMonth() + 1, 1);
      if(tempDate < maxdate) ranges.push(tempDate);
      while (tempDate < maxdate) {
        tempDate.setMonth(tempDate.getMonth() + 1, 1);
        if(tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(maxdate);
      break;
    case DATE_RANGE.TOW_MONTHS:
      // get the start of the next-next month (+2) if less than the maxdate, then push it to the array
      tempDate = new Date(mindate.getFullYear(), mindate.getMonth() + 2, 1);
      if(tempDate < maxdate) ranges.push(tempDate);
      while (tempDate < maxdate) {
        tempDate.setMonth(tempDate.getMonth() + 2, 1);
        if(tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(maxdate);
      break;
    case DATE_RANGE.QUARTER:
      tempDate = new Date(mindate.getFullYear(), mindate.getMonth() + 3, 1);
      if(tempDate < maxdate) ranges.push(tempDate);
      while (tempDate < maxdate) {
        tempDate.setMonth(tempDate.getMonth() + 3, 1);
        if(tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(maxdate);
      break;
    case DATE_RANGE.HALF_ANNUAL:
      tempDate = new Date(mindate.getFullYear(), mindate.getMonth() + 6, 1);
      if(tempDate < maxdate) ranges.push(tempDate);
      while (tempDate < maxdate) {
        tempDate.setMonth(tempDate.getMonth() + 6, 1);
        if(tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(maxdate);
      break;
    case DATE_RANGE.ANNUAL:
      tempDate = new Date(mindate.getFullYear() + 1, 1, 1);
      if(tempDate < maxdate) ranges.push(tempDate);
      while (tempDate < maxdate) {
        tempDate.setFullYear(tempDate.getFullYear() + 1, 1, 1);
        if(tempDate < maxdate) ranges.push(new Date(tempDate));
      }
      // push maxdate
      ranges.push(maxdate);
      break;
    default:
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
  let query = " ";
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    let originalKey = keys[index];
    originalKey = originalKey.replace("like '%", "");
    originalKey = originalKey.replace("%'", "");
    originalKey = originalKey.replace("REGEXP '(\\b|[^a-zA-Z]+)", "");
    originalKey = originalKey.replace("([^a-zA-Z]+|\\s*)'", "");
    query += `  
              SELECT
                  SUM(pos.totalCount) recordsCount,
                  COUNT(pos.accountNumber) accountsCount,
                  IF(1 = 1,
                      '${originalKey}',
                      '${originalKey}') word
              from
                  (SELECT
                      p.accountNumber ,
                      count(p.accountNumber) totalCount
                  from
                      posting_${orgId} p
                  WHERE
                      p.procedureId = :procedureId
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

  let result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });
  if (result.length && result.length > 0) {
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
