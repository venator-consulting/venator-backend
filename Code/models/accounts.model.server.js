const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');
const ProcedureModel = require('./procedures.model.server');


const sequelizer = sequelize.getSequelize();

const Accounts = sequelizer.define('Accounts', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    procedureId: {
        type: DataTypes.BIGINT(11)
    },
    accountTypeId: {
        type: DataTypes.BIGINT(11),
    },
    accountType: {
        type: DataTypes.STRING(10)
    },
    accountTypeIdInternal: {
        type: DataTypes.STRING(10)
    },
    accountNumber: {
        type: DataTypes.BIGINT(11)
    },
    accountName: {
        type: DataTypes.STRING(50)
    },
    nameAffix1: {
        type: DataTypes.STRING(25)
    },
    nameAffix2: {
        type: DataTypes.STRING(25)
    },
    VATId: {
        type: DataTypes.STRING(25)
    },
    taxNumber: {
        type: DataTypes.STRING(25)
    },
    street: {
        type: DataTypes.STRING(25)
    },
    postCode: {
        type: DataTypes.STRING(25)
    },
    city: {
        type: DataTypes.STRING(25)
    },
    country: {
        type: DataTypes.STRING(25)
    },
    contactPerson: {
        type: DataTypes.STRING(25)
    },
    phone: {
        type: DataTypes.STRING(25)
    },
    email: {
        type: DataTypes.STRING(25)
    },
    bankName1: {
        type: DataTypes.STRING(25)
    },
    bankSortCode1: {
        type: DataTypes.STRING(25)
    },
    bankAccountNo1: {
        type: DataTypes.STRING(25)
    },
    countryCode1: {
        type: DataTypes.STRING(25)
    },
    iBAN_No1: {
        type: DataTypes.STRING(25)
    },
    swift_code1: {
        type: DataTypes.STRING(25)
    },
    differentAccountHolder1: {
        type: DataTypes.STRING(25)
    },
    bankSortCode2: {
        type: DataTypes.STRING(25)
    },
    bankName2: {
        type: DataTypes.STRING(25)
    },
    bankAccountNo2: {
        type: DataTypes.STRING(25)
    },
    countryCode2: {
        type: DataTypes.STRING(25)
    },
    iBAN_No2: {
        type: DataTypes.STRING(25)
    },
    swift_code2: {
        type: DataTypes.STRING(25)
    },
    differentAccountHolder2: {
        type: DataTypes.STRING(25)
    },
    bankSortCode2: {
        type: DataTypes.STRING(25)
    },
    bankName3: {
        type: DataTypes.STRING(25)
    },
    bankAccountNo3: {
        type: DataTypes.STRING(25)
    },
    countryCode3: {
        type: DataTypes.STRING(25)
    },
    iBAN_No3: {
        type: DataTypes.STRING(25)
    },
    swift_code3: {
        type: DataTypes.STRING(25)
    },
    differentAccountHolder3: {
        type: DataTypes.STRING(25)
    }
}, {
    tableName: 'accounts'
});


// Accounts.belongsTo(ProcedureModel.getProcedures(), {
//     foreignKey: 'procedureId'
// });

module.exports.getAccounts = function () {
    return Accounts;
};


module.exports.syncAccounts = async function () {
    await this.getAccounts().sync({
        force: true
    });
};