const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');

const sequelizer = sequelize.getSequelize();

const Procedures = sequelizer.define('Procedures', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
    },
    procedureDate: {
        type: DataTypes.DATE
    },
    data: {
        type: DataTypes.BOOLEAN
    },
    analysis: {
        type: DataTypes.BOOLEAN
    },
    dataSource: {
        type: DataTypes.STRING(50)
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'Procedures'
});


module.exports.getProcedures = function () {
    return Procedures;
};


module.exports.syncProcedures = async function () {
    await this.getProcedures().sync({
        alter: true
    });
};