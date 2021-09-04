const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();



module.exports.getAmount = function (tableName = 'amount_analysis_') {
    return sequelizer.define('Amount', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        procedureId: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
        },
        accountNumber: {
            type: DataTypes.STRING(25)
        },
        accountName: {
            type: DataTypes.STRING(50)
        },
        balance: {
            type: DataTypes.DECIMAL(13, 2),
        },
        accountType: {
            type: DataTypes.STRING(10),
        },
        documentType: {
            type: DataTypes.STRING(25),
        },
        // step: {
        //     type: DataTypes.STRING(25)
        // }
    }, {
        tableName: tableName
    });
};


module.exports.syncAmount = async function (tableName = 'amount_analysis_') {
    await this.getAmount(tableName).sync({
        alter: true
    });
};