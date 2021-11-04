const MailHistory = require('../models/emails.model.server');

const { Op, QueryTypes } = require("sequelize");
const config = require("../config/environment");

module.exports.fetchAll = async (orgId, prcId) => {
    return await MailHistory.getEmailHistory('email_history_' + orgId).findAll({
        where: { procedureId: prcId }
    });
};