const DocType = require('../models/documentType.model.server');
const {
    Op
} = require("sequelize");

module.exports.fetchAll = async () => {
    try {
        return await DocType
            .getDocumentType()
            .findAll();
    } catch (err) {
        throw new Error(err);
    }
};

module.exports.getByProcedureId = async (procedureId) => {
    try {
        return await DocType
            .getDocumentType()
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
        return await DocType
            .getDocumentType()
            .create(docType);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.update = async (docType) => {
    try {
        return await DocType
            .getDocumentType()
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
        return await DocType
            .getDocumentType()
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
        return await DocType
            .getDocumentType()
            .bulkCreate([
                {
                    documentTypeName: 'Rechnung'
                },
                {
                    documentTypeName: 'Zahlung'
                }
            ]);
    } catch (error) {
        throw new Error(error);
    }
};
