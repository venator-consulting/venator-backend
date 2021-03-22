const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();


const Street = sequelizer.define('Street', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
    },
    cityId: {
        type: DataTypes.BIGINT(11),
    }
}, {
    tableName: 'street'
});

module.exports.getStreet = function () {
    return  Street;
};


module.exports.syncStreet = async function () {
    await this.getStreet().sync({
        alter: true
    });
};