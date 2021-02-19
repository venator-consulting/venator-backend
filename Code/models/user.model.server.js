const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();


const User = sequelizer.define('User', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    managerId : {
        type: DataTypes.BIGINT(11),
    },
    firstname: {
        type: DataTypes.STRING(25),
    },
    lastname: {
        type: DataTypes.STRING(25),
    },
    email: {
        type: DataTypes.STRING(50),
    },
    role: {
        type: DataTypes.STRING(15),
    },
    title: {
        type: DataTypes.STRING(10),
    },
    mobileNumber: {
        type: DataTypes.STRING(25),
    },
    username: {
        type: DataTypes.STRING(25),
    },
    password: {
        type: DataTypes.STRING(50),
    },
    city: {
        type: DataTypes.STRING(25),
    },
    postCode: {
        type: DataTypes.STRING(25),
    },
    street: {
        type: DataTypes.STRING(50),
    },
    housenumber: {
        type: DataTypes.INTEGER,
    },
    contactPerson: {
        type: DataTypes.STRING(50),
    },
    note: {
        type: DataTypes.STRING(50),
    },
}, {
    tableName: 'users'
});

module.exports.getUser = function () {
    return  User;
};


module.exports.syncUser = async function () {
    await this.getUser().sync({
        force: true
    });
};