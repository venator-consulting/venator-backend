const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

module.exports.getEmailAnalysisSender = function (tableName = 'email_analysis_sender_') {
    const EmailAnalysisSender = sequelizer.define('emailAnalysisSender', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        totlaCount: { type: DataTypes.INTEGER(11) },
        email: { type: DataTypes.STRING(250) },
        sender: { type: DataTypes.STRING(250) },
        procedureId: { type: DataTypes.BIGINT(11) },
        accountNumber: { type: DataTypes.STRING(25) },
        accountName: { type: DataTypes.STRING(50) },
        accountEmail: { type: DataTypes.STRING(250) },
        accountId: { type: DataTypes.BIGINT },
    }, {
        tableName: tableName
    });

    return EmailAnalysisSender;
};


module.exports.syncEmailAnalysisSender = async function (tableName = 'email_analysis_sender_') {
    await this.getEmailAnalysisSender(tableName).sync({ alter: true });
};