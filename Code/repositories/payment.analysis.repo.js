const connection = require('../config/mysql.config').getConnection();
const { QueryTypes } = require("sequelize");
const Sequelize = require('../config/sequelize.config');
const sequelize = Sequelize.getSequelize();

module.exports.paymentDateRange = async (orgId, prcId) => {
    try {
        let query = `SELECT MAX(pos.applicationDate)  maxdate, MIN(pos.documentDate) mindate 
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.documentDate is not NULL 
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG'
                            OR UPPER(pos.documentType) = 'KZ'
                            OR UPPER(pos.documentType) = 'ZP'
                            OR UPPER(pos.documentType) = 'RE'
                            OR UPPER(pos.documentType) = 'KR')`;

        const result = await sequelize.query(
            query, {
                replacements: {
                    procedureId: prcId
                },
                type: QueryTypes.SELECT
            }
        );
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};


monthDiff = (d1, d2) => {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

module.exports.paymentAnalysis = async (orgId, prcId, fromDate, toDate, cb, cb1) => {
    try {
        if (!fromDate) {
            throw new Error('Document Date is null for this procedure!');
        }
        if (!toDate) {
            throw new Error('Application Date is null for this procedure!');
        }
        if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
            throw new Error('DocumentDate and ApplicationDate must be Date!');
        }
        const diff = monthDiff(fromDate, toDate);
        // if diff = 0 throw an error
        let finalRes = [];
        let starterMonth = fromDate.getMonth() + 1;
        let starterYear = fromDate.getFullYear();
        for (let index = 0; index <= diff; index++) {
            const element = {
                monthName: starterMonth,
                yearName: starterYear,
                blue: {
                    value: 0,
                    accounts: []
                },
                red: {
                    value: 0,
                    accounts: []
                },
                green: {
                    value: 0,
                    accounts: []
                }
            };
            finalRes.push(element);
            starterMonth++;
            if (starterMonth > 12) {
                starterMonth = 1;
                starterYear++;
            }
        }

        let query = `SELECT pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
                         pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.documentDate is not NULL 
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG'
                            OR UPPER(pos.documentType) = 'KZ'
                            OR UPPER(pos.documentType) = 'ZP'
                            OR UPPER(pos.documentType) = 'RE'
                            OR UPPER(pos.documentType) = 'KR')`;

        const str = connection.query(query).stream();

        str.on('data', (row) => {
            finalRes.forEach(element => {
                // get last day of the month
                var d = new Date(element.yearName, +element.monthName + 1, 0);
                if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'RECHNUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'RE') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KR')) &&
                    row.documentDate <= d && (row.applicationDate == null || row.applicationDate > d)) {
                    element.blue.value += +row.balance;
                        // add creditor to the list
                        const i = element.blue.accounts.findIndex(x => x.accountNumber==row.accountNumber); 
                        if (i >= 0) {
                            element.blue.accounts[i].value += +row.balance;
                        } else {
                            element.blue.accounts.push({
                                value: +row.balance,
                                accountNumber: row.accountNumber,
                                accountName: row.accountName
                            });
                        }

                } else if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'RECHNUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'RE') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KR')) &&
                    row.documentDate <= d && (row.applicationDate == null || row.applicationDate > d) && row.dueDate <= d) {
                    element.red.value += +row.balance;
                } else if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'ZAHLUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KZ') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'ZP')) &&
                    row.documentDate <= d && row.applicationDate == null) {
                    element.green.value += +row.balance;
                }
            });
        });

        str.on('end', async () => {
            cb(finalRes);
        });
    } catch (error) {
        cb1(error.message);
    }
};