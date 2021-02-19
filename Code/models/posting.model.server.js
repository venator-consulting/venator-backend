const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/sequelize.config');


const sequelizer = sequelize.getSequelize();

const Posting = sequelizer.define('Posting', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false
    },
    procedureId: {
        type: DataTypes.BIGINT(11)
    },
    client: {
        type: DataTypes.STRING(10)
    },
    companyCode: {
        type: DataTypes.STRING(10)
    },
    recordNumber: {
        type: DataTypes.BIGINT(11)
    },
    documentNumber: {
        type: DataTypes.STRING(25)
    },
    documentNumber2: {
        type: DataTypes.STRING(25)
    },
    assignment: {
        type: DataTypes.STRING(25)
    },
    reference: {
        type: DataTypes.STRING(25)
    },
    documentTypeNumber: {
        type: DataTypes.BIGINT(11)
    },
    documentTypeName: {
        type: DataTypes.STRING(25)
    },
    documentTypeNew: {
        type: DataTypes.STRING(25)
    },
    documentDate: {
        type: DataTypes.DATE
    },
    postingDate: {
        type: DataTypes.DATE
    },
    dueDate: {
        type: DataTypes.DATE
    },
    dueDateNew: {
        type: DataTypes.DATE
    },
    fiscalYear: {
        type: DataTypes.STRING(25)
    },
    postingPeriod: {
        type: DataTypes.INTEGER
    },
    executionDate: {
        type: DataTypes.DATE
    },
    accountType: {
        type: DataTypes.STRING(10)
    },
    accountNumber: {
        type: DataTypes.STRING(25)
    },
    accountName: {
        type: DataTypes.STRING(25)
    },
    GLAccountNumber: {
        type: DataTypes.STRING(25)
    },
    GLAccountName: {
        type: DataTypes.STRING(25)
    },
    debtorNumber: {
        type: DataTypes.STRING(25)
    },
    debtorName: {
        type: DataTypes.STRING(25)
    },
    creditorNumber: {
        type: DataTypes.STRING(25)
    },
    creditorName: {
        type: DataTypes.STRING(25)
    },
    contraAccountType: {
        type: DataTypes.BIGINT(11)
    },
    contraAccountNumber: {
        type: DataTypes.STRING(25)
    },
    contraAccountName: {
        type: DataTypes.STRING(25)
    },
    contraAccountGLAccountNo: {
        type: DataTypes.STRING(25)
    },
    contraAccountGLAccountName: {
        type: DataTypes.STRING(25)
    },
    contraAccountDebtorNo: {
        type: DataTypes.STRING(25)
    },
    contraAccountDebtorName: {
        type: DataTypes.STRING(25)
    },
    contraAccountCreditorNo: {
        type: DataTypes.STRING(25)
    },
    contraAccountCreditorName: {
        type: DataTypes.STRING(25)
    },
    balance: {
        type: DataTypes.DECIMAL(13, 2)
    },
    debitCredit: {
        type: DataTypes.STRING(10)
    },
    debitAmount: {
        type: DataTypes.DECIMAL(13, 2)
    },
    creditAmount: {
        type: DataTypes.DECIMAL(13, 2)
    },
    balanceTransactionCurrency: {
        type: DataTypes.DECIMAL(13, 2)
    },
    debitAmountTransactionCurrency: {
        type: DataTypes.DECIMAL(13, 2)
    },
    creditAmountTransactionCurrency: {
        type: DataTypes.DECIMAL(13, 2)
    },
    transactionCurrency: {
        type: DataTypes.STRING(25)
    },
    exchangeRate: {
        type: DataTypes.DECIMAL(13, 5)
    },
    cashDiscount: {
        type: DataTypes.DECIMAL(13, 5)
    },
    textPosting: {
        type: DataTypes.STRING(255)
    },
    textHeader: {
        type: DataTypes.STRING(255)
    },
    postingKey: {
        type: DataTypes.STRING(10)
    },
    salesTaxKey: {
        type: DataTypes.STRING(25)
    },
    taxRate: {
        type: DataTypes.STRING(25)
    },
    euTaxRate: {
        type: DataTypes.STRING(25)
    },
    taxAmount: {
        type: DataTypes.DECIMAL(13, 2)
    },
    taxAmountDebit: {
        type: DataTypes.DECIMAL(13, 2)
    },
    taxAmountCredit: {
        type: DataTypes.DECIMAL(13, 2)
    },
    stackNumber: {
        type: DataTypes.STRING(25)
    },
    CostCenter1: {
        type: DataTypes.STRING(25)
    },
    CostCenter2: {
        type: DataTypes.STRING(25)
    },
    applicationDocument: {
        type: DataTypes.STRING(25)
    },
    applicationDate: {
        type: DataTypes.DATE
    },
    applicationDateNew: {
        type: DataTypes.DATE
    },
    identifierBalanceCarryforward: {
        type: DataTypes.INTEGER
    },
    generalReversal: {
        type: DataTypes.STRING(25)
    },
    ledgerId: {
        type: DataTypes.STRING(25)
    },
    documentLink: {
        type: DataTypes.STRING(150)
    },
    typeDocumentInformation1: {
        type: DataTypes.STRING(25)
    },
    contentDocumentInformation1: {
        type: DataTypes.STRING(50)
    },
    typeDocumentInformation2: {
        type: DataTypes.STRING(25)
    },
    contentDocumentInformation2: {
        type: DataTypes.STRING(50)
    },
    typeDocumentInformation3: {
        type: DataTypes.STRING(25)
    },
    contentDocumentInformation3: {
        type: DataTypes.STRING(50)
    },
    typeDocumentInformation4: {
        type: DataTypes.STRING(25)
    },
    contentDocumentInformation4: {
        type: DataTypes.STRING(50)
    },
    typeDocumentInformation5: {
        type: DataTypes.STRING(25)
    },
    contentDocumentInformation5: {
        type: DataTypes.STRING(50)
    },
    typeDocumentInformation6: {
        type: DataTypes.STRING(25)
    },
    contentDocumentInformation6: {
        type: DataTypes.STRING(50)
    },
    typeDocumentInformation7: {
        type: DataTypes.STRING(25)
    },
    contentDocumentInformation7: {
        type: DataTypes.STRING(50)
    },
    typeDocumentInformation8: {
        type: DataTypes.STRING(25)
    },
    contentDocumentInformation8: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'Posting'
});


// await User.sync({ force: true });