const Excel = require('exceljs');
const Workbook = new Excel.Workbook();
const fs = require("fs");
const PostingModel = require('../models/posting.model.server');
const AccountModel = require('../models/accounts.model.server');
const SapWmobel = require('../models/templates/sap.wmobel.template');
const SapCinram = require('../models/templates/sap.cinram.template');
const sequelize = require('../config/sequelize.config');
const templatesTypeEnum = require('../models/enums/template.type');
const AccountTypeEnum = require('../models/enums/account.type');

const chrono = require('chrono-node');

const env = require('../config/environment');


const sequelizer = sequelize.getSequelize();




module.exports.readHeader = async function (excelFilePath, templateType = 1, template = null) {

    if (templateType == templatesTypeEnum.SAP_WMOBEL) {
        Standardtemplate = SapWmobel;
    } else if (templateType == templatesTypeEnum.SAP_CINRAM) {
        Standardtemplate = SapCinram.posting;
    } else {
        Standardtemplate = template;
    }


    const stream = fs.createReadStream(excelFilePath);
    const streamWorkBook = await Workbook.xlsx.read(stream);
    const sheet = streamWorkBook.getWorksheet(1);
    const actualColumnCount = sheet.actualColumnCount;
    const actualRowCount = sheet.actualRowCount;
    // if no rows return an error response.
    if (actualRowCount <= 0) return;
    if (actualColumnCount <= 0) return;
    let fileHeaders = [];
    for (let i = 1; i < actualColumnCount; i++) {
        fileHeaders.push(sheet.getRow(1).getCell(i).value);
    }
    return fileHeaders;
}

//template: list of mapping objects between db headers and file headers
// fileHeaders: list of headers of file
// header: name of the header to get index of it in the file
// return index of header in the file or -1 if not found
_getHeaderIndex = function (template, fileHeaders, header) {
    // get name of file header
    const fileHeader = template[header];
    let index = -2;
    // get index of header in file
    // should throw a custom exception
    // but for now return nothing
    if (!Array.isArray(fileHeaders)) return;
    for (let i = 0; i < fileHeaders.length; i++) {
        if (fileHeaders[i] == fileHeader) {
            index = i;
            break;
        }
    }
    return (index + 1);
}


module.exports.readExcelFile = async function (excelFilePath) {

    const stream = fs.createReadStream(excelFilePath);

    const streamWorkBook = await Workbook.xlsx.read(stream);
    const sheet = streamWorkBook.getWorksheet(1);

    const actualColumnCount = sheet.actualColumnCount;
    const actualRowCount = sheet.actualRowCount;

    if (actualRowCount <= 0) return;
    if (actualColumnCount <= 0) return;

    // get headers
    let fileHeaders = [];
    for (let i = 1; i < actualColumnCount; i++) {
        fileHeaders.push(sheet.getRow(1).getCell(i).value);
    }

    let rowsToInsert = [];

    const assignmentIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'assignment');
    const documentNumberIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'documentNumber');
    const documentTypeIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'documentType');
    const documentDateIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'documentDate');
    const recordNumberIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'recordNumber');
    const creditAmountIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'creditAmount');
    const transactionCurrencyIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'transactionCurrency');
    const applicationDocumentIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'applicationDocument');
    const textPostingIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'textPosting');
    const applicationDateIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'applicationDate');
    const postingDateIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'postingDate');
    const companyCodeIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'companyCode');
    const fiscalYearIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'fiscalYear');
    const postingPeriodIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'postingPeriod');
    const accountTypeIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'accountType');
    const accountNumberIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'accountNumber');
    const debitCreditIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'debitCredit');
    const referenceIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'reference');
    const GLAccountNumberIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'GLAccountNumber');
    const contraAccountTypeIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountType');
    const contraAccountNumberIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountNumber');
    const contraAccountGLAccountNoIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountGLAccountNo');
    const contraAccountCreditorNoIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountCreditorNo');
    const contraAccountDebtorNoIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountDebtorNo');
    const dueDateIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'dueDate');
    const textHeaderIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'textHeader');
    const accountNameIndex = _getHeaderIndex(Standardtemplate, fileHeaders, 'accountName');

    const roundsNo = Math.floor(actualRowCount / env.bulkInsertSize);

    const roundsRest = actualRowCount % env.bulkInsertSize;

    const t = await sequelizer.transaction();


    for (let i = 2; i < roundsRest; i++) {
        rowsToInsert.push({
            assignment: assignmentIndex > 0 ? sheet.getRow(i).getCell(assignmentIndex).value : null,
            documentNumber: documentNumberIndex > 0 ? sheet.getRow(i).getCell(documentNumberIndex).value : null,
            documentType: documentTypeIndex > 0 ? sheet.getRow(i).getCell(documentTypeIndex).value : null,
            documentDate: documentDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(documentDateIndex).value) : null,
            recordNumber: recordNumberIndex > 0 ? sheet.getRow(i).getCell(recordNumberIndex).value : null,
            creditAmount: creditAmountIndex > 0 ? sheet.getRow(i).getCell(creditAmountIndex).value : null,
            transactionCurrency: transactionCurrencyIndex > 0 ? sheet.getRow(i).getCell(transactionCurrencyIndex).value : null,
            applicationDocument: applicationDocumentIndex > 0 ? sheet.getRow(i).getCell(applicationDocumentIndex).value : null,
            textPosting: textPostingIndex > 0 ? sheet.getRow(i).getCell(textPostingIndex).value : null,
            applicationDate: applicationDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(applicationDateIndex).value) : null,
            postingDate: postingDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(postingDateIndex).value) : null,
            companyCode: companyCodeIndex > 0 ? sheet.getRow(i).getCell(companyCodeIndex).value : null,
            fiscalYear: fiscalYearIndex > 0 ? sheet.getRow(i).getCell(fiscalYearIndex).value : null,
            postingPeriod: postingPeriodIndex > 0 ? sheet.getRow(i).getCell(postingPeriodIndex).value : null,
            accountType: accountTypeIndex > 0 ? sheet.getRow(i).getCell(accountTypeIndex).value : null,
            accountNumber: accountNumberIndex > 0 ? sheet.getRow(i).getCell(accountNumberIndex).value : null,
            debitCredit: debitCreditIndex > 0 ? sheet.getRow(i).getCell(debitCreditIndex).value : null,
            reference: referenceIndex > 0 ? sheet.getRow(i).getCell(referenceIndex).value : null,
            GLAccountNumber: GLAccountNumberIndex > 0 ? sheet.getRow(i).getCell(GLAccountNumberIndex).value : null,
            contraAccountType: contraAccountTypeIndex > 0 ? sheet.getRow(i).getCell(contraAccountTypeIndex).value : null,
            contraAccountNumber: contraAccountNumberIndex > 0 ? sheet.getRow(i).getCell(contraAccountNumberIndex).value : null,
            contraAccountGLAccountNo: contraAccountGLAccountNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountGLAccountNoIndex).value : null,
            contraAccountCreditorNo: contraAccountCreditorNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountCreditorNoIndex).value : null,
            contraAccountDebtorNo: contraAccountDebtorNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountDebtorNoIndex).value : null,
            dueDate: dueDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(dueDateIndex).value) : null,
            textHeader: textHeaderIndex > 0 ? sheet.getRow(i).getCell(textHeaderIndex).value : null,
            accountName: accountNameIndex > 0 ? sheet.getRow(i).getCell(accountNameIndex).value : null,
        });
    }

    try {
        await PostingModel
            .getPosting()
            .bulkCreate(rowsToInsert, {
                transaction: t
            })


        let rowsToInsert2 = [];

        for (let iterator = 0; iterator < roundsNo; iterator++) {
            rowsToInsert2 = [];
            for (let i = ((iterator * env.bulkInsertSize) + roundsRest); i < ((iterator * env.bulkInsertSize) + (env.bulkInsertSize + roundsRest)); i++) {
                rowsToInsert2.push({
                    assignment: assignmentIndex > 0 ? sheet.getRow(i).getCell(assignmentIndex).value : null,
                    documentNumber: documentNumberIndex > 0 ? sheet.getRow(i).getCell(documentNumberIndex).value : null,
                    documentType: documentTypeIndex > 0 ? sheet.getRow(i).getCell(documentTypeIndex).value : null,
                    documentDate: documentDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(documentDateIndex).value) : null,
                    recordNumber: recordNumberIndex > 0 ? sheet.getRow(i).getCell(recordNumberIndex).value : null,
                    creditAmount: creditAmountIndex > 0 ? sheet.getRow(i).getCell(creditAmountIndex).value : null,
                    transactionCurrency: transactionCurrencyIndex > 0 ? sheet.getRow(i).getCell(transactionCurrencyIndex).value : null,
                    applicationDocument: applicationDocumentIndex > 0 ? sheet.getRow(i).getCell(applicationDocumentIndex).value : null,
                    textPosting: textPostingIndex > 0 ? sheet.getRow(i).getCell(textPostingIndex).value : null,
                    applicationDate: applicationDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(applicationDateIndex).value) : null,
                    postingDate: postingDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(postingDateIndex).value) : null,
                    companyCode: companyCodeIndex > 0 ? sheet.getRow(i).getCell(companyCodeIndex).value : null,
                    fiscalYear: fiscalYearIndex > 0 ? sheet.getRow(i).getCell(fiscalYearIndex).value : null,
                    postingPeriod: postingPeriodIndex > 0 ? sheet.getRow(i).getCell(postingPeriodIndex).value : null,
                    accountType: accountTypeIndex > 0 ? sheet.getRow(i).getCell(accountTypeIndex).value : null,
                    accountNumber: accountNumberIndex > 0 ? sheet.getRow(i).getCell(accountNumberIndex).value : null,
                    debitCredit: debitCreditIndex > 0 ? sheet.getRow(i).getCell(debitCreditIndex).value : null,
                    reference: referenceIndex > 0 ? sheet.getRow(i).getCell(referenceIndex).value : null,
                    GLAccountNumber: GLAccountNumberIndex > 0 ? sheet.getRow(i).getCell(GLAccountNumberIndex).value : null,
                    contraAccountType: contraAccountTypeIndex > 0 ? sheet.getRow(i).getCell(contraAccountTypeIndex).value : null,
                    contraAccountNumber: contraAccountNumberIndex > 0 ? sheet.getRow(i).getCell(contraAccountNumberIndex).value : null,
                    contraAccountGLAccountNo: contraAccountGLAccountNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountGLAccountNoIndex).value : null,
                    contraAccountCreditorNo: contraAccountCreditorNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountCreditorNoIndex).value : null,
                    contraAccountDebtorNo: contraAccountDebtorNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountDebtorNoIndex).value : null,
                    dueDate: dueDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(dueDateIndex).value) : null,
                    textHeader: textHeaderIndex > 0 ? sheet.getRow(i).getCell(textHeaderIndex).value : null,
                    accountName: accountNameIndex > 0 ? sheet.getRow(i).getCell(accountNameIndex).value : null,
                });
            }




            await PostingModel
                .getPosting()
                .bulkCreate(rowsToInsert2, {
                    transaction: t
                })

        }

        await t.commit();

    } catch (err) {
        console.log(err);
        await t.rollback();
    }


} // end of reading posting file function


// to-do: procedureId as parameter
module.exports.importAccountExcelFile = async function (excelFilePath, accountType = 1) {

    const stream = fs.createReadStream(excelFilePath);

    const streamWorkBook = await Workbook.xlsx.read(stream);
    const sheet = streamWorkBook.getWorksheet(1);

    const actualColumnCount = sheet.actualColumnCount;
    const actualRowCount = sheet.actualRowCount;

    if (actualRowCount <= 0) return;
    if (actualColumnCount <= 0) return;

    // get headers
    let fileHeaders = [];
    for (let i = 1; i < actualColumnCount; i++) {
        fileHeaders.push(sheet.getRow(1).getCell(i).value);
    }

    let rowsToInsert = [];

    const roundsNo = Math.floor(actualRowCount / env.bulkInsertSize);

    const roundsRest = actualRowCount % env.bulkInsertSize;

    const t = await sequelizer.transaction();


    for (let i = 2; i < roundsRest; i++) {
        rowsToInsert.push({
            accountNumber: sheet.getRow(i).getCell(1).value,
            accountName: sheet.getRow(i).getCell(3).value,
            accountType: AccountTypeEnum[accountType]
        });
    }

    try {
        await AccountModel
            .getAccounts()
            .bulkCreate(rowsToInsert, {
                transaction: t
            })


        let rowsToInsert2 = [];

        for (let iterator = 0; iterator < roundsNo; iterator++) {
            rowsToInsert2 = [];
            for (let i = ((iterator * env.bulkInsertSize) + roundsRest); i < ((iterator * env.bulkInsertSize) + (env.bulkInsertSize + roundsRest)); i++) {
                rowsToInsert2.push({
                    accountNumber: sheet.getRow(i).getCell(1).value,
                    accountName: sheet.getRow(i).getCell(3).value,
                    accountType: AccountTypeEnum[accountType]
                });
            }




            await AccountModel
                .getAccounts()
                .bulkCreate(rowsToInsert2, {
                    transaction: t
                })

        }

        await t.commit();

    } catch (err) {
        console.log(err);
        await t.rollback();
    }


} // end of reading account file function