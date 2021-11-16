const MailHistory = require('../models/emails.model.server');
const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");
const errors = require('../models/enums/errors');
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const { Op, QueryTypes } = require("sequelize");
const config = require("../config/environment");

module.exports.fetchAll = async (orgId, prcId) => {
    return await MailHistory.getEmailHistory('email_history_' + orgId).findAll({
        where: { procedureId: prcId }
    });
};


module.exports.mailAnalysisByWord = async (orgId, prcId, keys) => {
    if (isNaN(orgId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
    if (isNaN(prcId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
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
                COUNT(pos.sender) senderCount,
                IF(1 = 1,
                    '${originalKey}',
                    '${originalKey}') word
            from
                (SELECT
                    p.sender ,
                    count(p.sender) totalCount
                from
                    email_history_${orgId} p
                WHERE
                    p.procedureId = :procedureId
                    AND (
                        UPPER(p.subject) ${key}
                        OR UPPER(p.body) ${key}
                        OR UPPER(p.bodyHTML) ${key}
                        )
                GROUP by
                    p.sender) pos
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

module.exports.mailAnalysisWordDetails = async (orgId, prcId, key) => {
    if (isNaN(orgId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
    if (isNaN(prcId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
    if (key.length <= 3 && key.length > 0) {
        key = "REGEXP '(\\b|[^a-zA-Z]+)" + key + "([^a-zA-Z]+|\\s*)'";
    } else if (key.length > 3) {
        key = "like '%" + key + "%'";
    } else {
        throw new Exception("invalid_key");
    }
    let query = `SELECT * FROM email_history_${orgId}  p
                              WHERE
                              p.procedureId = :procedureId
                              AND (
                              UPPER(p.subject) ${key}
                              OR UPPER(p.body) ${key}
                              OR UPPER(p.bodyHTML) ${key}
                              )
                                  `;

    const result = await sequelize.query(query, {
        replacements: {
            procedureId: prcId,
        },
        type: QueryTypes.SELECT,
    });
    return result;
};