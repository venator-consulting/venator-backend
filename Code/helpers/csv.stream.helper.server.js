const fs = require("fs");
const csv = require('csv-parser');
const stripBom = require('strip-bom-stream');
const templatesType = require('../models/enums/template.type');
const SapWmobel = require('../models/templates/sap.wmobel.template');
const SapCinram = require('../models/templates/sap.cinram.template');

const chrono = require('chrono-node');


const env = require('../config/environment');

module.exports.readCsvStream = async function (filePath, templateType = 1, template = null) {

    let index = 0;

    if (templateType == templatesType.SAP_WMOBEL) {
        Standardtemplate = SapWmobel;
    } else if (templateType == templatesType.SAP_CINRAM) {
        Standardtemplate = SapCinram.posting;
    } else {
        Standardtemplate = template;
    }

    let bulkSize = 0;

    let rowsToInsert = [];

    fs.createReadStream(filePath)
        .pipe(stripBom())
        .pipe(csv({
            separator: ';'
        }))
        .on('data', (data) => {
            index++;


            console.log(data);

            // use chrono for date
            // use 
            rowsToInsert.push({
                assignment: data[Standardtemplate.assignment],
                documentNumber: data[Standardtemplate.documentNumber],
                documentType: data[Standardtemplate.documentType],
                documentDate: data[Standardtemplate.documentDate],
                recordNumber: data[Standardtemplate.recordNumber],
                creditAmount: data[Standardtemplate.creditAmount],
                transactionCurrency: data[Standardtemplate.transactionCurrency],
                applicationDocument: data[Standardtemplate.applicationDocument],
                textPosting: data[Standardtemplate.textPosting],
                applicationDate: data[Standardtemplate.applicationDate],
                postingDate: data[Standardtemplate.postingDate],
                companyCode: data[Standardtemplate.companyCode],
                fiscalYear: data[Standardtemplate.fiscalYear],
                postingPeriod: data[Standardtemplate.postingPeriod],
                accountType: data[Standardtemplate.accountType],
                accountNumber: data[Standardtemplate.accountNumber],
                debitCredit: data[Standardtemplate.debitCredit],
                reference: data[Standardtemplate.reference],
                GLAccountNumber: data[Standardtemplate.GLAccountNumber],
                contraAccountType: data[Standardtemplate.contraAccountType],
                contraAccountNumber: data[Standardtemplate.contraAccountNumber],
                contraAccountGLAccountNo: data[Standardtemplate.contraAccountGLAccountNo],
                contraAccountCreditorNo: data[Standardtemplate.contraAccountCreditorNo],
                contraAccountDebtorNo: data[Standardtemplate.contraAccountDebtorNo],
                dueDate: data[Standardtemplate.dueDate],
                textHeader: data[Standardtemplate.textHeader],
                accountName: data[Standardtemplate.accountName],
            });

            if(rowsToInsert.length >= 500) {
                // insert to db
                // if done empty the array 
            }

        })
        .on('end', () => {
            console.log('file parsed successfully :)');
        });

};