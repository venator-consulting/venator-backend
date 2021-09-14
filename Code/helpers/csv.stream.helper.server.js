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
const Exception = require("./errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");

const parseDecimalNumber = require('parse-decimal-number');
const cldr = require('cldr');
const getHeaderIndex = require('./index.finder.helper.server').getHeaderIndex;

const chrono = require('chrono-node');
const env = require('../config/environment');
const logger = require('../config/logger.config').logger;
const { errorHandler } = require("./error.handler.server");

const sequelizer = sequelize.getSequelize();

module.exports.readHeader = async function (filePath) {
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
}


module.exports.importAccountCsvFile = async function (filePath, managerId, procedureId, accountType = 1, template = null) {
    return new Promise(async (resolve, reject) => {
        let benchmark = process.hrtime();

        let index = 1;
        let bulkCount = 0;

        try {
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

                rowsToInsert.push({
                    accountNumber: row[template.accountNumber]?.trim(),
                    companyCode: row[template.companyCode]?.trim(),
                    accountName: row[template.accountName]?.trim(),
                    accountType: AccountTypeEnum[accountType] ? AccountTypeEnum[accountType] : row[template.accountType]?.trim(),
                    procedureId: procedureId,
                    // accountTypeId: accountTypeId,
                    accountTypeIdInternal: row[template.accountTypeIdInternal]?.trim(),
                    nameAffix1: row[template.nameAffix1]?.trim(),
                    nameAffix2: row[template.nameAffix2]?.trim(),
                    VATId: row[template.VATId]?.trim(),
                    taxNumber: row[template.taxNumber]?.trim(),
                    street: row[template.street]?.trim(),
                    postCode: row[template.postCode]?.trim(),
                    city: row[template.city]?.trim(),
                    country: row[template.country]?.trim(),
                    contactPerson: row[template.contactPerson]?.trim(),
                    phone: row[template.phone]?.trim(),
                    email: row[template.email]?.trim(),
                    bankName1: row[template.bankName1]?.trim(),
                    accountNumber: row[template.accountNumber]?.trim(),
                    bankSortCode1: row[template.bankSortCode1]?.trim(),
                    bankAccountNo1: row[template.bankAccountNo1]?.trim(),
                    countryCode1: row[template.countryCode1]?.trim(),
                    iBAN_No1: row[template.iBAN_No1]?.trim(),
                    swift_code1: row[template.swift_code1]?.trim(),
                    differentAccountHolder1: row[template.differentAccountHolder1]?.trim(),
                    bankSortCode2: row[template.bankSortCode2]?.trim(),
                    bankName2: row[template.bankName2]?.trim(),
                    bankAccountNo2: row[template.bankAccountNo2]?.trim(),
                    countryCode2: row[template.countryCode2]?.trim(),
                    iBAN_No2: row[template.iBAN_No2]?.trim(),
                    swift_code2: row[template.swift_code2]?.trim(),
                    differentAccountHolder2: row[template.differentAccountHolder2]?.trim(),
                    bankName3: row[template.bankName3]?.trim(),
                    bankAccountNo3: row[template.bankAccountNo3]?.trim(),
                    countryCode3: row[template.countryCode3]?.trim(),
                    iBAN_No3: row[template.iBAN_No3]?.trim(),
                    swift_code3: row[template.swift_code3]?.trim(),
                    differentAccountHolder3: row[template.differentAccountHolder3]?.trim(),
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
            console.error(err);
            // const rgx = / at row (.*)/g;
            // const arr = rgx.exec(err.message);
            const splitedMsg = err.message.split(" at row ");
            if (splitedMsg.length > 1) {
                const rowNum = splitedMsg[1];
                const theRealRowNum = rowNum > 0 ? parseInt(rowNum) + 1 + (bulkCount * env.bulkInsertSize) : index;
                const errorMsg = splitedMsg[0] + ' at row ' + theRealRowNum;
                logger.error(`${new Date()}: ${splitedMsg[0]} at row ${theRealRowNum}`);
                console.log("ERROR on row number: " + theRealRowNum);
                reject(new Exception(httpStatus.BAD_REQUEST, errorMsg, true));
            } else {
                console.log("ERROR on row number: " + index);
                reject(new Exception(httpStatus.BAD_REQUEST, err.message, true));
            }
            // logger.error(`${new Date()}: ${err}`);
            errorHandler("Error", err);

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
                // line = line.endsWith('\\r') ? line.slice(0, line.length - 2) : line;
                let cells = line.split(delimiter);
                if (cells.length < 2) reject({ message: "Can not detect delimiter correctly! please use ; or , or tab." });
                for (let i = 0; i < cells.length - 1; i++) {
                    let val = cells[i];
                    if (val && val.trim()) {
                        // val = val.substring(1, cells[i].length-1);
                        conformSingle = val.startsWith('\'') && val.endsWith('\'');
                        if (!conformSingle) break;
                    }
                }
                for (let i = 0; i < cells.length - 1; i++) {
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

                const companyCode = row[Standardtemplate.companyCode] ? row[Standardtemplate.companyCode]?.trim() : null;
                const accountType = row[Standardtemplate.accountType] ? row[Standardtemplate.accountType]?.trim() : null;
                const contraAccountType = row[Standardtemplate.contraAccountType] ? row[Standardtemplate.contraAccountType]?.trim() : null;
                let accountNumber = null;
                let accountName = row[Standardtemplate.accountName] ? row[Standardtemplate.accountName]?.trim() : null;
                if (Standardtemplate.accountNumber && row[Standardtemplate.accountNumber]) {
                    accountNumber = row[Standardtemplate.accountNumber]?.trim();
                    if (accountNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: accountNumber,
                                procedureId: procedureId,
                                accountType: accountType
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        accountName = temp.length > 0 ? temp[0].accountName?.trim() : null;
                    }
                }

                let contraAccountNumber = null;
                let contraAccountName = row[Standardtemplate.contraAccountName] ? row[Standardtemplate.contraAccountName]?.trim() : null;
                if (Standardtemplate.contraAccountNumber && row[Standardtemplate.contraAccountNumber]) {
                    contraAccountNumber = row[Standardtemplate.contraAccountNumber]?.trim();
                    if (contraAccountNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: contraAccountNumber,
                                procedureId: procedureId,
                                accountType: contraAccountType
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        contraAccountName = temp.length > 0 ? temp[0].accountName?.trim() : null;
                    }
                }

                // GlaAccount
                let GLAccountNumber = null;
                let GLAccountName = null;
                if (Standardtemplate.GLAccountNumber && row[Standardtemplate.GLAccountNumber]) {
                    GLAccountNumber = row[Standardtemplate.GLAccountNumber]?.trim();
                    if (GLAccountNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: GLAccountNumber,
                                procedureId: procedureId,
                                accountType: AccountTypeEnum[3]
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        GLAccountName = temp.length > 0 ? temp[0].accountName?.trim() : null;
                    }
                }

                // contra gla account 
                let contraAccountGLAccountNo = null;
                let contraAccountGLAccountName = null;
                if (Standardtemplate.contraAccountGLAccountNo && row[Standardtemplate.contraAccountGLAccountNo]) {
                    contraAccountGLAccountNo = row[Standardtemplate.contraAccountGLAccountNo]?.trim();
                    if (contraAccountGLAccountNo) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: contraAccountGLAccountNo,
                                procedureId: procedureId,
                                accountType: AccountTypeEnum[3]
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        contraAccountGLAccountName = temp.length > 0 ? temp[0].accountName?.trim() : null;
                    }
                }


                // Debitor Account
                let debtorNumber = null;
                let debtorName = null;
                if (Standardtemplate.debtorNumber && row[Standardtemplate.debtorNumber]) {
                    debtorNumber = row[Standardtemplate.debtorNumber]?.trim();
                    if (debtorNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: debtorNumber,
                                procedureId: procedureId,
                                accountType: AccountTypeEnum[1]
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        debtorName = temp.length > 0 ? temp[0].accountName?.trim() : null;
                    }
                }

                // contra Debitor Account
                let contraAccountDebtorNo = null;
                let contraAccountDebtorName = null;
                if (Standardtemplate.contraAccountDebtorNo && row[Standardtemplate.contraAccountDebtorNo]) {
                    contraAccountDebtorNo = row[Standardtemplate.contraAccountDebtorNo]?.trim();
                    if (contraAccountDebtorNo) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: contraAccountDebtorNo,
                                procedureId: procedureId,
                                accountType: AccountTypeEnum[1]
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        contraAccountDebtorName = temp.length > 0 ? temp[0].accountName?.trim() : null;
                    }
                }


                // Credito Account
                let creditorNumber = null;
                let creditorName = null;
                if (Standardtemplate.creditorNumber && row[Standardtemplate.creditorNumber]) {
                    creditorNumber = row[Standardtemplate.creditorNumber]?.trim();
                    if (creditorNumber) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: creditorNumber,
                                procedureId: procedureId,
                                accountType: AccountTypeEnum[2]
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        creditorName = temp.length > 0 ? temp[0].accountName?.trim() : null;
                    }
                }



                // contra creditor account
                let contraAccountCreditorNo = null;
                let contraAccountCreditorName = null;
                if (Standardtemplate.contraAccountCreditorNo && row[Standardtemplate.contraAccountCreditorNo]) {
                    contraAccountCreditorNo = row[Standardtemplate.contraAccountCreditorNo]?.trim();
                    if (contraAccountCreditorNo) {
                        let temp = await AccountModel.getAccounts('accounts_' + managerId).findAll({
                            where: {
                                accountNumber: contraAccountCreditorNo,
                                procedureId: procedureId,
                                accountType: AccountTypeEnum[2]
                            },
                            attributes: ['accountName'],
                            limit: 1
                        });
                        contraAccountCreditorName = temp.length > 0 ? temp[0].accountName?.trim() : null;
                    }
                }


                let recordNumber = row[Standardtemplate.recordNumber]?.trim();
                let creditAmount = decimalParser(row[Standardtemplate.creditAmount] ?? 'null');
                if (isNaN(creditAmount)) {
                    creditAmount = null;
                    if (Standardtemplate.creditAmount && row[Standardtemplate.creditAmount]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, creditAmount/${Standardtemplate.creditAmount} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, creditAmount/${Standardtemplate.creditAmount} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, creditAmount/${Standardtemplate.creditAmount} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let documentTypeNumber = decimalParser(row[Standardtemplate.documentTypeNumber] ?? 'null');
                if (isNaN(documentTypeNumber)) {
                    documentTypeNumber = null;
                    // console.log(`${new Date()}: There is an ERROR on row ${index + 1}, documentTypeNumber/${Standardtemplate.documentTypeNumber} should be number!`);
                    // logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, documentTypeNumber/${Standardtemplate.documentTypeNumber} should be number!`);
                    // reject(`There is an ERROR on row ${index + 1}, documentTypeNumber/${Standardtemplate.documentTypeNumber} should be number!`);
                    // return;
                }

                let balance = decimalParser(row[Standardtemplate.balance] ?? 'null');
                if (isNaN(balance)) {
                    balance = null;
                    if (Standardtemplate.balance && row[Standardtemplate.balance]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, balance/${Standardtemplate.balance} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, balance/${Standardtemplate.balance} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, balance/${Standardtemplate.balance} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let debitAmount = decimalParser(row[Standardtemplate.debitAmount] ?? 'null');
                if (isNaN(debitAmount)) {
                    debitAmount = null;
                    if (Standardtemplate.debitAmount && row[Standardtemplate.debitAmount]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, debitAmount/${Standardtemplate.debitAmount} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, debitAmount/${Standardtemplate.debitAmount} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, debitAmount/${Standardtemplate.debitAmount} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let balanceTransactionCurrency = decimalParser(row[Standardtemplate.balanceTransactionCurrency] ?? 'null');
                if (isNaN(balanceTransactionCurrency)) {
                    balanceTransactionCurrency = null;
                    if (Standardtemplate.balanceTransactionCurrency && row[Standardtemplate.balanceTransactionCurrency]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, balanceTransactionCurrency/${Standardtemplate.balanceTransactionCurrency} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, balanceTransactionCurrency/${Standardtemplate.balanceTransactionCurrency} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, balanceTransactionCurrency/${Standardtemplate.balanceTransactionCurrency} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let debitAmountTransactionCurrency = decimalParser(row[Standardtemplate.debitAmountTransactionCurrency] ?? 'null');
                if (isNaN(debitAmountTransactionCurrency)) {
                    debitAmountTransactionCurrency = null;
                    if (Standardtemplate.debitAmountTransactionCurrency && row[Standardtemplate.debitAmountTransactionCurrency]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, debitAmountTransactionCurrency/${Standardtemplate.debitAmountTransactionCurrency} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, debitAmountTransactionCurrency/${Standardtemplate.debitAmountTransactionCurrency} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, debitAmountTransactionCurrency/${Standardtemplate.debitAmountTransactionCurrency} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let creditAmountTransactionCurrency = decimalParser(row[Standardtemplate.creditAmountTransactionCurrency] ?? 'null');
                if (isNaN(creditAmountTransactionCurrency)) {
                    creditAmountTransactionCurrency = null;
                    if (Standardtemplate.creditAmountTransactionCurrency && row[Standardtemplate.creditAmountTransactionCurrency]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, creditAmountTransactionCurrency/${Standardtemplate.creditAmountTransactionCurrency} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, creditAmountTransactionCurrency/${Standardtemplate.creditAmountTransactionCurrency} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, creditAmountTransactionCurrency/${Standardtemplate.creditAmountTransactionCurrency} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let exchangeRate = decimalParser(row[Standardtemplate.exchangeRate] ?? 'null');
                if (isNaN(exchangeRate)) {
                    exchangeRate = null;
                    if (Standardtemplate.exchangeRate && row[Standardtemplate.exchangeRate]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, exchangeRate/${Standardtemplate.exchangeRate} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, exchangeRate/${Standardtemplate.exchangeRate} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, exchangeRate/${Standardtemplate.exchangeRate} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let cashDiscount = decimalParser(row[Standardtemplate.cashDiscount] ?? 'null');
                if (isNaN(cashDiscount)) {
                    cashDiscount = null;
                    if (Standardtemplate.cashDiscount && row[Standardtemplate.cashDiscount]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, cashDiscount/${Standardtemplate.cashDiscount} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, cashDiscount/${Standardtemplate.cashDiscount} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, cashDiscount/${Standardtemplate.cashDiscount} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let taxAmount = decimalParser(row[Standardtemplate.taxAmount] ?? 'null');
                if (isNaN(taxAmount)) {
                    taxAmount = null;
                    if (Standardtemplate.taxAmount && row[Standardtemplate.taxAmount]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmount/${Standardtemplate.taxAmount} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmount/${Standardtemplate.taxAmount} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, taxAmount/${Standardtemplate.taxAmount} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let taxAmountDebit = decimalParser(row[Standardtemplate.taxAmountDebit] ?? 'null');
                if (isNaN(taxAmountDebit)) {
                    taxAmountDebit = null;
                    if (Standardtemplate.taxAmountDebit && row[Standardtemplate.taxAmountDebit]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmountDebit/${Standardtemplate.taxAmountDebit} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmountDebit/${Standardtemplate.taxAmountDebit} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, taxAmountDebit/${Standardtemplate.taxAmountDebit} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let taxAmountCredit = decimalParser(row[Standardtemplate.taxAmountCredit] ?? 'null');
                if (isNaN(taxAmountCredit)) {
                    taxAmountCredit = null;
                    if (Standardtemplate.taxAmountCredit && row[Standardtemplate.taxAmountCredit]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmountCredit/${Standardtemplate.taxAmountCredit} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, taxAmountCredit/${Standardtemplate.taxAmountCredit} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, taxAmountCredit/${Standardtemplate.taxAmountCredit} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                let identifierBalanceCarryforward = decimalParser(row[Standardtemplate.identifierBalanceCarryforward] ?? 'null');
                if (isNaN(identifierBalanceCarryforward)) {
                    identifierBalanceCarryforward = null;
                    if (Standardtemplate.identifierBalanceCarryforward && row[Standardtemplate.identifierBalanceCarryforward]) {
                        console.log(`${new Date()}: There is an ERROR on row ${index + 1}, identifierBalanceCarryforward/${Standardtemplate.identifierBalanceCarryforward} should be number!`);
                        logger.error(`${new Date()}: There is an ERROR on row ${index + 1}, identifierBalanceCarryforward/${Standardtemplate.identifierBalanceCarryforward} should be number!`);
                        const message = `There is an ERROR on row ${index + 1}, identifierBalanceCarryforward/${Standardtemplate.identifierBalanceCarryforward} should be number!`;
                        reject(new Exception(httpStatus.BAD_REQUEST, message, true));
                        return;
                    }
                }

                rowsToInsert.push({
                    assignment: row[Standardtemplate.assignment]?.trim(),
                    documentNumber: row[Standardtemplate.documentNumber]?.trim(),
                    documentNumber2: row[Standardtemplate.documentNumber2]?.trim(),
                    documentTypeNumber: documentTypeNumber,
                    documentType: row[Standardtemplate.documentType]?.trim(),
                    documentTypeName: row[Standardtemplate.documentTypeName?.trim()],
                    documentTypeNew: row[Standardtemplate.documentTypeNew]?.trim(),
                    documentDate: chrono.de.parseDate(row[Standardtemplate.documentDate]),
                    recordNumber: recordNumber,
                    creditAmount: creditAmount,
                    transactionCurrency: row[Standardtemplate.transactionCurrency]?.trim(),
                    applicationDocument: row[Standardtemplate.applicationDocument]?.trim(),
                    textPosting: row[Standardtemplate.textPosting]?.trim(),
                    applicationDate: chrono.de.parseDate(row[Standardtemplate.applicationDate]),
                    postingDate: chrono.de.parseDate(row[Standardtemplate.postingDate]),
                    companyCode: companyCode,
                    fiscalYear: row[Standardtemplate.fiscalYear]?.trim(),
                    postingPeriod: row[Standardtemplate.postingPeriod]?.trim(),
                    executionDate: chrono.de.parseDate(row[Standardtemplate.executionDate]),
                    accountType: accountType,
                    accountNumber: accountNumber,
                    debitCredit: row[Standardtemplate.debitCredit]?.trim(),
                    reference: row[Standardtemplate.reference]?.trim(),
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
                    dueDate: chrono.de.parseDate(row[Standardtemplate.dueDate]),
                    dueDateNew: chrono.de.parseDate(row[Standardtemplate.dueDateNew]),
                    textHeader: row[Standardtemplate.textHeader]?.trim(),
                    accountName: accountName,
                    procedureId: procedureId,
                    client: row[Standardtemplate.client]?.trim(),
                    contraAccountName: contraAccountName,
                    balance: balance,
                    debitAmount: debitAmount,
                    balanceTransactionCurrency: balanceTransactionCurrency,
                    debitAmountTransactionCurrency: debitAmountTransactionCurrency,
                    creditAmountTransactionCurrency: creditAmountTransactionCurrency,
                    exchangeRate: exchangeRate,
                    cashDiscount: cashDiscount,
                    postingKey: row[Standardtemplate.postingKey]?.trim(),
                    salesTaxKey: row[Standardtemplate.salesTaxKey]?.trim(),
                    taxRate: row[Standardtemplate.taxRate]?.trim(),
                    euTaxRate: row[Standardtemplate.euTaxRate]?.trim(),
                    taxAmount: taxAmount,
                    taxAmountDebit: taxAmountDebit,
                    taxAmountCredit: taxAmountCredit,
                    stackNumber: row[Standardtemplate.stackNumber]?.trim(),
                    CostCenter1: row[Standardtemplate.CostCenter1]?.trim(),
                    CostCenter2: row[Standardtemplate.CostCenter2]?.trim(),
                    applicationDateNew: chrono.de.parseDate(row[Standardtemplate.applicationDateNew]),
                    identifierBalanceCarryforward: identifierBalanceCarryforward,
                    generalReversal: row[Standardtemplate.generalReversal]?.trim(),
                    ledgerId: row[Standardtemplate.ledgerId]?.trim(),
                    documentLink: row[Standardtemplate.documentLink]?.trim(),
                    typeDocumentInformation1: row[Standardtemplate.typeDocumentInformation1]?.trim(),
                    contentDocumentInformation1: row[Standardtemplate.contentDocumentInformation1]?.trim(),
                    typeDocumentInformation2: row[Standardtemplate.typeDocumentInformation2]?.trim(),
                    contentDocumentInformation2: row[Standardtemplate.contentDocumentInformation2]?.trim(),
                    typeDocumentInformation3: row[Standardtemplate.typeDocumentInformation3]?.trim(),
                    contentDocumentInformation3: row[Standardtemplate.contentDocumentInformation3]?.trim(),
                    typeDocumentInformation4: row[Standardtemplate.typeDocumentInformation4]?.trim(),
                    contentDocumentInformation4: row[Standardtemplate.contentDocumentInformation4]?.trim(),
                    typeDocumentInformation5: row[Standardtemplate.typeDocumentInformation5]?.trim(),
                    contentDocumentInformation5: row[Standardtemplate.contentDocumentInformation5]?.trim(),
                    typeDocumentInformation6: row[Standardtemplate.typeDocumentInformation6]?.trim(),
                    contentDocumentInformation6: row[Standardtemplate.contentDocumentInformation6]?.trim(),
                    typeDocumentInformation7: row[Standardtemplate.typeDocumentInformation7]?.trim(),
                    contentDocumentInformation7: row[Standardtemplate.contentDocumentInformation7]?.trim(),
                    typeDocumentInformation8: row[Standardtemplate.typeDocumentInformation8]?.trim(),
                    contentDocumentInformation8: row[Standardtemplate.contentDocumentInformation8]?.trim()
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
            console.error(err);
            const splitedMsg = err.message.split(" at row ");
            if (splitedMsg.length > 1) {
                const rowNum = splitedMsg[1];
                const theRealRowNum = rowNum > 0 ? parseInt(rowNum) + 1 + (bulkCount * env.bulkInsertSize) : index;
                const errorMsg = splitedMsg[0] + ' at row ' + theRealRowNum;
                logger.error(`${new Date()}: ${splitedMsg[0]} at row ${theRealRowNum}`);
                console.log("ERROR on row number: " + theRealRowNum);
                reject(new Exception(httpStatus.BAD_REQUEST, errorMsg, true));
            } else {
                console.log("ERROR on row number: " + index + 1);
                reject(new Exception(httpStatus.BAD_REQUEST, err.message, true));
            }
            // logger.error(`${new Date()}: ${err}`);
            errorHandler("Error", err);
        }

    });

};