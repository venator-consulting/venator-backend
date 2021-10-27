const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

const AboutItem = sequelizer.define('aboutItem', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(100),
    },
    icon: {
        type: DataTypes.STRING(100),
    },
    subtitle: {
        type: DataTypes.STRING(500),
        unique: true
    },
    order: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'aboutItem'
});

module.exports.getAboutItem = function () {
    return AboutItem;
};


module.exports.syncAboutItem = async function () {
    await this.getAboutItem().sync({
        alter: true
    });
};