const connection = require("../config/mysql.config");
const Procedure = require("../models/procedures.model.server");
const { Op, fn, col, QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");
const DATE_RANGE = require("../models/enums/date.ranges");
const keywords = require("../models/analysis/text.analysis.keywords");
const errors = require('../models/enums/errors');

const sequelize = Sequelize.getSequelize();

getDateRange = async (orgId, prcId) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
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
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  if (!result[0].mindate)
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  return result;
};

calculateDateRanges = (mindate, maxdate, step) => {
  if (maxdate < mindate)
    throw new Exception(
      httpStatus.BAD_REQUEST,
      errors.MaxDate_must_be_bigger_than_MinDate
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

module.exports.deletePrevDataAmount = async (orgId, prcId) => {
  let query = `DELETE FROM amount_analysis_${orgId} WHERE procedureId = ${prcId}`;
  let result = await connection.getConnection().execute(query);
  return result;
};

module.exports.deletePrevDataCredit = async (orgId, prcId) => {
  let query = `DELETE FROM creditor_analysis_${orgId} WHERE procedureId = ${prcId}`;
  let result = await connection.getConnection().execute(query);
  return result;
};

module.exports.deletePrevDataPayment = async (orgId, prcId) => {
  let query = `DELETE FROM payment_analysis_${orgId} WHERE procedureId = ${prcId}`;
  let result = await connection.getConnection().execute(query);
  return result;
};

module.exports.deletePrevDataDueDate = async (orgId, prcId) => {
  let query = `DELETE FROM due_date_analysis_${orgId} WHERE procedureId = ${prcId}`;
  let result = await connection.getConnection().execute(query);
  return result;
};

storeDataByWord = async (orgId, prcId, keywords, dateRanges, step) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
  const length = keywords.length;
  const times = Math.ceil(length / 10);
  for (let iterator = 0; iterator < times; iterator++) {
    let keys = keywords.slice(iterator * 10, iterator * 10 + 10);
    //#region insert data
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
    const c = connection.getConnection();
    const result = await c.execute(query);

    c.end();
    // await connection.getConnection().execute(query);
    //#endregion insert data
  }
  // set as calculated in procedure
  await Procedure.getProcedures().update({ text_word: true }, {
    where: {
      id: prcId,
    },
  });
  return "done";
};

storeDataByAccount = async (orgId, prcId, keys, dateRanges, step) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
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
  await Procedure.getProcedures().update({ text_account: true }, {
    where: {
      id: prcId,
    },
  });
  return result;
};

module.exports.storeAmountData = async (orgId, prcId) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
  let query = ` INSERT INTO amount_analysis_${orgId} (accountNumber, accountName, balance, accountType, documentType, procedureId) `;
  query += `SELECT p.accountNumber , p.accountName , p.balance, p.accountType, p.documentType, p.procedureId 
                            FROM posting_${orgId}  p
                            WHERE procedureId = ${prcId} 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber is not NULL
                                AND (UPPER(p.documentType) = 'KZ' OR 
                                    UPPER(p.documentType) = 'ZP' OR
                                    UPPER(p.documentTypeNewName) = 'ZAHLUNG')
                                AND p.balance = ROUND(p.balance, -2)
                                AND balance >= 100 `;
  let result = await connection.getConnection().execute(query);
  await Procedure.getProcedures().update({ amount: true }, {
    where: {
      id: prcId,
    },
  });
  return result;
};

module.exports.amountAnalysisGetData = async (orgId, prcId, baseBalance = 500) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
  let query = `SELECT  p.accountNumber , p.accountName , SUM(p.balance) as totalBalance, COUNT(p.id) as totlaCount
     from amount_analysis_${orgId} p
      WHERE
          p.procedureId = :procedureId
          AND p.balance >= :balance 
          GROUP BY p.accountNumber , p.accountName`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
      balance: baseBalance
    },
    type: QueryTypes.SELECT,
  });
  return result;
};

module.exports.textAnalysisByWord = async (orgId, prcId, step) => {
  const dateRange = await getDateRange(orgId, prcId);

  if (dateRange.length < 1) {
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  }
  if (
    !dateRange[0].mindate ||
    !(dateRange[0].mindate instanceof Date) ||
    !dateRange[0].maxdate ||
    !(dateRange[0].maxdate instanceof Date)
  ) {
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  }
  const mindate = dateRange[0].mindate;
  const maxdate = dateRange[0].maxdate;

  const dateRanges = calculateDateRanges(mindate, maxdate, step);

  const result = await storeDataByWord(orgId, prcId, keywords, dateRanges, step);
};


module.exports.getrDateRangeOptions = async (orgId, prcId, step) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
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


module.exports.getTextAnalysisDataByWordCalc = async (orgId, prcId, fromDate, toDate) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
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

module.exports.getTextAnalysisDataByWordCalcDefault = async (orgId, prcId) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
  let query = `SELECT * FROM text_analysis_word_${orgId} t
      WHERE procedureId = :procedureId AND step = 'ALL'`;

  let result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId
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
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  }
  if (
    !dateRange[0].mindate ||
    !(dateRange[0].mindate instanceof Date) ||
    !dateRange[0].maxdate ||
    !(dateRange[0].maxdate instanceof Date)
  ) {
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  }
  const mindate = dateRange[0].mindate;
  const maxdate = dateRange[0].maxdate;

  const dateRanges = calculateDateRanges(mindate, maxdate, step);

  const result = await storeDataByAccount(orgId, prcId, keywords, dateRanges, step);
};

module.exports.getTextAnalysisDataByAccountCalcDefault = async (orgId, prcId) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
  let query = `SELECT * FROM text_analysis_account_${orgId} t
      WHERE procedureId = :procedureId AND step = 'ALL'`;

  let result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId
    },
    type: QueryTypes.SELECT,
  });
  return result;
};

module.exports.storeCreditorAnalysis = async (orgId, prcId) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
  let query = ` INSERT INTO creditor_analysis_${orgId} (accountNumber, accountName, totlaCount, totalBalance, procedureId) `;
  query += `SELECT p.accountNumber , p.accountName , COUNT(p.id) as totlaCount, 
                SUM(p.balance) as totalBalance,
                IF(1 = 1,
                  '${prcId}',
                  '${prcId}') procedureId
                            FROM posting_${orgId}  p
                            WHERE p.procedureId = ${prcId} 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber is not NULL 
                                `;
  query += keywords.length > 0 ? " AND (( " : "";
  // for text records
  for (let index = 0; index < keywords.length; index++) {
    const key = keywords[index];
    query += `  p.reference ${key}
                        OR p.textPosting ${key}
                        OR p.textHeader ${key} OR`;
  }
  query += keywords.length > 0 ? " 1 <> 1) " : "";
  // for amount records
  query += ` OR ((UPPER(p.documentType) = 'KZ' OR 
            UPPER(p.documentType) = 'ZP' OR
            UPPER(p.documentTypeNewName) = 'ZAHLUNG')
            AND p.balance = ROUND(p.balance, -2)
            AND p.balance >= 500)`;
  // for payment records
  query += ` OR (p.documentDate is not NULL 
            AND (year(p.documentDate) <> year(p.dueDate) OR p.applicationDate is null OR 
                (year(p.documentDate) = year(p.dueDate) AND month(p.documentDate) <> month(p.dueDate)))
            AND (UPPER(p.documentTypeNewName) = 'RECHNUNG'
                OR UPPER(p.documentTypeNewName) = 'ZAHLUNG'))`;

  query += ")";
  query += "GROUP BY p.accountNumber , p.accountName ";
  let result = await connection.getConnection().execute(query);
  await Procedure.getProcedures().update({ credit: true }, {
    where: {
      id: prcId,
    },
  });
  return result;
};

module.exports.getCreditorAnalysis = async (orgId, prcId, criteria) => {
  let limit = criteria.limit ? criteria.limit : 25;
  let offset = criteria.offset ? criteria.offset : 0;
  let orderBy = criteria.orderBy ? criteria.orderBy : "accountNumber";
  orderBy =
    orderBy == "accountNumber"
      ? "LPAD(LOWER(p.accountNumber), 10,0) "
      : orderBy;
  const sortOrder = criteria.sortOrder == -1 ? "DESC" : "ASC";
  let query = `SELECT SQL_CALC_FOUND_ROWS * FROM creditor_analysis_${orgId} p 
                WHERE procedureId = :procedureId `
  if (criteria.accountNumber) {
    query += `and p.accountNumber like '%${criteria.accountNumber}%' `;
  }
  if (criteria.accountName) {
    query += `and p.accountName like '%${criteria.accountName}%' `;
  }
  query += ` order by ${orderBy} ${sortOrder} `;
  query += ` LIMIT ${limit} offset ${offset}`;

  let result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId
    },
    type: QueryTypes.SELECT,
  });

  const query1 = `SELECT FOUND_ROWS()`;

  const totalCount = await sequelize.query(query1, {
    type: QueryTypes.SELECT,
  });

  return {
    data: result,
    count: totalCount,
  };
};

module.exports.storePaymentAnalysis = async (orgId, prcId) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
  let query = ` INSERT INTO payment_analysis_${orgId} (procedureId, accountNumber, accountName, accountType, 
    documentDate, dueDate, applicationDate, balance, documentTypeNewName, documentType) `;

  query += `SELECT pos.procedureId, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
    pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
    FROM posting_${orgId} pos
    WHERE
      pos.procedureId = ${prcId}
      AND UPPER(pos.accountType) = 'K'
      AND pos.accountNumber is not NULL
      AND pos.documentDate is not NULL 
      AND (year(pos.documentDate) <> year(pos.applicationDate) OR pos.applicationDate is null OR 
          (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
      AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
          OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG')`;

  let result = await connection.getConnection().execute(query);
  await Procedure.getProcedures().update({ payment: true }, {
    where: {
      id: prcId,
    },
  });
  return result;
};

module.exports.storeDueDateAnalysis = async (orgId, prcId) => {
  if (isNaN(orgId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
  if (isNaN(prcId))
    throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
  let query = ` INSERT INTO due_date_analysis_${orgId} (procedureId, accountNumber, accountName, accountType, 
    documentDate, dueDate, applicationDate, balance, documentTypeNewName, documentType) `;

  query += `SELECT pos.procedureId, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
    pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
    FROM posting_${orgId} pos
    WHERE
      pos.procedureId = ${prcId}
      AND UPPER(pos.accountType) = 'K'
      AND pos.accountNumber is not NULL
      AND pos.dueDate is not NULL 
      AND pos.applicationDate is not NULL 
      AND (year(pos.documentDate) <> year(pos.applicationDate) OR pos.applicationDate is null OR 
          (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
      AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG')
      ORDER BY pos.dueDate`;

  let result = await connection.getConnection().execute(query);
  await Procedure.getProcedures().update({ due_date: true }, {
    where: {
      id: prcId,
    },
  });
  return result;
};