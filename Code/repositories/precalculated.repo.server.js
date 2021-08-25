const Posting = require("../models/posting.model.server");
const { Op, fn, col, QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");

const sequelize = Sequelize.getSequelize();

module.exports.dateRange = async (orgId, prcId) => {
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

module.exports.textAnalysisByWord = async (orgId, prcId, keys) => {
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
