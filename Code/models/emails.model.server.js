const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();



const EmailHistory = sequelizer.define('emailHistory', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: { type: DataTypes.STRING(250) },
    sender: { type: DataTypes.STRING(250) },
    subject: { type: DataTypes.STRING(250) },
    body: { type: DataTypes.STRING(1000) },
    bodyHTML: { type: DataTypes.STRING(1000) },
    bodyRTF: { type: DataTypes.STRING(1000) },
    creationTime: { type: DataTypes.DATE },
    messageDeliveryTime: { type: DataTypes.DATE },
    bcc: { type: DataTypes.STRING(500) },
    cc: { type: DataTypes.STRING(500) },
    numberOfAttachments: { type: DataTypes.INTEGER },
}, {
    tableName: 'emailHistory'
});

module.exports.getEmailHistory = function () {
    return EmailHistory;
};


module.exports.syncEmailHistory = async function () {
    await this.getEmailHistory().sync({
        alter: true
    });
};