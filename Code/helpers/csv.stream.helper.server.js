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
const {
    dir
} = require("console");


const sequelizer = sequelize.getSequelize();

module.exports.readHeader = async function (filePath) {

    try {
        return new Promise((resolve, reject) => {
            let fileHeaders = [];
            fs.createReadStream(filePath)
                .pipe(csv({
                    separator: ';'
                }))
                .on('headers', (headers) => {
                    console.log(`First header: ${headers[0]}`);
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
        return fileHeaders;
    } catch (e) {
        console.error(e);
        reject(e);
    }
}


module.exports.importAccountCsvFile = async function (filePath, accountType = 1, template = null) {
    // return new Promise((resolve, reject) => {
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

        let index = 1;

        let rowsToInsert = [];

        const parser = fs.createReadStream(filePath)
            .pipe(csv({
                separator: ';'
            }));

        for await (const row of parser) {

            console.dir(row);

            rowsToInsert.push({
                accountNumber: decimalParser(row[template.accountNumber]),
                companyCode: row[template.companyCode],
                accountName: row[template.accountName],
                accountType: AccountTypeEnum[accountType]
            });


            // if array.length >= env.bulkSize
            if (rowsToInsert.length >= env.bulkInsertSize) {
                // then bulk insert and empty the array
                try {
                    await AccountModel
                        .getAccounts()
                        .bulkCreate(rowsToInsert, {
                            transaction: t
                        });
                } catch (err) {
                    console.log(err);
                    await t.rollback();
                    return {
                        error: err
                    };
                }

                rowsToInsert = [];
            } // end of bulk insert batch
            index++;

        } // end of for each row
        // if the array not empty: bulk insert it then empty it.
        if (rowsToInsert.length > 0) {
            try {
                await AccountModel
                    .getAccounts()
                    .bulkCreate(rowsToInsert, {
                        transaction: t
                    });
            } catch (err) {
                console.log(err);
                await t.rollback();
                return {
                    error: err
                };
            }
            rowsToInsert = [];
        } /// end of rest data condition if (rowsToInsert.length > 0)

        await t.commit();
        return true;

    } catch (err) {
        console.error(err);
        throw err;
    }
    // });
};


module.exports.readCsvStream = async function (filePath, template = null, templateType = 1, local = 'de_DE') {

    try {

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

        let index = 1;

        let rowsToInsert = [];

        const parser = fs.createReadStream(filePath)
            .pipe(csv({
                separator: ';'
            }));

        for await (const row of parser) {

            console.dir(row);

            const companyCode = row[Standardtemplate.companyCode];
            const accountType = row[Standardtemplate.accountType];
            let accountNumber = null;
            let accountName = row[Standardtemplate.accountName];
            if (Standardtemplate.accountNumber && row[Standardtemplate.accountNumber]) {
                accountNumber = decimalParser(row[Standardtemplate.accountNumber]);
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


            rowsToInsert.push({
                assignment: row[Standardtemplate.assignment],
                documentNumber: row[Standardtemplate.documentNumber],
                documentType: row[Standardtemplate.documentType],
                documentDate: chrono.parseDate(row[Standardtemplate.documentDate]),
                recordNumber: decimalParser(row[Standardtemplate.recordNumber]),
                creditAmount: decimalParser(row[Standardtemplate.creditAmount]),
                transactionCurrency: row[Standardtemplate.transactionCurrency],
                applicationDocument: row[Standardtemplate.applicationDocument],
                textPosting: row[Standardtemplate.textPosting],
                applicationDate: chrono.parseDate(row[Standardtemplate.applicationDate]),
                postingDate: chrono.parseDate(row[Standardtemplate.postingDate]),
                companyCode: companyCode,
                fiscalYear: row[Standardtemplate.fiscalYear],
                postingPeriod: decimalParser(row[Standardtemplate.postingPeriod]),
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
                try {
                    await PostingModel
                        .getPosting()
                        .bulkCreate(rowsToInsert, {
                            transaction: t
                        });
                } catch (err) {
                    console.log(err);
                    await t.rollback();
                    return {
                        error: err
                    };
                }

                rowsToInsert = [];
            } // end of bulk insert batch
            index++;

        } // end of for each row
        // if the array not empty: bulk insert it then empty it.
        if (rowsToInsert.length > 0) {
            try {
                await PostingModel
                    .getPosting()
                    .bulkCreate(rowsToInsert, {
                        transaction: t
                    });
            } catch (err) {
                console.log(err);
                await t.rollback();
                return {
                    error: err
                };
            }
            rowsToInsert = [];
        } /// end of rest data condition if (rowsToInsert.length > 0)

        await t.commit();
        return true;

    } catch (err) {
        console.log(err);
        return {
            error: err
        };
    }
};