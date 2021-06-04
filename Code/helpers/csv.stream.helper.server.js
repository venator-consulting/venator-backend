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


module.exports.importAccountCsvFile = async function (filePath, managerId, procedureId, accountType = 1, template = null) {
    return new Promise(async (resolve, reject) => {
        let benchmark = process.hrtime();

        let index = 1;
        let bulkCount = 0;

        try {

            // const options = cldr.extractNumberSymbols('de_DE');
            // const decimalParser = parseDecimalNumber.withOptions(options);

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

                /*                 const accountTypeId = decimalParser(row[template.accountTypeId]);
                                if (isNaN(accountTypeId)) {
                                    console.log(`${new Date()}: There is an ERROR on row ${index+1}, accountTypeId/${template.accountTypeId} should be number!`);
                                    logger.error(`${new Date()}: There is an ERROR on row ${index+1}, accountTypeId/${template.accountTypeId} should be number!`);
                                    reject(`There is an ERROR on row ${index+1}, accountTypeId/${template.accountTypeId} should be number!`);
                                    return;
                                } */


                rowsToInsert.push({
                    accountNumber: row[template.accountNumber],
                    companyCode: row[template.companyCode],
                    accountName: row[template.accountName],
                    accountType: AccountTypeEnum[accountType],
                    procedureId: procedureId,
                    //  accountTypeId: accountTypeId,
                    accountTypeIdInternal: row[template.accountTypeIdInternal],
                    nameAffix1: row[template.nameAffix1],
                    nameAffix2: row[template.nameAffix2],
                    VATId: row[template.VATId],
                    taxNumber: row[template.taxNumber],
                    street: row[template.street],
                    postCode: row[template.postCode],
                    city: row[template.city],
                    country: row[template.country],
                    contactPerson: row[template.contactPerson],
                    phone: row[template.phone],
                    email: row[template.email],
                    bankName1: row[template.bankName1],
                    accountNumber: row[template.accountNumber],
                    bankSortCode1: row[template.bankSortCode1],
                    bankAccountNo1: row[template.bankAccountNo1],
                    countryCode1: row[template.countryCode1],
                    iBAN_No1: row[template.iBAN_No1],
                    swift_code1: row[template.swift_code1],
                    differentAccountHolder1: row[template.differentAccountHolder1],
                    bankSortCode2: row[template.bankSortCode2],
                    bankName2: row[template.bankName2],
                    bankAccountNo2: row[template.bankAccountNo2],
                    countryCode2: row[template.countryCode2],
                    iBAN_No2: row[template.iBAN_No2],
                    swift_code2: row[template.swift_code2],
                    differentAccountHolder2: row[template.differentAccountHolder2],
                    bankName3: row[template.bankName3],
                    bankAccountNo3: row[template.bankAccountNo3],
                    countryCode3: row[template.countryCode3],
                    iBAN_No3: row[template.iBAN_No3],
                    swift_code3: row[template.swift_code3],
                    differentAccountHolder3: row[template.differentAccountHolder3],
                });


                // if array.length >= env.bulkSize
                if (rowsToInsert.length >= env.bulkInsertSize) {
                    // then bulk insert and empty the array
                    await AccountModel
                        .getAccounts('accounts_' + managerId)
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
                    .getAccounts('accounts_' + managerId)
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

detectDelemeter = async (filePath) => {
    return new Promise((resolve, reject) => {
        const rs = fs.createReadStream(filePath, {
            encoding: 'utf8'
        });
        let acc = '';
        let pos = 0;
        let index;
        rs
            .on('data', function (chunk) {
                index = chunk.indexOf('\n');
                acc += chunk;
                index !== -1 ? rs.close() : pos += chunk.length;
            })
            .on('close', function () {
                let line = acc.slice(0, pos + index);
                const delimiter = require('csv-string').detect(line);
                console.log(delimiter);
                resolve(delimiter);
            })
            .on('error', function (err) {
                reject(err);
            });
    });

};

detectQuote = async (filePath, delimiter) => {
    return new Promise((resolve, reject) => {
        const rs = fs.createReadStream(filePath, {
            encoding: 'utf8'
        });
        let acc = '';
        let pos = 0;
        let index;
        let conformSingle = false;
        let conformDouble = false;
        rs
            .on('data', function (chunk) {
                index = chunk.indexOf('\n');
                acc += chunk;
                index !== -1 ? rs.close() : pos += chunk.length;
            })
            .on('close', function () {
                let line = acc.slice(0, pos + index);
                let cells = line.split(delimiter);
                if (cells.length < 2) reject({ message: "Can not detect delimiter correctly! please use ; or , or tab." });
                for (let i = 0; i < cells.length; i++) {
                    let val = cells[i];
                    if (val && val.trim()) {
                        // val = val.substring(1, cells[i].length-1);
                        conformSingle = val.startsWith('\'') && val.endsWith('\'');
                        if (!conformSingle) break;
                    }
                }
                for (let i = 0; i < cells.length; i++) {
                    let val = cells[i];
                    if (val && val.trim()) {
                        // val = val.substring(1, cells[i].length-1);
                        conformDouble = val.startsWith('"') && val.endsWith('"');
                        if (!conformDouble) break;
                    }
                }
                if (conformDouble && !conformSingle) resolve('"');
                if (!conformDouble && conformSingle) resolve('\'');
                if (conformSingle && conformDouble) reject({
                    message: "the function detect quote dosen't work correctly, please contact the developer!"
                });
                if (!conformSingle && !conformDouble) reject({
                    message: "the parsed file must be quoted!!"
                });
            })
            .on('error', function (err) {
                reject(err);
            });
    });
};


module.exports.readCsvStream = async function (filePath, managerId, procedureId, template = null, templateType = 1, local = 'de_DE') {
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
            const delimiter = await detectDelemeter(filePath);
            const quote = await detectQuote(filePath, delimiter);
            console.log(quote);
            const parser = fs.createReadStream(filePath, {
                encoding: 'utf8'
            })
                .pipe(csv({
                    separator: delimiter,
                    quote: quote,
                    encoding: "utf8"
                }));

            for await (const row of parser) {

                const companyCode = row[Standardtemplate.companyCode] ? row[Standardtemplate.companyCode] : null;
                const accountType = row[Standardtemplate.accountType] ? row[Standardtemplate.accountType] : null;
                const contraAccountType = row[Standardtemplate.contraAccountType] ? row[Standardtemplate.contraAccountType] : null;
                let accountNumber = null;
                let accountName = row[Standardtemplate.accountName] ? row[Standardtemplate.accountName] : null;
                if (Standardtemplate.accountNumber && row[Standardtemplate.accountNumber]) {
                    accountNumber = decimalParser(row[Standardtemplate.accountNumber]);
                    if (isNaN(accountNumber)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, accountNumber/${Standardtemplate.accountNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, accountNumber/${Standardtemplate.accountNumber} should be number!`);

                        reject(`There is an ERROR on row ${index + 1}, accountNumber/${Standardtemplate.accountNumber} should be number!`);
                        return;
                    }
                    if (accountNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: accountNumber,
                                companyCode: companyCode,
                                procedureId: procedureId,
                                accountType: accountType
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        accountName = temp.length > 0 ? temp[0].accountName : null;
                    }
                }

                let contraAccountNumber = null;
                let contraAccountName = row[Standardtemplate.contraAccountName] ? row[Standardtemplate.contraAccountName] : null;
                if (Standardtemplate.contraAccountNumber && row[Standardtemplate.contraAccountNumber]) {
                    contraAccountNumber = decimalParser(row[Standardtemplate.contraAccountNumber]);
                    if (isNaN(contraAccountNumber)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, contraAccountNumber/${Standardtemplate.contraAccountNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, contraAccountNumber/${Standardtemplate.contraAccountNumber} should be number!`);

                        reject(`There is an ERROR on row ${index + 1}, contraAccountNumber/${Standardtemplate.contraAccountNumber} should be number!`);
                        return;
                    }
                    if (contraAccountNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: contraAccountNumber,
                                companyCode: companyCode,
                                procedureId: procedureId,
                                accountType: contraAccountType
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        contraAccountName = temp.length > 0 ? temp[0].accountName : null;
                    }
                }

                // GlaAccount
                let GLAccountNumber = null;
                let GLAccountName = null;
                if (Standardtemplate.GLAccountNumber && row[Standardtemplate.GLAccountNumber]) {
                    GLAccountNumber = decimalParser(row[Standardtemplate.GLAccountNumber]);
                    if (isNaN(GLAccountNumber)) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, GLAccountNumber/${Standardtemplate.GLAccountNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, GLAccountNumber/${Standardtemplate.GLAccountNumber} should be number!`);
                        reject(`There is an ERROR on row ${index + 1}, GLAccountNumber/${Standardtemplate.GLAccountNumber} should be number!`);
                        return;
                    }
                    if (GLAccountNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: GLAccountNumber,
                                companyCode: companyCode,
                                procedureId: procedureId,
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
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, contraAccountGLAccountNo/${Standardtemplate.contraAccountGLAccountNo} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, contraAccountGLAccountNo/${Standardtemplate.contraAccountGLAccountNo} should be number!`);
                        reject(`There is an ERROR on row ${index + 1}, contraAccountGLAccountNo/${Standardtemplate.contraAccountGLAccountNo} should be number!`);
                        return;
                    }
                    if (contraAccountGLAccountNo) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: contraAccountGLAccountNo,
                                companyCode: companyCode,
                                procedureId: procedureId,
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
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, debtorNumber/${Standardtemplate.debtorNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, debtorNumber/${Standardtemplate.debtorNumber} should be number!`);
                        reject(`There is an ERROR on row ${index + 1}, debtorNumber/${Standardtemplate.debtorNumber} should be number!`);
                        return;
                    }
                    if (debtorNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: debtorNumber,
                                companyCode: companyCode,
                                procedureId: procedureId,
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
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, contraAccountDebtorNo/${Standardtemplate.contraAccountDebtorNo} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, contraAccountDebtorNo/${Standardtemplate.contraAccountDebtorNo} should be number!`);
                        reject(`There is an ERROR on row ${index + 1}, contraAccountDebtorNo/${Standardtemplate.contraAccountDebtorNo} should be number!`);
                        return;
                    }
                    if (contraAccountDebtorNo) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: contraAccountDebtorNo,
                                companyCode: companyCode,
                                procedureId: procedureId,
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
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, creditorNumber/${Standardtemplate.creditorNumber} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, creditorNumber/${Standardtemplate.creditorNumber} should be number!`);
                        reject(`There is an ERROR on row ${index + 1}, creditorNumber/${Standardtemplate.creditorNumber} should be number!`);
                        return;
                    }
                    if (creditorNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: creditorNumber,
                                companyCode: companyCode,
                                procedureId: procedureId,
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
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, contraAccountCreditorNo/${Standardtemplate.contraAccountCreditorNo} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, contraAccountCreditorNo/${Standardtemplate.contraAccountCreditorNo} should be number!`);
                        reject(`There is an ERROR on row ${index + 1}, contraAccountCreditorNo/${Standardtemplate.contraAccountCreditorNo} should be number!`);
                        return;
                    }
                    if (contraAccountCreditorNo) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: contraAccountCreditorNo,
                                companyCode: companyCode,
                                procedureId: procedureId,
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
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, recordNumber/${Standardtemplate.recordNumber} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, recordNumber/${Standardtemplate.recordNumber} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, recordNumber/${Standardtemplate.recordNumber} should be number!`);
                    return;
                }
                const creditAmount = decimalParser(row[Standardtemplate.creditAmount]);
                if (isNaN(creditAmount)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, creditAmount/${Standardtemplate.creditAmount} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, creditAmount/${Standardtemplate.creditAmount} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, creditAmount/${Standardtemplate.creditAmount} should be number!`);
                    return;
                }
                const postingPeriod = decimalParser(row[Standardtemplate.postingPeriod]);
                if (isNaN(postingPeriod)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, postingPeriod/${Standardtemplate.postingPeriod} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, postingPeriod/${Standardtemplate.postingPeriod} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, postingPeriod/${Standardtemplate.postingPeriod} should be number!`);

                    return;
                }

                const documentTypeNumber = decimalParser(row[Standardtemplate.documentTypeNumber]);
                if (isNaN(documentTypeNumber)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, documentTypeNumber/${Standardtemplate.documentTypeNumber} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, documentTypeNumber/${Standardtemplate.documentTypeNumber} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, documentTypeNumber/${Standardtemplate.documentTypeNumber} should be number!`);

                    return;
                }

                const balance = decimalParser(row[Standardtemplate.balance]);
                if (isNaN(balance)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, balance/${Standardtemplate.balance} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, balance/${Standardtemplate.balance} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, balance/${Standardtemplate.balance} should be number!`);

                    return;
                }

                const debitAmount = decimalParser(row[Standardtemplate.debitAmount]);
                if (isNaN(debitAmount)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, debitAmount/${Standardtemplate.debitAmount} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, debitAmount/${Standardtemplate.debitAmount} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, debitAmount/${Standardtemplate.debitAmount} should be number!`);

                    return;
                }

                const balanceTransactionCurrency = decimalParser(row[Standardtemplate.balanceTransactionCurrency]);
                if (isNaN(balanceTransactionCurrency)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, balanceTransactionCurrency/${Standardtemplate.balanceTransactionCurrency} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, balanceTransactionCurrency/${Standardtemplate.balanceTransactionCurrency} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, balanceTransactionCurrency/${Standardtemplate.balanceTransactionCurrency} should be number!`);

                    return;
                }

                const debitAmountTransactionCurrency = decimalParser(row[Standardtemplate.debitAmountTransactionCurrency]);
                if (isNaN(debitAmountTransactionCurrency)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, debitAmountTransactionCurrency/${Standardtemplate.debitAmountTransactionCurrency} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, debitAmountTransactionCurrency/${Standardtemplate.debitAmountTransactionCurrency} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, debitAmountTransactionCurrency/${Standardtemplate.debitAmountTransactionCurrency} should be number!`);

                    return;
                }

                const creditAmountTransactionCurrency = decimalParser(row[Standardtemplate.creditAmountTransactionCurrency]);
                if (isNaN(creditAmountTransactionCurrency)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, creditAmountTransactionCurrency/${Standardtemplate.creditAmountTransactionCurrency} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, creditAmountTransactionCurrency/${Standardtemplate.creditAmountTransactionCurrency} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, creditAmountTransactionCurrency/${Standardtemplate.creditAmountTransactionCurrency} should be number!`);

                    return;
                }

                const exchangeRate = decimalParser(row[Standardtemplate.exchangeRate]);
                if (isNaN(exchangeRate)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, exchangeRate/${Standardtemplate.exchangeRate} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, exchangeRate/${Standardtemplate.exchangeRate} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, exchangeRate/${Standardtemplate.exchangeRate} should be number!`);

                    return;
                }

                const cashDiscount = decimalParser(row[Standardtemplate.cashDiscount]);
                if (isNaN(cashDiscount)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, cashDiscount/${Standardtemplate.cashDiscount} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, cashDiscount/${Standardtemplate.cashDiscount} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, cashDiscount/${Standardtemplate.cashDiscount} should be number!`);

                    return;
                }

                const taxAmount = decimalParser(row[Standardtemplate.taxAmount]);
                if (isNaN(taxAmount)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmount/${Standardtemplate.taxAmount} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmount/${Standardtemplate.taxAmount} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, taxAmount/${Standardtemplate.taxAmount} should be number!`);

                    return;
                }

                const taxAmountDebit = decimalParser(row[Standardtemplate.taxAmountDebit]);
                if (isNaN(taxAmountDebit)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmountDebit/${Standardtemplate.taxAmountDebit} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmountDebit/${Standardtemplate.taxAmountDebit} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, taxAmountDebit/${Standardtemplate.taxAmountDebit} should be number!`);

                    return;
                }

                const taxAmountCredit = decimalParser(row[Standardtemplate.taxAmountCredit]);
                if (isNaN(taxAmountCredit)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmountCredit/${Standardtemplate.taxAmountCredit} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmountCredit/${Standardtemplate.taxAmountCredit} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, taxAmountCredit/${Standardtemplate.taxAmountCredit} should be number!`);

                    return;
                }

                const identifierBalanceCarryforward = decimalParser(row[Standardtemplate.identifierBalanceCarryforward]);
                if (isNaN(identifierBalanceCarryforward)) {
                    console.log(`${new Date()}: There is an ERROR on row ${index + 1}, identifierBalanceCarryforward/${Standardtemplate.identifierBalanceCarryforward} should be number!`);
                    logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, identifierBalanceCarryforward/${Standardtemplate.identifierBalanceCarryforward} should be number!`);
                    reject(`There is an ERROR on row ${index + 1}, identifierBalanceCarryforward/${Standardtemplate.identifierBalanceCarryforward} should be number!`);

                    return;
                }

                rowsToInsert.push({
                    assignment: row[Standardtemplate.assignment],
                    documentNumber: row[Standardtemplate.documentNumber],
                    documentNumber2: row[Standardtemplate.documentNumber2],
                    documentTypeNumber: documentTypeNumber,
                    documentType: row[Standardtemplate.documentType],
                    documentTypeName: row[Standardtemplate.documentTypeName],
                    documentTypeNew: row[Standardtemplate.documentTypeNew],
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
                    executionDate: chrono.parseDate(row[Standardtemplate.executionDate]),
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
                    contraAccountType: contraAccountType,
                    contraAccountNumber: contraAccountNumber,
                    contraAccountGLAccountNo: contraAccountGLAccountNo,
                    contraAccountGLAccountName: contraAccountGLAccountName,
                    contraAccountCreditorNo: contraAccountCreditorNo,
                    contraAccountCreditorName: contraAccountCreditorName,
                    contraAccountDebtorNo: contraAccountDebtorNo,
                    contraAccountDebtorName: contraAccountDebtorName,
                    dueDate: chrono.parseDate(row[Standardtemplate.dueDate]),
                    dueDateNew: chrono.parseDate(row[Standardtemplate.dueDateNew]),
                    textHeader: row[Standardtemplate.textHeader],
                    accountName: accountName,
                    procedureId: procedureId,
                    client: row[Standardtemplate.client],
                    contraAccountName: contraAccountName,
                    balance: balance,
                    debitAmount: debitAmount,
                    balanceTransactionCurrency: balanceTransactionCurrency,
                    debitAmountTransactionCurrency: debitAmountTransactionCurrency,
                    creditAmountTransactionCurrency: creditAmountTransactionCurrency,
                    exchangeRate: exchangeRate,
                    cashDiscount: cashDiscount,
                    postingKey: row[Standardtemplate.postingKey],
                    salesTaxKey: row[Standardtemplate.salesTaxKey],
                    taxRate: row[Standardtemplate.taxRate],
                    euTaxRate: row[Standardtemplate.euTaxRate],
                    taxAmount: taxAmount,
                    taxAmountDebit: taxAmountDebit,
                    taxAmountCredit: taxAmountCredit,
                    stackNumber: row[Standardtemplate.stackNumber],
                    CostCenter1: row[Standardtemplate.CostCenter1],
                    CostCenter2: row[Standardtemplate.CostCenter2],
                    applicationDateNew: chrono.parseDate(row[Standardtemplate.applicationDateNew]),
                    identifierBalanceCarryforward: identifierBalanceCarryforward,
                    generalReversal: row[Standardtemplate.generalReversal],
                    ledgerId: row[Standardtemplate.ledgerId],
                    documentLink: row[Standardtemplate.documentLink],
                    typeDocumentInformation1: row[Standardtemplate.typeDocumentInformation1],
                    contentDocumentInformation1: row[Standardtemplate.contentDocumentInformation1],
                    typeDocumentInformation2: row[Standardtemplate.typeDocumentInformation2],
                    contentDocumentInformation2: row[Standardtemplate.contentDocumentInformation2],
                    typeDocumentInformation3: row[Standardtemplate.typeDocumentInformation3],
                    contentDocumentInformation3: row[Standardtemplate.contentDocumentInformation3],
                    typeDocumentInformation4: row[Standardtemplate.typeDocumentInformation4],
                    contentDocumentInformation4: row[Standardtemplate.contentDocumentInformation4],
                    typeDocumentInformation5: row[Standardtemplate.typeDocumentInformation5],
                    contentDocumentInformation5: row[Standardtemplate.contentDocumentInformation5],
                    typeDocumentInformation6: row[Standardtemplate.typeDocumentInformation6],
                    contentDocumentInformation6: row[Standardtemplate.contentDocumentInformation6],
                    typeDocumentInformation7: row[Standardtemplate.typeDocumentInformation7],
                    contentDocumentInformation7: row[Standardtemplate.contentDocumentInformation7],
                    typeDocumentInformation8: row[Standardtemplate.typeDocumentInformation8],
                    contentDocumentInformation8: row[contentDocumentInformation8.contentDocumentInformation8]
                });


                // if array.length >= env.bulkSize
                if (rowsToInsert.length >= env.bulkInsertSize) {
                    // then bulk insert and empty the array
                    await PostingModel
                        .getPosting('posting_' + managerId)
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
                    .getPosting('posting_' + managerId)
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
                console.log("ERROR on row number: " + index + 1);
                reject(err.message);
            }
        }

    });

};