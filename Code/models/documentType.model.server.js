const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

const DocumentType = sequelizer.define('DocumentType', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // procedureId: {
    //     type: DataTypes.BIGINT(11),
    // },
    // documentTypeId: {
    //     type: DataTypes.BIGINT(11),
    // },
    documentTypeName: {
        type: DataTypes.ENUM("Rechnung", "Zahlung"),
    }
}, {
    tableName: 'document_type'
});

module.exports.getDocumentType = function () {
    return  DocumentType;
};


module.exports.syncDocumentType = async function () {
    await this.getDocumentType().sync({
        alter: true
    });
};