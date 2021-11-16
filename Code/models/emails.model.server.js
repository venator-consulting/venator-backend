const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();


module.exports.getEmailHistory = function (tableName = 'email_history_') {
    return sequelizer.define('emailHistory', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: { type: DataTypes.STRING(250) },
        sender: { type: DataTypes.STRING(250) },
        subject: { type: DataTypes.STRING(250) },
        body: { type: DataTypes.TEXT },
        bodyHTML: { type: DataTypes.TEXT },
        bodyRTF: { type: DataTypes.TEXT },
        creationTime: { type: DataTypes.DATE },
        messageDeliveryTime: { type: DataTypes.DATE },
        bcc: { type: DataTypes.STRING(500) },
        cc: { type: DataTypes.STRING(500) },
        numberOfAttachments: { type: DataTypes.INTEGER },
        procedureId: { type: DataTypes.BIGINT }
    }, {
        tableName: tableName
    });
};


module.exports.syncEmailHistory = async function (tableName = 'email_history_') {
    await this.getEmailHistory(tableName).sync({ alter: true });
};