const Account = require('../models/accounts.model.server');
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const { Op, QueryTypes } = require("sequelize");

module.exports.getCreditorsMails = async (orgId, prcId) => {
    return await Account.getAccounts('accounts_' + orgId).findAll({
        where: {
            procedureId: prcId,
            // [Op.or]: [
            //     {
                    accountType: sequelize.where(sequelize.fn('LOWER', sequelize.col('accountType')), '=', 'k'),
            //     },
            //     {
            //         accountTypeNewName: sequelize.where(sequelize.fn('LOWER', sequelize.col('accountTypeNewName')), '=', 'Kreditor'),
            //     },
            // ],
        },
        attributes: ['id', 'accountNumber', 'accountName', 'email']
    });
};