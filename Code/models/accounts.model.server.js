const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');
const ProcedureModel = require('./procedures.model.server');


const sequelizer = sequelize.getSequelize();

// Accounts.belongsTo(ProcedureModel.getProcedures(), {
//     foreignKey: 'procedureId'
// });

module.exports.getAccounts = function (tableName = 'accounts') {
    return sequelizer.define('Accounts', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        procedureId: {
            type: DataTypes.BIGINT(11)
        },
        // etry later by user not in import process
        // my account
        accountTypeId: {
            type: DataTypes.BIGINT(11),
        },
        // from import ex: kontraart
        accountType: {
            type: DataTypes.STRING(10)
        },
        // not in import process
        accountTypeIdInternal: {
            type: DataTypes.STRING(10)
        },
        // Kontra
        accountNumber: {
            type: DataTypes.STRING(25)
        },
        // 
        accountName: {
            type: DataTypes.STRING(50)
        },
        companyCode: {
            type: DataTypes.STRING(10)
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
        tableName: tableName
    });
};


module.exports.syncAccounts = async function (tableName = 'accounts') {
    await this.getAccounts(tableName).sync({
        alter: true
    });
};