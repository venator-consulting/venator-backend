const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

const SocialLinks = sequelizer.define('socialLinks', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
    },
    icon: {
        type: DataTypes.STRING(100),
    },
    order: {
        type: DataTypes.INTEGER,
        unique: true
    },
    url: {
        type: DataTypes.STRING(500),
    }
}, {
    tableName: 'socialLinks'
});

module.exports.getSocialLinks = function () {
    return SocialLinks;
};


module.exports.syncSocialLinks = async function () {
    await this.getSocialLinks().sync({
        alter: true
    });
};