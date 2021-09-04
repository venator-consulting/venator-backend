const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();



module.exports.getCreditor = function (tableName = 'creditor_analysis_') {
    return sequelizer.define('Creditor', {
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
            type: DataTypes.STRING(25),
        },
        accountName: {
            type: DataTypes.STRING(50)
        },
        totlaCount: {
            type: DataTypes.INTEGER
        },
        totalBalance: {
            type: DataTypes.DECIMAL(13, 2),
        }
    }, {
        tableName: tableName
    });
};


module.exports.syncCreditor = async function (tableName = 'creditor_analysis_') {
    await this.getCreditor(tableName).sync({
        alter: true
    });
};