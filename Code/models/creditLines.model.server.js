const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();



module.exports.getCreditLines = function (tableName = 'creditLines') {
    return sequelizer.define('CreditLines', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        accountNumber: {
            type: DataTypes.STRING(25),
        },
        procedureId: {
            type: DataTypes.BIGINT(11)
        },
        creditLineFromDate: {
            type: DataTypes.DATE,
        },
        creditLineToDate: {
            type: DataTypes.DATE
        },
        creditLine: {
            type: DataTypes.DECIMAL(13, 2)
        }
    }, {
        tableName: tableName
    });
};


module.exports.syncCreditLines = async function (tableName = 'creditLines') {
    await this.getCreditLines(tableName).sync({
        alter: true
    });
};