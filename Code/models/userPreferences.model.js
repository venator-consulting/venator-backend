const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');
const User = require('./user.model.server').getUser();

const sequelizer = sequelize.getSequelize();


const UserPreferences = sequelizer.define('UserPreferences', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
    },
    dataTableColumns: {
        type: DataTypes.STRING(2500),
    }
}, {
    tableName: 'userPreferences'
});

module.exports.getUserPreferences = function () {
    return UserPreferences;
};


module.exports.syncUserPreferences = async function () {
    await this.getUserPreferences().sync({ alter: true });
};