const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

const EmailAttachment = require('./emailAttachment.model.server');


module.exports.getEmailHistory = function (tableName = 'email_history_') {
    const EmailHistory = sequelizer.define('emailHistory', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: { type: DataTypes.STRING(250) },
        sender: { type: DataTypes.STRING(250) },
        rcvName: { type: DataTypes.STRING(250) },
        rcvEmail: { type: DataTypes.STRING(250) },
        subject: { type: DataTypes.STRING(250) },
        body: { type: DataTypes.TEXT },
        bodyHTML: { type: DataTypes.TEXT },
        bodyRTF: { type: DataTypes.TEXT },
        creationTime: { type: DataTypes.DATE },
        messageDeliveryTime: { type: DataTypes.DATE },
        bcc: { type: DataTypes.STRING(500) },
        cc: { type: DataTypes.STRING(500) },
        numberOfAttachments: { type: DataTypes.INTEGER },
        procedureId: { type: DataTypes.BIGINT },
        senderRelevant: { type: DataTypes.BOOLEAN },
        senderComment: { type: DataTypes.STRING(500) },
        accountNumber: { type: DataTypes.STRING(25) },
        accountName: { type: DataTypes.STRING(50) },
        accountEmail: { type: DataTypes.STRING(250) },
        accountId: { type: DataTypes.BIGINT },
    }, {
        tableName: tableName
    });

    const orgId = tableName.slice(-1);
    EmailHistory.hasMany(EmailAttachment.getEmailAttachment('email_attachment_' + orgId));
    EmailAttachment.getEmailAttachment('email_attachment_' + orgId).belongsTo(EmailHistory);
    return EmailHistory;
};


module.exports.syncEmailHistory = async function (tableName = 'email_history_') {
    await this.getEmailHistory(tableName).sync({ alter: true });
};