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
const parseDecimalNumber = require('parse-decimal-number');
const cldr = require('cldr');
const getHeaderIndex = require('./index.finder.helper.server').getHeaderIndex;

const chrono = require('chrono-node');

const env = require('../config/environment');

const logger = require('../config/logger.config').logger;

const sequelizer = sequelize.getSequelize();




module.exports.readHeader = async function (excelFilePath) {

    try {

        // const options = {
        //     worksheets: 'emit',
        // };

        // const workbookReader = new Excel.stream.xlsx.WorkbookReader(excelFilePath, options);
        // workbookReader.read();

        // workbookReader.on('worksheet', worksheet => {
        //     worksheet.on('row', row => {
        //         console.dir(row.model.cells);
        //     });
        // });
        let fileHeaders = [];
        const workbookReader = new Excel.stream.xlsx.WorkbookReader(excelFilePath);

        for await (const worksheetReader of workbookReader) {
            for await (const row of worksheetReader) {
                for (let i = 0; i < row.model.cells.length; i++) {
                    fileHeaders.push(row.model.cells[i].value);
                }
                break;
            }
        }
        return fileHeaders;
    } catch (e) {
        console.error(e);
        throw e;
    }
}



/**
 *  @depricated
 * no need for it
 *  
 *  */
_getColumnIndex = function (index) {
    // 'AA' = (26*(length-1-position) + A.Value) + (26*(length-1-position) + A.Value) + ...
};

/**
 * 
 * @param {string} excelFilePath path of the file on the server
 * @param {JSON} template  
 * @param {number} templateType 1 for SAP or 2 for Cinram, -1 for others
 * @param {string} local localization, not used for excel till now 
 */
module.exports.importStreamExcelFile = async function (excelFilePath, template = null, templateType = 1, local = 'de_DE') {
    const t = await sequelizer.transaction();
    let index = 1;
    let bulkCount = 0;

    let benchmark = process.hrtime();

    return new Promise(async (resolve, reject) => {

        try {

            if (templateType == templatesTypeEnum.SAP_WMOBEL) {
                Standardtemplate = SapWmobel;
            } else if (templateType == templatesTypeEnum.SAP_CINRAM) {
                Standardtemplate = SapCinram.posting;
            } else {
                Standardtemplate = template;
            }

            let rolledBack = false;


            let assignmentIndex = -1;
            let documentNumberIndex = -1;
            let documentTypeIndex = -1;
            let documentDateIndex = -1;
            let recordNumberIndex = -1;
            let creditAmountIndex = -1;
            let transactionCurrencyIndex = -1;
            let applicationDocumentIndex = -1;
            let textPostingIndex = -1;
            let applicationDateIndex = -1;
            let postingDateIndex = -1;
            let companyCodeIndex = -1;
            let fiscalYearIndex = -1;
            let postingPeriodIndex = -1;
            let accountTypeIndex = -1;
            let accountNumberIndex = -1;
            let debitCreditIndex = -1;
            let referenceIndex = -1;
            let GLAccountNumberIndex = -1;
            let contraAccountTypeIndex = -1;
            let contraAccountNumberIndex = -1;
            let contraAccountGLAccountNoIndex = -1;
            let contraAccountCreditorNoIndex = -1;
            let contraAccountDebtorNoIndex = -1;
            let dueDateIndex = -1;
            let textHeaderIndex = -1;
            let accountNameIndex = -1;
            let debtorNumberIndex = -1;
            let creditorNumberIndex = -1;

            let rowsToInsert = [];
            let fileHeaders = [];

            const workbookReader = new Excel.stream.xlsx.WorkbookReader(excelFilePath, {
                includeEmpty: true
            });

            for await (const worksheetReader of workbookReader) {
                for await (const row of worksheetReader) {

                    row.eachCell({
                        includeEmpty: true
                    }, (cell, colNo) => {
                        // console.dir(cell.model);
                    });

                    if (index === 1) {

                        for (let i = 0; i < row.model.cells.length; i++) {
                            fileHeaders.push(row.model.cells[i].value);
                        }
                        assignmentIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'assignment');
                        documentNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'documentNumber');
                        documentTypeIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'documentType');
                        documentDateIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'documentDate');
                        recordNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'recordNumber');
                        creditAmountIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'creditAmount');
                        transactionCurrencyIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'transactionCurrency');
                        applicationDocumentIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'applicationDocument');
                        textPostingIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'textPosting');
                        applicationDateIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'applicationDate');
                        postingDateIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'postingDate');
                        companyCodeIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'companyCode');
                        fiscalYearIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'fiscalYear');
                        postingPeriodIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'postingPeriod');
                        accountTypeIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'accountType');
                        accountNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'accountNumber');
                        debitCreditIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'debitCredit');
                        referenceIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'reference');
                        GLAccountNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'GLAccountNumber');
                        contraAccountTypeIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountType');
                        contraAccountNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountNumber');
                        contraAccountGLAccountNoIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountGLAccountNo');
                        contraAccountCreditorNoIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountCreditorNo');
                        contraAccountDebtorNoIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountDebtorNo');
                        dueDateIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'dueDate');
                        textHeaderIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'textHeader');
                        accountNameIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'accountName');
                        debtorNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'debtorNumber');
                        creditorNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'creditorNumber');
                    } else {

                        // push the row to the bulk insert array
                        // don't forget procedure id in accounts
                        // don't forget if procedure id not exist don't go to DB
                        // don't forget to get account type

                        const companyCode = companyCodeIndex >= 0 ? row.model.cells[companyCodeIndex].value : null;

                        // account
                        const accountType = accountTypeIndex >= 0 ? row.model.cells[accountTypeIndex].value : null;
                        const accountNumber = accountNumberIndex >= 0 ? row.model.cells[accountNumberIndex].value : null;
                        let accountName = accountNameIndex >= 0 ? row.model.cells[accountNameIndex].value : null;
                        if (accountNumber) {
                            let temp = await AccountModel.getAccounts().findAll({
                                where: {
                                    accountNumber: accountNumber,
                                    companyCode: companyCode,
                                    // procedureId: procedureId
                                    accountType: accountType
                                },
                                attributes: ['accountName'],
                                limit: 1
                            });
                            accountName = temp.length > 0 ? temp[0].accountName : null;
                        }


                        // GlaAccount
                        const GLAccountNumber = GLAccountNumberIndex >= 0 ? row.model.cells[GLAccountNumberIndex].value : null;
                        let GLAccountName = null;
                        if (GLAccountNumber) {
                            let temp = await AccountModel.getAccounts().findAll({
                                where: {
                                    accountNumber: GLAccountNumber,
                                    companyCode: companyCode,
                                    // procedureId: procedureId
                                    accountType: AccountTypeEnum[3]
                                },
                                attributes: ['accountName'],
                                limit: 1
                            });
                            GLAccountName = temp.length > 0 ? temp[0].accountName : null;
                        }

                        // contra gla account 
                        const contraAccountGLAccountNo = contraAccountGLAccountNoIndex >= 0 ? row.model.cells[contraAccountGLAccountNoIndex].value : null;
                        let contraAccountGLAccountName = null;
                        if (contraAccountGLAccountNo) {
                            let temp = await AccountModel.getAccounts().findAll({
                                where: {
                                    accountNumber: contraAccountGLAccountNo,
                                    companyCode: companyCode,
                                    // procedureId: procedureId
                                    accountType: AccountTypeEnum[3]
                                },
                                attributes: ['accountName'],
                                limit: 1
                            });
                            contraAccountGLAccountName = temp.length > 0 ? temp[0].accountName : null;
                        }


                        // Debitor Account
                        const debtorNumber = debtorNumberIndex >= 0 ? row.model.cells[debtorNumberIndex].value : null;
                        let debtorName = null;
                        if (debtorNumber) {
                            let temp = await AccountModel.getAccounts().findAll({
                                where: {
                                    accountNumber: debtorNumber,
                                    companyCode: companyCode,
                                    // procedureId: procedureId
                                    accountType: AccountTypeEnum[1]
                                },
                                attributes: ['accountName'],
                                limit: 1
                            });
                            debtorName = temp.length > 0 ? temp[0].accountName : null;
                        }

                        // contra Debitor Account
                        const contraAccountDebtorNo = contraAccountDebtorNoIndex >= 0 ? row.model.cells[contraAccountDebtorNoIndex].value : null;
                        let contraAccountDebtorName = null;
                        if (contraAccountDebtorNo) {
                            let temp = await AccountModel.getAccounts().findAll({
                                where: {
                                    accountNumber: contraAccountDebtorNo,
                                    companyCode: companyCode,
                                    // procedureId: procedureId
                                    accountType: AccountTypeEnum[1]
                                },
                                attributes: ['accountName'],
                                limit: 1
                            });
                            contraAccountDebtorName = temp.length > 0 ? temp[0].accountName : null;
                        }


                        // Credito Account
                        const creditorNumber = creditorNumberIndex >= 0 ? row.model.cells[creditorNumberIndex].value : null;
                        let creditorName = null;
                        if (creditorNumber) {
                            let temp = await AccountModel.getAccounts().findAll({
                                where: {
                                    accountNumber: creditorNumber,
                                    companyCode: companyCode,
                                    // procedureId: procedureId
                                    accountType: AccountTypeEnum[2]
                                },
                                attributes: ['accountName'],
                                limit: 1
                            });
                            creditorName = temp.length > 0 ? temp[0].accountName : null;
                        }

                        // contra creditor account
                        const contraAccountCreditorNo = contraAccountCreditorNoIndex >= 0 ? row.model.cells[contraAccountCreditorNoIndex].value : null;
                        let contraAccountCreditorName = null;
                        if (contraAccountCreditorNo) {
                            let temp = await AccountModel.getAccounts().findAll({
                                where: {
                                    accountNumber: contraAccountCreditorNo,
                                    companyCode: companyCode,
                                    // procedureId: procedureId
                                    accountType: AccountTypeEnum[2]
                                },
                                attributes: ['accountName'],
                                limit: 1
                            });
                            contraAccountCreditorName = temp.length > 0 ? temp[0].accountName : null;
                        }

                        const creditAmount = creditAmountIndex >= 0 ? row.model.cells[creditAmountIndex].value : null;
                        // creditAmount = creditAmount ? decimalParser(creditAmount) : null;
                        const debitCredit = debitCreditIndex >= 0 ? row.model.cells[debitCreditIndex].value : null;
                        // debitCredit = debitCredit ? decimalParser(debitCredit) : null;

                        rowsToInsert.push({
                            accountType: accountType,
                            accountNumber: accountNumber,
                            accountName: accountName,
                            GLAccountNumber: GLAccountNumber,
                            GLAccountName: GLAccountName,
                            contraAccountGLAccountNo: contraAccountGLAccountNo,
                            contraAccountGLAccountName: contraAccountGLAccountName,
                            debtorNumber: debtorNumber,
                            debtorName: debtorName,
                            contraAccountDebtorNo: contraAccountDebtorNo,
                            contraAccountDebtorName: contraAccountDebtorName,
                            creditorNumber: creditorNumber,
                            creditorName: creditorName,
                            contraAccountCreditorNo: contraAccountCreditorNo,
                            contraAccountCreditorName: contraAccountCreditorName,
                            assignment: assignmentIndex >= 0 ? row.model.cells[assignmentIndex].value : null,
                            documentNumber: documentNumberIndex >= 0 ? row.model.cells[documentNumberIndex].value : null,
                            documentType: documentTypeIndex >= 0 ? row.model.cells[documentTypeIndex].value : null,
                            documentDate: documentDateIndex >= 0 ? chrono.parseDate(row.model.cells[documentDateIndex].value) : null,
                            recordNumber: recordNumberIndex >= 0 ? row.model.cells[recordNumberIndex].value : null,
                            creditAmount: creditAmount,
                            transactionCurrency: transactionCurrencyIndex >= 0 ? row.model.cells[transactionCurrencyIndex].value : null,
                            applicationDocument: applicationDocumentIndex >= 0 ? row.model.cells[applicationDocumentIndex].value : null,
                            textPosting: textPostingIndex >= 0 ? row.model.cells[textPostingIndex].value : null,
                            applicationDate: applicationDateIndex >= 0 ? chrono.parseDate(row.model.cells[applicationDateIndex].value) : null,
                            postingDate: postingDateIndex >= 0 ? chrono.parseDate(row.model.cells[postingDateIndex].value) : null,
                            companyCode: companyCode,
                            fiscalYear: fiscalYearIndex >= 0 ? row.model.cells[fiscalYearIndex].value : null,
                            postingPeriod: postingPeriodIndex >= 0 ? row.model.cells[postingPeriodIndex].value : null,
                            debitCredit: debitCredit,
                            reference: referenceIndex >= 0 ? row.model.cells[referenceIndex].value : null,
                            contraAccountType: contraAccountTypeIndex >= 0 ? row.model.cells[contraAccountTypeIndex].value : null,
                            contraAccountNumber: contraAccountNumberIndex >= 0 ? row.model.cells[contraAccountNumberIndex].value : null,
                            dueDate: dueDateIndex >= 0 ? chrono.parseDate(row.model.cells[dueDateIndex].value) : null,
                            textHeader: textHeaderIndex >= 0 ? row.model.cells[textHeaderIndex].value : null,
                        });


                        // if array.length >= env.bulkSize
                        if (rowsToInsert.length >= env.bulkInsertSize) {
                            // then bulk insert and empty the array
                            await PostingModel
                                .getPosting()
                                .bulkCreate(rowsToInsert, {
                                    transaction: t
                                });
                            bulkCount++;
                            const used = process.memoryUsage().heapUsed / 1024 / 1024;
                            console.log(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                            logger.info(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                            rowsToInsert = [];
                        } // end of bulk insert batch

                    }
                    index++;
                }
                // if the array not empty: bulk insert it then empty it.
                if (rowsToInsert.length > 0) {
                    // try {
                    await PostingModel
                        .getPosting()
                        .bulkCreate(rowsToInsert, {
                            transaction: t
                        });
                    const used = process.memoryUsage().heapUsed / 1024 / 1024;
                    console.log(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                    logger.info(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                    rowsToInsert = [];
                }
                if (!rolledBack) {
                    await t.commit();

                    console.log("the transaction commited successfully :)");
                    logger.info(`${new Date()}:transaction commited successfully for file`);
                    benchmark = process.hrtime(benchmark);
                    console.log('benchmark took %d seconds and %d nanoseconds', benchmark[0], benchmark[1]);
                    logger.info(`${new Date()}:benchmark for import took: ${benchmark[0]} seconds and ${benchmark[1]} nanoseconds for ${index} records`);

                    resolve(true);
                }
            }

        } catch (err) {
            console.log("ERROR, the transaction will Rollback");
            console.log("ERROR on row number: " + index);
            logger.error(`${new Date()}: ${err.message} in bulk insert number: ${bulkCount}`);
            reject(err.message);
        }


    });



};



/**
 * 
 * @param {string} excelFilePath path of the file on the server
 * @param {AccountTypeEnum} accountType creditor, dibtor or gla
 */
module.exports.importStreamAccountsExcel = async function (excelFilePath, accountType = 1, template = null) {

    let benchmark = process.hrtime();
    let index = 1;
    let bulkCount = 0;

    return new Promise(async (resolve, reject) => {

        try {

            if (template == null) {
                template = {
                    accountNumber: 'KONTO',
                    companyCode: 'BUKR',
                    accountName: 'NAME'
                };
            }

            const t = await sequelizer.transaction();


            let accountNumberIndex = -1;
            let companyCodeIndex = -1;
            let accountNameIndex = -1;


            let rowsToInsert = [];
            let fileHeaders = [];

            const workbookReader = new Excel.stream.xlsx.WorkbookReader(excelFilePath, {
                includeEmpty: true
            });

            for await (const worksheetReader of workbookReader) {
                for await (const row of worksheetReader) {

                    row.eachCell({
                        includeEmpty: true
                    }, (cell, colNo) => {
                        // console.dir(cell.model);
                    });

                    if (index === 1) {

                        for (let i = 0; i < row.model.cells.length; i++) {
                            fileHeaders.push(row.model.cells[i].value);
                        }
                        accountNumberIndex = getHeaderIndex(template, fileHeaders, 'accountNumber');
                        companyCodeIndex = getHeaderIndex(template, fileHeaders, 'companyCode');
                        accountNameIndex = getHeaderIndex(template, fileHeaders, 'accountName');
                    } else {

                        rowsToInsert.push({
                            accountNumber: accountNumberIndex >= 0 ? row.model.cells[accountNumberIndex].value : null,
                            companyCode: companyCodeIndex >= 0 ? row.model.cells[companyCodeIndex].value : null,
                            accountName: accountNameIndex >= 0 ? row.model.cells[accountNameIndex].value : null,
                            accountType: AccountTypeEnum[accountType]
                        });


                        // if array.length >= env.bulkSize
                        if (rowsToInsert.length >= env.bulkInsertSize) {
                            // then bulk insert and empty the array
                            await AccountModel
                                .getAccounts()
                                .bulkCreate(rowsToInsert, {
                                    transaction: t
                                });
                            bulkCount++;
                            const used = process.memoryUsage().heapUsed / 1024 / 1024;
                            console.log(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                            logger.info(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);

                            rowsToInsert = [];
                        } // end of bulk insert batch

                    }
                    index++;


                } // end of for each row
                // if the array not empty: bulk insert it then empty it.
                if (rowsToInsert.length > 0) {
                    await AccountModel
                        .getAccounts()
                        .bulkCreate(rowsToInsert, {
                            transaction: t
                        });
                    const used = process.memoryUsage().heapUsed / 1024 / 1024;
                    console.log(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                    logger.info(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                    rowsToInsert = [];
                } /// end of rest data condition if (rowsToInsert.length > 0)

                await t.commit();
                console.log(`${new Date()}:transaction commited successfully for file`);
                logger.info(`${new Date()}:transaction commited successfully for file`);

                benchmark = process.hrtime(benchmark);
                console.log('benchmark took %d seconds and %d nanoseconds', benchmark[0], benchmark[1]);
                logger.info(`${new Date()}:benchmark for import took: ${benchmark[0]} seconds and ${benchmark[1]} nanoseconds for ${index} records`);

                resolve(true);
            } // end of main for each sheet

        } catch (err) {
            console.log("ERROR, the transaction will Rollback");
            console.log("ERROR on row number: " + index);
            logger.error(`${new Date()}: ${err.message} in bulk insert number: ${bulkCount}`);
            reject(err.message);
        }
    });


};



/**
 * @depricated please use importStreamExcelFile instead
 * @param {*} excelFilePath 
 * @param {*} template 
 * @param {*} templateType 
 * @param {*} local 
 */
module.exports.readExcelFile = async function (excelFilePath, template = null, templateType = 1, local = 'de_DE') {

    if (templateType == templatesTypeEnum.SAP_WMOBEL) {
        Standardtemplate = SapWmobel;
    } else if (templateType == templatesTypeEnum.SAP_CINRAM) {
        Standardtemplate = SapCinram.posting;
    } else {
        Standardtemplate = template;
    }

    // const options = cldr.extractNumberSymbols(local);
    // const decimalParser = parseDecimalNumber.withOptions(options);

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

    const assignmentIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'assignment');
    const documentNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'documentNumber');
    const documentTypeIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'documentType');
    const documentDateIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'documentDate');
    const recordNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'recordNumber');
    const creditAmountIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'creditAmount');
    const transactionCurrencyIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'transactionCurrency');
    const applicationDocumentIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'applicationDocument');
    const textPostingIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'textPosting');
    const applicationDateIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'applicationDate');
    const postingDateIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'postingDate');
    const companyCodeIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'companyCode');
    const fiscalYearIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'fiscalYear');
    const postingPeriodIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'postingPeriod');
    const accountTypeIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'accountType');
    const accountNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'accountNumber');
    const debitCreditIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'debitCredit');
    const referenceIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'reference');
    const GLAccountNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'GLAccountNumber');
    const contraAccountTypeIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountType');
    const contraAccountNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountNumber');
    const contraAccountGLAccountNoIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountGLAccountNo');
    const contraAccountCreditorNoIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountCreditorNo');
    const contraAccountDebtorNoIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'contraAccountDebtorNo');
    const dueDateIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'dueDate');
    const textHeaderIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'textHeader');
    const accountNameIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'accountName');
    const debtorNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'debtorNumber');
    const creditorNumberIndex = getHeaderIndex(Standardtemplate, fileHeaders, 'creditorNumber');

    const roundsNo = Math.floor(actualRowCount / env.bulkInsertSize);

    const roundsRest = actualRowCount % env.bulkInsertSize;

    const t = await sequelizer.transaction();


    for (let i = 2; i < roundsRest; i++) {

        // don't forget procedure id in accounts
        // don't forget if procedure id not exist don't go to DB
        // don't forget to get account type

        const companyCode = companyCodeIndex > 0 ? sheet.getRow(i).getCell(companyCodeIndex).value : null;

        // account
        const accountType = accountTypeIndex > 0 ? sheet.getRow(i).getCell(accountTypeIndex).value : null;
        const accountNumber = accountNumberIndex > 0 ? sheet.getRow(i).getCell(accountNumberIndex).value : null;
        let accountName = accountNameIndex > 0 ? sheet.getRow(i).getCell(accountNameIndex).value : null;
        if (accountNumber) {
            let temp = await AccountModel.getAccounts().findAll({
                where: {
                    accountNumber: accountNumber,
                    companyCode: companyCode,
                    // procedureId: procedureId
                    accountType: accountType
                },
                attributes: ['accountName'],
                limit: 1
            });
            accountName = temp.length > 0 ? temp[0].accountName : null;
        }


        // GlaAccount
        const GLAccountNumber = GLAccountNumberIndex > 0 ? sheet.getRow(i).getCell(GLAccountNumberIndex).value : null;
        let GLAccountName = null;
        if (GLAccountNumber) {
            let temp = await AccountModel.getAccounts().findAll({
                where: {
                    accountNumber: GLAccountNumber,
                    companyCode: companyCode,
                    // procedureId: procedureId
                    accountType: AccountTypeEnum[3]
                },
                attributes: ['accountName'],
                limit: 1
            });
            GLAccountName = temp.length > 0 ? temp[0].accountName : null;
        }

        // contra gla account 
        const contraAccountGLAccountNo = contraAccountGLAccountNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountGLAccountNoIndex).value : null;
        let contraAccountGLAccountName = null;
        if (contraAccountGLAccountNo) {
            let temp = await AccountModel.getAccounts().findAll({
                where: {
                    accountNumber: contraAccountGLAccountNo,
                    companyCode: companyCode,
                    // procedureId: procedureId
                    accountType: AccountTypeEnum[3]
                },
                attributes: ['accountName'],
                limit: 1
            });
            contraAccountGLAccountName = temp.length > 0 ? temp[0].accountName : null;
        }


        // Debitor Account
        const debtorNumber = debtorNumberIndex > 0 ? sheet.getRow(i).getCell(debtorNumberIndex).value : null;
        let debtorName = null;
        if (debtorNumber) {
            let temp = await AccountModel.getAccounts().findAll({
                where: {
                    accountNumber: debtorNumber,
                    companyCode: companyCode,
                    // procedureId: procedureId
                    accountType: AccountTypeEnum[1]
                },
                attributes: ['accountName'],
                limit: 1
            });
            debtorName = temp.length > 0 ? temp[0].accountName : null;
        }

        // contra Debitor Account
        const contraAccountDebtorNo = contraAccountDebtorNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountDebtorNoIndex).value : null;
        let contraAccountDebtorName = null;
        if (contraAccountDebtorNo) {
            let temp = await AccountModel.getAccounts().findAll({
                where: {
                    accountNumber: contraAccountDebtorNo,
                    companyCode: companyCode,
                    // procedureId: procedureId
                    accountType: AccountTypeEnum[1]
                },
                attributes: ['accountName'],
                limit: 1
            });
            contraAccountDebtorName = temp.length > 0 ? temp[0].accountName : null;
        }


        // Credito Account
        const creditorNumber = creditorNumberIndex > 0 ? sheet.getRow(i).getCell(creditorNumberIndex).value : null;
        let creditorName = null;
        if (creditorNumber) {
            let temp = await AccountModel.getAccounts().findAll({
                where: {
                    accountNumber: creditorNumber,
                    companyCode: companyCode,
                    // procedureId: procedureId
                    accountType: AccountTypeEnum[2]
                },
                attributes: ['accountName'],
                limit: 1
            });
            creditorName = temp.length > 0 ? temp[0].accountName : null;
        }

        // contra creditor account
        const contraAccountCreditorNo = contraAccountCreditorNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountCreditorNoIndex).value : null;
        let contraAccountCreditorName = null;
        if (contraAccountCreditorNo) {
            let temp = await AccountModel.getAccounts().findAll({
                where: {
                    accountNumber: contraAccountCreditorNo,
                    companyCode: companyCode,
                    // procedureId: procedureId
                    accountType: AccountTypeEnum[2]
                },
                attributes: ['accountName'],
                limit: 1
            });
            contraAccountCreditorName = temp.length > 0 ? temp[0].accountName : null;
        }

        const creditAmount = creditAmountIndex > 0 ? sheet.getRow(i).getCell(creditAmountIndex).value : null;
        // creditAmount = creditAmount ? decimalParser(creditAmount) : null;
        const debitCredit = debitCreditIndex > 0 ? sheet.getRow(i).getCell(debitCreditIndex).value : null;
        // debitCredit = debitCredit ? decimalParser(debitCredit) : null;

        rowsToInsert.push({
            accountType: accountType,
            accountNumber: accountNumber,
            accountName: accountName,
            GLAccountNumber: GLAccountNumber,
            GLAccountName: GLAccountName,
            contraAccountGLAccountNo: contraAccountGLAccountNo,
            contraAccountGLAccountName: contraAccountGLAccountName,
            debtorNumber: debtorNumber,
            debtorName: debtorName,
            contraAccountDebtorNo: contraAccountDebtorNo,
            contraAccountDebtorName: contraAccountDebtorName,
            creditorNumber: creditorNumber,
            creditorName: creditorName,
            contraAccountCreditorNo: contraAccountCreditorNo,
            contraAccountCreditorName: contraAccountCreditorName,
            assignment: assignmentIndex > 0 ? sheet.getRow(i).getCell(assignmentIndex).value : null,
            documentNumber: documentNumberIndex > 0 ? sheet.getRow(i).getCell(documentNumberIndex).value : null,
            documentType: documentTypeIndex > 0 ? sheet.getRow(i).getCell(documentTypeIndex).value : null,
            documentDate: documentDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(documentDateIndex).value) : null,
            recordNumber: recordNumberIndex > 0 ? sheet.getRow(i).getCell(recordNumberIndex).value : null,
            creditAmount: creditAmount,
            transactionCurrency: transactionCurrencyIndex > 0 ? sheet.getRow(i).getCell(transactionCurrencyIndex).value : null,
            applicationDocument: applicationDocumentIndex > 0 ? sheet.getRow(i).getCell(applicationDocumentIndex).value : null,
            textPosting: textPostingIndex > 0 ? sheet.getRow(i).getCell(textPostingIndex).value : null,
            applicationDate: applicationDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(applicationDateIndex).value) : null,
            postingDate: postingDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(postingDateIndex).value) : null,
            companyCode: companyCode,
            fiscalYear: fiscalYearIndex > 0 ? sheet.getRow(i).getCell(fiscalYearIndex).value : null,
            postingPeriod: postingPeriodIndex > 0 ? sheet.getRow(i).getCell(postingPeriodIndex).value : null,
            debitCredit: debitCredit,
            reference: referenceIndex > 0 ? sheet.getRow(i).getCell(referenceIndex).value : null,
            contraAccountType: contraAccountTypeIndex > 0 ? sheet.getRow(i).getCell(contraAccountTypeIndex).value : null,
            contraAccountNumber: contraAccountNumberIndex > 0 ? sheet.getRow(i).getCell(contraAccountNumberIndex).value : null,
            dueDate: dueDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(dueDateIndex).value) : null,
            textHeader: textHeaderIndex > 0 ? sheet.getRow(i).getCell(textHeaderIndex).value : null,
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

                const companyCode = companyCodeIndex > 0 ? sheet.getRow(i).getCell(companyCodeIndex).value : null;

                // account
                const accountType = accountTypeIndex > 0 ? sheet.getRow(i).getCell(accountTypeIndex).value : null;
                const accountNumber = accountNumberIndex > 0 ? sheet.getRow(i).getCell(accountNumberIndex).value : null;
                let accountName = accountNameIndex > 0 ? sheet.getRow(i).getCell(accountNameIndex).value : null;
                if (accountNumber) {
                    let temp = await AccountModel.getAccounts().findAll({
                        where: {
                            accountNumber: accountNumber,
                            companyCode: companyCode,
                            // procedureId: procedureId
                            accountType: accountType
                        },
                        attributes: ['accountName'],
                        limit: 1
                    });
                    accountName = temp.length > 0 ? temp[0].accountName : null;
                }


                // GlaAccount
                const GLAccountNumber = GLAccountNumberIndex > 0 ? sheet.getRow(i).getCell(GLAccountNumberIndex).value : null;
                let GLAccountName = null;
                if (GLAccountNumber) {
                    let temp = await AccountModel.getAccounts().findAll({
                        where: {
                            accountNumber: GLAccountNumber,
                            companyCode: companyCode,
                            // procedureId: procedureId
                            accountType: AccountTypeEnum[3]
                        },
                        attributes: ['accountName'],
                        limit: 1
                    });
                    GLAccountName = temp.length > 0 ? temp[0].accountName : null;
                }

                // contra gla account 
                const contraAccountGLAccountNo = contraAccountGLAccountNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountGLAccountNoIndex).value : null;
                let contraAccountGLAccountName = null;
                if (contraAccountGLAccountNo) {
                    let temp = await AccountModel.getAccounts().findAll({
                        where: {
                            accountNumber: contraAccountGLAccountNo,
                            companyCode: companyCode,
                            // procedureId: procedureId
                            accountType: AccountTypeEnum[3]
                        },
                        attributes: ['accountName'],
                        limit: 1
                    });
                    contraAccountGLAccountName = temp.length > 0 ? temp[0].accountName : null;
                }


                // Debitor Account
                const debtorNumber = debtorNumberIndex > 0 ? sheet.getRow(i).getCell(debtorNumberIndex).value : null;
                let debtorName = null;
                if (debtorNumber) {
                    let temp = await AccountModel.getAccounts().findAll({
                        where: {
                            accountNumber: debtorNumber,
                            companyCode: companyCode,
                            // procedureId: procedureId
                            accountType: AccountTypeEnum[1]
                        },
                        attributes: ['accountName'],
                        limit: 1
                    });
                    debtorName = temp.length > 0 ? temp[0].accountName : null;
                }

                // contra Debitor Account
                const contraAccountDebtorNo = contraAccountDebtorNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountDebtorNoIndex).value : null;
                let contraAccountDebtorName = null;
                if (contraAccountDebtorNo) {
                    let temp = await AccountModel.getAccounts().findAll({
                        where: {
                            accountNumber: contraAccountDebtorNo,
                            companyCode: companyCode,
                            // procedureId: procedureId
                            accountType: AccountTypeEnum[1]
                        },
                        attributes: ['accountName'],
                        limit: 1
                    });
                    contraAccountDebtorName = temp.length > 0 ? temp[0].accountName : null;
                }


                // Credito Account
                const creditorNumber = creditorNumberIndex > 0 ? sheet.getRow(i).getCell(creditorNumberIndex).value : null;
                let creditorName = null;
                if (creditorNumber) {
                    let temp = await AccountModel.getAccounts().findAll({
                        where: {
                            accountNumber: creditorNumber,
                            companyCode: companyCode,
                            // procedureId: procedureId
                            accountType: AccountTypeEnum[2]
                        },
                        attributes: ['accountName'],
                        limit: 1
                    });
                    creditorName = temp.length > 0 ? temp[0].accountName : null;
                }

                // contra creditor account
                const contraAccountCreditorNo = contraAccountCreditorNoIndex > 0 ? sheet.getRow(i).getCell(contraAccountCreditorNoIndex).value : null;
                let contraAccountCreditorName = null;
                if (contraAccountCreditorNo) {
                    let temp = await AccountModel.getAccounts().findAll({
                        where: {
                            accountNumber: contraAccountCreditorNo,
                            companyCode: companyCode,
                            // procedureId: procedureId
                            accountType: AccountTypeEnum[2]
                        },
                        attributes: ['accountName'],
                        limit: 1
                    });
                    contraAccountCreditorName = temp.length > 0 ? temp[0].accountName : null;
                }
                const creditAmount = creditAmountIndex > 0 ? sheet.getRow(i).getCell(creditAmountIndex).value : null;
                // creditAmount = creditAmount ? decimalParser(creditAmount) : null;
                const debitCredit = debitCreditIndex > 0 ? sheet.getRow(i).getCell(debitCreditIndex).value : null;
                // debitCredit = debitCredit ? decimalParser(debitCredit) : null;


                rowsToInsert2.push({
                    accountType: accountType,
                    accountNumber: accountNumber,
                    accountName: accountName,
                    GLAccountNumber: GLAccountNumber,
                    GLAccountName: GLAccountName,
                    contraAccountGLAccountNo: contraAccountGLAccountNo,
                    contraAccountGLAccountName: contraAccountGLAccountName,
                    debtorNumber: debtorNumber,
                    debtorName: debtorName,
                    contraAccountDebtorNo: contraAccountDebtorNo,
                    contraAccountDebtorName: contraAccountDebtorName,
                    creditorNumber: creditorNumber,
                    creditorName: creditorName,
                    contraAccountCreditorNo: contraAccountCreditorNo,
                    contraAccountCreditorName: contraAccountCreditorName,
                    assignment: assignmentIndex > 0 ? sheet.getRow(i).getCell(assignmentIndex).value : null,
                    documentNumber: documentNumberIndex > 0 ? sheet.getRow(i).getCell(documentNumberIndex).value : null,
                    documentType: documentTypeIndex > 0 ? sheet.getRow(i).getCell(documentTypeIndex).value : null,
                    documentDate: documentDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(documentDateIndex).value) : null,
                    recordNumber: recordNumberIndex > 0 ? sheet.getRow(i).getCell(recordNumberIndex).value : null,
                    creditAmount: creditAmount,
                    transactionCurrency: transactionCurrencyIndex > 0 ? sheet.getRow(i).getCell(transactionCurrencyIndex).value : null,
                    applicationDocument: applicationDocumentIndex > 0 ? sheet.getRow(i).getCell(applicationDocumentIndex).value : null,
                    textPosting: textPostingIndex > 0 ? sheet.getRow(i).getCell(textPostingIndex).value : null,
                    applicationDate: applicationDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(applicationDateIndex).value) : null,
                    postingDate: postingDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(postingDateIndex).value) : null,
                    companyCode: companyCode,
                    fiscalYear: fiscalYearIndex > 0 ? sheet.getRow(i).getCell(fiscalYearIndex).value : null,
                    postingPeriod: postingPeriodIndex > 0 ? sheet.getRow(i).getCell(postingPeriodIndex).value : null,
                    debitCredit: debitCredit,
                    reference: referenceIndex > 0 ? sheet.getRow(i).getCell(referenceIndex).value : null,
                    contraAccountType: contraAccountTypeIndex > 0 ? sheet.getRow(i).getCell(contraAccountTypeIndex).value : null,
                    contraAccountNumber: contraAccountNumberIndex > 0 ? sheet.getRow(i).getCell(contraAccountNumberIndex).value : null,
                    dueDate: dueDateIndex > 0 ? chrono.parseDate(sheet.getRow(i).getCell(dueDateIndex).value) : null,
                    textHeader: textHeaderIndex > 0 ? sheet.getRow(i).getCell(textHeaderIndex).value : null,
                });
            }




            await PostingModel
                .getPosting()
                .bulkCreate(rowsToInsert2, {
                    transaction: t
                })

        }

        await t.commit();
        return true;
    } catch (err) {
        console.log(err);
        await t.rollback();
        return {
            error: err
        };
    }


} // end of reading posting file function


// to-do: procedureId as parameter
/**
 * @deprecated please use importStreamAccountsExcel instead
 * @param {*} excelFilePath 
 * @param {*} accountType 
 */
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