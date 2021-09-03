const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();



module.exports.getTextAccount = function (tableName = 'text_analysis_account_') {
    return sequelizer.define('TextAccount', {
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
        fromDate: {
            type: DataTypes.DATE,
        },
        toDate: {
            type: DataTypes.DATE
        },
        accountNumber: {
            type: DataTypes.STRING(25)
        },
        accountName: {
            type: DataTypes.STRING(50)
        },
        totlaCount: {
            type: DataTypes.INTEGER
        },
        step: {
            type: DataTypes.STRING(25)
        }
    }, {
        tableName: tableName
    });
};


module.exports.syncTextAccount = async function (tableName = 'text_analysis_account_') {
    await this.getTextAccount(tableName).sync({
        alter: true
    });
};