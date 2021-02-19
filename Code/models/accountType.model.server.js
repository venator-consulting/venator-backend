const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();


const AccountType = sequelizer.define('AccountType', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    AccountTypeId: {
        type: DataTypes.BIGINT(11),
    },
    AccountTypeName: {
        type: DataTypes.ENUM("Debitor", "Kreditor", "Sachkonto", "Finanzkonto"),
    }
}, {
    tableName: 'account_type'
});

module.exports.getAccountType = function () {
    return  AccountType;
};


module.exports.syncAccountType = async function () {
    await this.getAccountType().sync({
        force: true
    });
};