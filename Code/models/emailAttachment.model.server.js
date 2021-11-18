const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();
const EmailHistory = require('./emails.model.server');


module.exports.getEmailAttachment = function (tableName = 'email_attachment_') {
    const EmailAttachment = sequelizer.define('emailAttachment', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        size: { type: DataTypes.INTEGER(15) },
        creationTime: { type: DataTypes.DATE },
        mimeTag: { type: DataTypes.STRING(500) },
        pstFilename: { type: DataTypes.STRING(1000) },
        originalName: { type: DataTypes.STRING(1000) },
        emailHistoryId: { type: DataTypes.BIGINT },
    }, {
        tableName: tableName
    });
    // const orgId = tableName.slice(-1);
    // EmailHistory.getEmailHistory('email_history_' + orgId).hasMany(EmailAttachment);
    // EmailAttachment.belongsTo(EmailHistory.getEmailHistory('email_history_' + orgId));


    return EmailAttachment;
};


module.exports.syncEmailAttachment = async function (tableName = 'email_attachment_') {
    await this.getEmailAttachment(tableName).sync({ alter: true });
};