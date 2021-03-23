const fs = require("fs");
const csv = require('csv-parser');
const stripBom = require('strip-bom-stream');
const templatesTypeEnum = require('../models/enums/template.type');
const AccountTypeEnum = require('../models/enums/account.type');
const SapWmobel = require('../models/templates/sap.wmobel.template');
const SapCinram = require('../models/templates/sap.cinram.template');
const PostingModel = require('../models/posting.model.server');
const AccountModel = require('../models/accounts.model.server');
const sequelize = require('../config/sequelize.config');

const parseDecimalNumber = require('parse-decimal-number');
const cldr = require('cldr');
const getHeaderIndex = require('./index.finder.helper.server').getHeaderIndex;

const chrono = require('chrono-node');
const env = require('../config/environment');
const logger = require('../config/logger.config').logger;

const sequelizer = sequelize.getSequelize();

module.exports.readHeader = async function (filePath) {

    try {
        return new Promise((resolve, reject) => {
            let fileHeaders = [];
            const readable = fs.createReadStream(filePath, {
                encoding: 'utf8'
            });
            // readable.setEncoding('ucs2');

            readable
                .pipe(csv({
                    separator: ';',
                    encoding: "utf8",
                    // encoding: null
                    bom: true
                }))
                .on('headers', (headers) => {
                    // console.log(`First header: ${headers[0]}`);
                    fileHeaders = headers;
                    resolve(fileHeaders);
                });

        });

        // parser.on('headers', (headers) => {
        //     console.log(`First header: ${headers[0]}`);
        //     fileHeaders = headers;
        //     resolve();
        // });

        // for await (const record of parser) {
        //     records.push(record);
        // }

        // resolve(fileHeaders);
    } catch (e) {
        console.error(e);
        reject(e);
    }
}


module.exports.importAccountCsvFile = async function (filePath, accountType = 1, template = null) {
    return new Promise(async (resolve, reject) => {
        let benchmark = process.hrtime();

        let index = 1;
        let bulkCount = 0;

        try {

            const options = cldr.extractNumberSymbols('de_DE');
            const decimalParser = parseDecimalNumber.withOptions(options);

            if (template == null) {
                template = {
                    accountNumber: 'KONTO',
                    companyCode: 'BUKR',
                    accountName: 'NAME'
                };
            }

            const t = await sequelizer.transaction();

            let rowsToInsert = [];

            const parser = fs.createReadStream(filePath, {
                    encoding: 'utf8'
                })
                .pipe(csv({
                    separator: ';',
                    encoding: "utf8"
                }));

            for await (const row of parser) {

                // const accountNumber = decimalParser(row[template.accountNumber]);
                // if (isNaN(accountNumber)) {
                //     console.log(`${new Date()}: There is an ERROR on row ${index+1}, accountNumber/${template.accountNumber} should be number!`);
                //     logger.error(`${new Date()}: There is an ERROR on row ${index+1}, accountNumber/${template.accountNumber} should be number!`);
                    
                //     reject(`There is an ERROR on row ${index+1}, accountNumber/${template.accountNumber} should be number!`);
                //     return;
                // }
                

                rowsToInsert.push({
                    accountNumber: row[template.accountNumber],
                    companyCode: row[template.companyCode],
                    accountName: row[template.accountName],
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

        } catch (err) {
            console.log("ERROR, the transaction will Rollback");

            // const rgx = / at row (.*)/g;
            // const arr = rgx.exec(err.message);
            const splitedMsg = err.message.split(" at row ");
            if (splitedMsg.length > 1) {
                const rowNum = splitedMsg[1];
                const theRealRowNum = rowNum > 0 ? parseInt(rowNum) + 1 + (bulkCount * env.bulkInsertSize) : index;
                const errorMsg = splitedMsg[0] + ' at row ' + theRealRowNum;
                logger.error(`${new Date()}: ${splitedMsg[0]} at row ${theRealRowNum}`);
                console.log("ERROR on row number: " + theRealRowNum);
                reject(errorMsg);
            } else {
                console.log("ERROR on row number: " + index);
                reject(err.message);
            }

        }
    });
};


module.exports.readCsvStream = async function (filePath, template = null, templateType = 1, local = 'de_DE') {
    return new Promise(async (resolve, reject) => {

        let index = 1;
        let bulkCount = 0;

        try {
            // console.time("import");
            let benchmark = process.hrtime();

            const options = cldr.extractNumberSymbols(local);
            const decimalParser = parseDecimalNumber.withOptions(options);

            if (templateType == templatesTypeEnum.SAP_WMOBEL) {
                Standardtemplate = SapWmobel;
            } else if (templateType == templatesTypeEnum.SAP_CINRAM) {
                Standardtemplate = SapCinram.posting;
            } else {
                Standardtemplate = template;
            }

            const t = await sequelizer.transaction();

            let rowsToInsert = [];

            const parser = fs.createReadStream(filePath, {
                    encoding: 'utf8'
                })
                .pipe(csv({
                    separator: ';',
                    encoding: "utf8"
                }));

            for await (const row of parser) {

                const companyCode = row[Standardtemplate.companyCode]? row[Standardtemplate.companyCode] : null;
                const accountType = row[Standardtemplate.accountType]? row[Standardtemplate.accountType] : null;
                let accountNumber = null;
                let accountName = row[Standardtemplate.accountName]? row[Standardtemplate.accountName] : null;
                if (Standardtemplate.accountNumber && row[Standardtemplate.accountNumber]) {
                    accountNumber = decimalParser(row[Standardtemplate.accountNumber]);
                    if (isNaN(accountNumber)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index+1}, accountNumber/${Standardtemplate.accountNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index+1}, accountNumber/${Standardtemplate.accountNumber} should be number!`);
                        
                        reject(`There is an ERROR on row ${index+1}, accountNumber/${Standardtemplate.accountNumber} should be number!`);
                        return;
                    }
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
                }

                // GlaAccount
                let GLAccountNumber = null;
                let GLAccountName = null;
                if (Standardtemplate.GLAccountNumber && row[Standardtemplate.GLAccountNumber]) {
                    GLAccountNumber = decimalParser(row[Standardtemplate.GLAccountNumber]);
                    if (isNaN(GLAccountNumber)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index+1}, GLAccountNumber/${Standardtemplate.GLAccountNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index+1}, GLAccountNumber/${Standardtemplate.GLAccountNumber} should be number!`);
                        reject(`There is an ERROR on row ${index+1}, GLAccountNumber/${Standardtemplate.GLAccountNumber} should be number!`);
                        return;
                    }
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
                }

                // contra gla account 
                let contraAccountGLAccountNo = null;
                let contraAccountGLAccountName = null;
                if (Standardtemplate.contraAccountGLAccountNo && row[Standardtemplate.contraAccountGLAccountNo]) {
                    contraAccountGLAccountNo = decimalParser(row[Standardtemplate.contraAccountGLAccountNo]);
                    if (isNaN(contraAccountGLAccountNo)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index+1}, contraAccountGLAccountNo/${Standardtemplate.contraAccountGLAccountNo} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index+1}, contraAccountGLAccountNo/${Standardtemplate.contraAccountGLAccountNo} should be number!`);
                        reject(`There is an ERROR on row ${index+1}, contraAccountGLAccountNo/${Standardtemplate.contraAccountGLAccountNo} should be number!`);
                        return;
                    }
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
                }


                // Debitor Account
                let debtorNumber = null;
                let debtorName = null;
                if (Standardtemplate.debtorNumber && row[Standardtemplate.debtorNumber]) {
                    debtorNumber = decimalParser(row[Standardtemplate.debtorNumber]);
                    if (isNaN(debtorNumber)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index+1}, debtorNumber/${Standardtemplate.debtorNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index+1}, debtorNumber/${Standardtemplate.debtorNumber} should be number!`);
                        reject(`There is an ERROR on row ${index+1}, debtorNumber/${Standardtemplate.debtorNumber} should be number!`);
                        return;
                    }
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
                }

                // contra Debitor Account
                let contraAccountDebtorNo = null;
                let contraAccountDebtorName = null;
                if (Standardtemplate.contraAccountDebtorNo && row[Standardtemplate.contraAccountDebtorNo]) {
                    contraAccountDebtorNo = decimalParser(row[Standardtemplate.contraAccountDebtorNo]);
                    if (isNaN(contraAccountDebtorNo)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index+1}, contraAccountDebtorNo/${Standardtemplate.contraAccountDebtorNo} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index+1}, contraAccountDebtorNo/${Standardtemplate.contraAccountDebtorNo} should be number!`);
                        reject(`There is an ERROR on row ${index+1}, contraAccountDebtorNo/${Standardtemplate.contraAccountDebtorNo} should be number!`);
                        return;
                    }
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
                }


                // Credito Account
                let creditorNumber = null;
                let creditorName = null;
                if (Standardtemplate.creditorNumber && row[Standardtemplate.creditorNumber]) {
                    creditorNumber = decimalParser(row[Standardtemplate.creditorNumber]);
                    if (isNaN(creditorNumber)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index+1}, creditorNumber/${Standardtemplate.creditorNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index+1}, creditorNumber/${Standardtemplate.creditorNumber} should be number!`);
                        reject(`There is an ERROR on row ${index+1}, creditorNumber/${Standardtemplate.creditorNumber} should be number!`);
                        return;
                    }
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
                }



                // contra creditor account
                let contraAccountCreditorNo = null;
                let contraAccountCreditorName = null;
                if (Standardtemplate.contraAccountCreditorNo && row[Standardtemplate.contraAccountCreditorNo]) {
                    contraAccountCreditorNo = decimalParser(row[Standardtemplate.contraAccountCreditorNo]);
                    if (isNaN(contraAccountCreditorNo)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index+1}, contraAccountCreditorNo/${Standardtemplate.contraAccountCreditorNo} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index+1}, contraAccountCreditorNo/${Standardtemplate.contraAccountCreditorNo} should be number!`);
                        reject(`There is an ERROR on row ${index+1}, contraAccountCreditorNo/${Standardtemplate.contraAccountCreditorNo} should be number!`);
                        return;
                    }
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
                }


                const recordNumber = decimalParser(row[Standardtemplate.recordNumber]);
                if (isNaN(recordNumber)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index+1}, recordNumber/${Standardtemplate.recordNumber} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index+1}, recordNumber/${Standardtemplate.recordNumber} should be number!`);
                    reject(`There is an ERROR on row ${index+1}, recordNumber/${Standardtemplate.recordNumber} should be number!`);
                    return;
                }
                const creditAmount = decimalParser(row[Standardtemplate.creditAmount]);
                if (isNaN(creditAmount)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index+1}, creditAmount/${Standardtemplate.creditAmount} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index+1}, creditAmount/${Standardtemplate.creditAmount} should be number!`);
                    reject(`There is an ERROR on row ${index+1}, creditAmount/${Standardtemplate.creditAmount} should be number!`);
                    return;
                }
                const postingPeriod = decimalParser(row[Standardtemplate.postingPeriod]);
                if (isNaN(postingPeriod)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index+1}, postingPeriod/${Standardtemplate.postingPeriod} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index+1}, postingPeriod/${Standardtemplate.postingPeriod} should be number!`);
                    reject(`There is an ERROR on row ${index+1}, postingPeriod/${Standardtemplate.postingPeriod} should be number!`);

                    return;
                }

                rowsToInsert.push({
                    assignment: row[Standardtemplate.assignment],
                    documentNumber: row[Standardtemplate.documentNumber],
                    documentType: row[Standardtemplate.documentType],
                    documentDate: chrono.parseDate(row[Standardtemplate.documentDate]),
                    recordNumber: recordNumber,
                    creditAmount: creditAmount,
                    transactionCurrency: row[Standardtemplate.transactionCurrency],
                    applicationDocument: row[Standardtemplate.applicationDocument],
                    textPosting: row[Standardtemplate.textPosting],
                    applicationDate: chrono.parseDate(row[Standardtemplate.applicationDate]),
                    postingDate: chrono.parseDate(row[Standardtemplate.postingDate]),
                    companyCode: companyCode,
                    fiscalYear: row[Standardtemplate.fiscalYear],
                    postingPeriod: postingPeriod,
                    accountType: accountType,
                    accountNumber: accountNumber,
                    debitCredit: row[Standardtemplate.debitCredit],
                    reference: row[Standardtemplate.reference],
                    GLAccountNumber: GLAccountNumber,
                    GLAccountName: GLAccountName,
                    debtorNumber: debtorNumber,
                    debtorName: debtorName,
                    creditorNumber: creditorNumber,
                    creditorName: creditorName,
                    contraAccountType: row[Standardtemplate.contraAccountType],
                    contraAccountNumber: row[Standardtemplate.contraAccountNumber],
                    contraAccountGLAccountNo: contraAccountGLAccountNo,
                    contraAccountGLAccountName: contraAccountGLAccountName,
                    contraAccountCreditorNo: contraAccountCreditorNo,
                    contraAccountCreditorName: contraAccountCreditorName,
                    contraAccountDebtorNo: contraAccountDebtorNo,
                    contraAccountDebtorName: contraAccountDebtorName,
                    dueDate: chrono.parseDate(row[Standardtemplate.dueDate]),
                    textHeader: row[Standardtemplate.textHeader],
                    accountName: accountName,
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
                index++;

            } // end of for each row
            // if the array not empty: bulk insert it then empty it.
            if (rowsToInsert.length > 0) {
                await PostingModel
                    .getPosting()
                    .bulkCreate(rowsToInsert, {
                        transaction: t
                    });
                const used = process.memoryUsage().heapUsed / 1024 / 1024;
                console.log(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                logger.info(`${new Date()}:The script uses approximately: ${Math.round(used * 100) / 100} MB`);
                rowsToInsert = [];
            } /// end of rest data condition if (rowsToInsert.length > 0)

            await t.commit();
            console.log("the transaction commited successfully :)");
            logger.info(`${new Date()}:transaction commited successfully for file`);
            // console.timeEnd("import");
            benchmark = process.hrtime(benchmark);
            console.log('benchmark took %d seconds and %d nanoseconds', benchmark[0], benchmark[1]);
            logger.info(`${new Date()}:benchmark for import took: ${benchmark[0]} seconds and ${benchmark[1]} nanoseconds for ${index} records`);
            resolve(true);
        } catch (err) {
            console.log("ERROR, the transaction will Rollback");

            const splitedMsg = err.message.split(" at row ");
            if (splitedMsg.length > 1) {
                const rowNum = splitedMsg[1];
                const theRealRowNum = rowNum > 0 ? parseInt(rowNum) + 1 + (bulkCount * env.bulkInsertSize) : index;
                const errorMsg = splitedMsg[0] + ' at row ' + theRealRowNum;
                logger.error(`${new Date()}: ${splitedMsg[0]} at row ${theRealRowNum}`);
                console.log("ERROR on row number: " + theRealRowNum);
                reject(errorMsg);
            } else {
                console.log("ERROR on row number: " + index+1);
                reject(err.message);
            }
        }

    });

};