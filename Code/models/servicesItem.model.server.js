const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

const ServicesItem = sequelizer.define('servicesItem', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(100),
    },
    img: {
        type: DataTypes.STRING(250),
    },
    order: {
        type: DataTypes.INTEGER,
        unique: true
    },
    subtitle: {
        type: DataTypes.STRING(500),
    }
}, {
    tableName: 'servicesItem'
});

module.exports.getServicesItem = function () {
    return ServicesItem;
};


module.exports.syncServicesItem = async function () {
    await this.getServicesItem().sync({
        alter: true
    });
};