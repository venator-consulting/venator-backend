const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();



module.exports.getTextWord = function (tableName = 'text_analysis_word_') {
    return sequelizer.define('TextWord', {
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
        accountsCount: {
            type: DataTypes.INTEGER
        },
        recordsCount: {
            type: DataTypes.INTEGER
        },
        word: {
            type: DataTypes.STRING(50)
        },
        step: {
            type: DataTypes.STRING(25)
        }
    }, {
        tableName: tableName
    });
};


module.exports.syncTextWord = async function (tableName = 'text_analysis_word_') {
    await this.getTextWord(tableName).sync({
        alter: true
    });
};