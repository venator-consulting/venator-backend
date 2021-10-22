const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

const Website = sequelizer.define('Website', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(250),
    },
    phone: {
        type: DataTypes.STRING(50),
    },
    fax: {
        type: DataTypes.STRING(50),
        unique: true
    },
    street: {
        type: DataTypes.STRING(150),
    },
    city: {
        type: DataTypes.STRING(150),
    },
    country: {
        type: DataTypes.STRING(150),
    },
    logo: {
        type: DataTypes.STRING(250),
    },
}, {
    tableName: 'Website'
});

module.exports.getWebsite = function () {
    return Website;
};


module.exports.syncWebsite = async function () {
    await this.getWebsite().sync({
        alter: true
    });
};