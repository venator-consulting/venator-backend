const Excel = require('exceljs');
const Workbook = new Excel.Workbook();
const fs = require("fs");
const PostingModel = require('../models/posting.model.server');
const Standardtemplate = require('../models/templates/standard');



module.exports.readHeader = async function (excelFilePath) {
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
    let index = -1;
    // get index of header in file
    // should throw a custom exception
    // but for now return nothing
    if (!Array.isArray(fileHeader)) return;
    for (let i = 0; i < fileHeaders.length; i++) {
        if (fileHeaders[i] == header) {
            index = i;
            break;
        }
    }
    return index;
}


module.exports.readExcelFile = async function (excelFilePath) {

    const stream = fs.createReadStream(excelFilePath);

    const streamWorkBook = await Workbook.xlsx.read(stream);
    const sheet = streamWorkBook.getWorksheet(1);

    for (let i = 1; i <= sheet.rowCount; i++) {
        console.log(sheet.getRow(i).getCell(1).value);
        console.log(sheet.getRow(i).getCell(2).value);
    }

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

    for (let i = 2; i < actualRowCount; i++) {
        rowsToInsert.push({
            assignment: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'assignment')).value,
            documentNumber: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'documentNumber')).value,
            documentType: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'documentType')).value,
            documentDate: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'documentDate')).value,
            recordNumber: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'recordNumber')).value,
            creditAmount: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'creditAmount')).value,
            transactionCurrency: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'transactionCurrency')).value,
            applicationDocument: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'applicationDocument')).value,
            textPosting: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'textPosting')).value,
            applicationDate: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'applicationDate')).value,
            postingDate: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'postingDate')).value,
            companyCode: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'companyCode')).value,
            fiscalYear: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'fiscalYear')).value,
            postingPeriod: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'postingPeriod')).value,
            accountType: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'accountType')).value,
            accountNumber: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'accountNumber')).value,
            debitCredit: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'debitCredit')).value,
            reference: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'reference')).value,
            GLAccountNumber: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'GLAccountNumber')).value,
            contraAccountType: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountType')).value,
            contraAccountNumber: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountNumber')).value,
            contraAccountGLAccountNo: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountGLAccountNo')).value,
            contraAccountCreditorNo: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountCreditorNo')).value,
            contraAccountDebtorNo: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountDebtorNo')).value,
            dueDate: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'dueDate')).value,
            textHeader: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'textHeader')).value,
            accountName: sheet.getRow(i).getCell(this._getHeaderIndex(Standardtemplate, fileHeaders, 'accountName')).value,
        });
    }



    try {
        const result = await sequelize.transaction({
            isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE
        }, transaction => {
            for (let i = 2; i < actualRowCount; i++) {
                PostingModel
                    .getPosting()
                    .bulkCreate(rowsToInsert)
                    .then(() => {}).then(users => {})
            }

        });
        // transaction has been committed.
    } catch (err) {

    }



}