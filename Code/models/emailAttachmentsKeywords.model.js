const {
  DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

module.exports.getEmailAttachmentKeywords = function (tableName = 'email_attachment_keywords_') {
  const EmailAttachmentKeywords = sequelizer.define('emailAttachmentKeywords', {
      id: {
          type: DataTypes.BIGINT(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      keyword: { type: DataTypes.STRING(250) },
      emailHistoryId: { type: DataTypes.BIGINT },
      attachmentId: { type: DataTypes.BIGINT },
  }, {
      tableName: tableName
  });

  return EmailAttachmentKeywords;
};


module.exports.syncEmailAttachmentKeywords = async function (tableName = 'email_attachment_keywords_') {
  await this.getEmailAttachmentKeywords(tableName).sync({ alter: true });
};