const AccountType = require('../models/accountType.model.server');
const {
    Op
} = require("sequelize");

module.exports.fetchAll = async () => {
    try {
        return await AccountType
            .getAccountType()
            .findAll();
    } catch (err) {
        throw new Error(err);
    }
};

module.exports.getByProcedureId = async (procedureId) => {
    try {
        return await AccountType
            .getAccountType()
            .findAll({
                where: {
                    ProcedureId: procedureId
                }
            });
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.insert = async (docType) => {
    try {
        return await AccountType
            .getAccountType()
            .create(docType);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.update = async (docType) => {
    try {
        return await AccountType
            .getAccountType()
            .update(docType, {
                where: {
                    id: docType.id
                }
            });
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.delete = async(id) => {
    try {
        return await AccountType
            .getAccountType()
            .destroy({
                where: {
                    id: id
                }
            });
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.createDefault = async () => {
    try {
        return await AccountType
            .getAccountType()
            .bulkCreate([
                {
                    AccountTypeName: 'Debitor'
                },
                {
                    AccountTypeName: 'Kreditor'
                },
                {
                    AccountTypeName: 'Sachkonto'
                },
                {
                    AccountTypeName: 'Finanzkonto'
                }
            ]);
    } catch (error) {
        throw new Error(error);
    }
};
