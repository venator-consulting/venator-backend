const Account = require('../models/accounts.model.server');
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();

module.exports.getCreditorsMails = async (orgId, prcId) => {
    return await Account.getAccounts('accounts_' + orgId).findAll({
        where: {
            procedureId: prcId,
            accountType: sequelize.where(sequelize.fn('LOWER', sequelize.col('accountType')), '=', 'k'),
        },
        attributes: ['id', 'accountNumber', 'accountName', 'email']
    });
};