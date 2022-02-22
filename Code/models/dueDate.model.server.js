const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();



module.exports.getDueDate = function (tableName = 'due_date_analysis_') {
    return sequelizer.define('DueDate', {
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
        accountType: {
            type: DataTypes.STRING(10)
        },
        documentDate: {
            type: DataTypes.DATE
        },
        dueDate: {
            type: DataTypes.DATE
        },
        applicationDate: {
            type: DataTypes.DATE
        },
        balance: {
            type: DataTypes.DECIMAL(13,2)
        },
        documentTypeNewName: {
            type: DataTypes.STRING(25)
        },
        documentType: {
            type: DataTypes.STRING(25)
        }, 
        dayDiff: {
            type: DataTypes.INTEGER(6)
        }
    }, {
        tableName: tableName
    });
};


module.exports.syncDueDate = async function (tableName = 'due_date_analysis_') {
    await this.getDueDate(tableName).sync({
        alter: true
    });
};