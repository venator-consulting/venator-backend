const MailHistory = require('../models/emails.model.server');
const MailAttachment = require('../models/emailAttachment.model.server');
const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");
const errors = require('../models/enums/errors');
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const { Op, QueryTypes } = require("sequelize");
const config = require("../config/environment");
const { organisation_id_is_required } = require('../models/enums/errors');

module.exports.fetchAll = async (orgId, prcId) => {
    return await MailHistory.getEmailHistory('email_history_' + orgId).findAll({
        where: { procedureId: prcId }
    });
};

module.exports.mailAnalysisBySender = async (orgId, prcId, keys) => {
    if (isNaN(orgId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
    if (isNaN(prcId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
    let query = `SELECT p.email , p.sender , COUNT(p.id) as totlaCount
                              FROM email_history_${orgId}  p
                              WHERE procedureId = :procedureId 
                                  `;
    query += keys.length > 0 ? " AND ( " : "";

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        query += `  p.subject ${key}
                          OR p.body ${key}
                          OR p.bodyHTML ${key} OR`;
    }
    query += keys.length > 0 ? " 1 <> 1) " : "";

    query += "GROUP BY p.email , p.sender";

    const result = await sequelize.query(query, {
        replacements: {
            procedureId: prcId,
        },
        type: QueryTypes.SELECT,
    });
    return result;
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

module.exports.mailAnalysisSenderDetails = async (orgId, prcId, keys, email) => {
    if (isNaN(orgId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
    if (isNaN(prcId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
    let query = `SELECT * FROM email_history_${orgId}  p
                        WHERE procedureId = :procedureId 
                            AND p.email = :email
                                  `;
    query += keys.length > 0 ? " AND ( " : "";

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        query += `  p.subject ${key}
                    OR p.body ${key}
                    OR p.bodyHTML ${key} OR`;
    }
    query += keys.length > 0 ? " 1 <> 1) " : "";

    const result = await sequelize.query(query, {
        replacements: {
            procedureId: prcId,
            email: email,
        },
        type: QueryTypes.SELECT,
    });
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

module.exports.mailJustRelevant = async (orgId, prcId, email) => {
    if (isNaN(orgId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
    if (isNaN(prcId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
    return await MailHistory.getEmailHistory("email_history_" + orgId).findAll({
        where: {
            senderRelevant: true,
            email: email,
            ProcedureId: prcId,
        },
        attributes: [
            "id",
            "procedureId",
            "email",
            "sender",
            "rcvName",
            "rcvEmail",
            "subject",
            "body",
            "creationTime",
            "messageDeliveryTime",
            "bcc",
            "cc",
            "numberOfAttachments",
            "senderRelevant",
            "senderComment"
        ],
    });
};

/**
 * Bulk update of array of mail records
 * @param {number} orgId
 * @param {EmailHistory[]} records
 */
module.exports.mailBulkUpdate = async (orgId, records) => {
    if (isNaN(orgId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
    const result = await MailHistory.getEmailHistory("email_history_" + orgId).bulkCreate(
        records,
        {
            updateOnDuplicate: ["senderRelevant", "senderComment"],
        }
    );
    return result;
};


module.exports.getBySender = async (orgId, prcId, mail, criteria) => {
    if (isNaN(orgId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
    if (isNaN(prcId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
    const limit = criteria.limit ? criteria.limit : 25;
    delete criteria.limit;
    const offset = criteria.offset ? criteria.offset : 0;
    delete criteria.offset;
    let orderBy = criteria.orderBy ? criteria.orderBy : "id";
    delete criteria.orderBy;
    const sortOrder = criteria.sortOrder == -1 ? "DESC" : "ASC";
    delete criteria.sortOrder;

    for (const key in criteria) {
        if (Object.hasOwnProperty.call(criteria, key)) {
            if (criteria[key].toString().length > 2) {
                criteria[key] = {
                    [Op.like]: "%" + criteria[key] + "%",
                };
            }
            if (!criteria[key]) delete criteria[key];
        }
    }
    criteria.procedureId = prcId;
    criteria.email = mail;
    const result = await MailHistory.getEmailHistory("email_history_" + orgId).findAndCountAll({
        where: criteria,
        offset: +offset,
        limit: +limit,
        order: [[orderBy, sortOrder]],
    });
    return result;
};

module.exports.getAttachments = async (orgId, prcId, mailId) => {
    if (isNaN(orgId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.organisation_id_is_required);
    if (isNaN(prcId))
        throw new Exception(httpStatus.BAD_REQUEST, errors.procedure_id_is_required);
    return await MailAttachment
        .getEmailAttachment('email_attachment_' + orgId)
        .findAll({
            where: { emailHistoryId: mailId }
        });
}