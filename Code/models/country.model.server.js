const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();


const Country = sequelizer.define('Country', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
    },
    CountryCode: {
        type: DataTypes.BIGINT(11),
    }
}, {
    tableName: 'country'
});

module.exports.getCountry = function () {
    return  Country;
};


module.exports.syncCountry = async function () {
    await this.getCountry().sync({
        alter: true
    });
};