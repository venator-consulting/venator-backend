const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

module.exports.getEmailAnalysisWord = function (tableName = 'email_analysis_word_') {
    const EmailAnalysisWord = sequelizer.define('emailAnalysisWord', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recordsCount: { type: DataTypes.INTEGER(11) },
        senderCount: { type: DataTypes.INTEGER(11) },
        attachments: { type: DataTypes.STRING(1000) },
        word: { type: DataTypes.STRING(250) },
        procedureId: { type: DataTypes.BIGINT(11) }
    }, {
        tableName: tableName
    });

    return EmailAnalysisWord;
};


module.exports.syncEmailAnalysisWord = async function (tableName = 'email_analysis_word_') {
    await this.getEmailAnalysisWord(tableName).sync({ alter: true });
};