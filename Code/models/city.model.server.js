const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();


const City = sequelizer.define('City', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
    },
    countryId: {
        type: DataTypes.BIGINT(11),
    }
}, {
    tableName: 'city'
});

module.exports.getCity = function () {
    return  City;
};


module.exports.syncCity = async function () {
    await this.getCity().sync({
        force: true
    });
};