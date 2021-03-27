const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');
// const AccountsModel = require('./accounts.model.server');

const sequelizer = sequelize.getSequelize();

const Procedures = sequelizer.define('Procedures', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.BIGINT(11),
    },
    name: {
        type: DataTypes.STRING(50),
    },
    procedureDate: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING(50),
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

// Procedures.hasMany(AccountsModel, {
//     foreignKey: 'procedureId'
// });

module.exports.getProcedures = function () {
    return Procedures;
};


module.exports.syncProcedures = async function () {
    await this.getProcedures().sync({
        alter: true
    });
};