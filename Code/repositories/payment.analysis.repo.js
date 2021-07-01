const connection = require('../config/mysql.config').getConnection();
const {
    QueryTypes
} = require("sequelize");
const Sequelize = require('../config/sequelize.config');
const sequelize = Sequelize.getSequelize();

module.exports.paymentDateRange = async (orgId, prcId) => {
    try {
        let query = `SELECT MAX(pos.applicationDate)  maxdate, MIN(pos.documentDate) mindate , MAX(pos.dueDate) maxdue 
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
                        AND (pos.applicationDate is null || pos.applicationDate > pos.dueDate)
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
                var d = new Date(element.yearName, +element.monthName, 0);
                if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'RECHNUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'RE') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KR')) &&
                    row.documentDate <= d && (row.applicationDate == null || row.applicationDate > d)) {
                    element.blue.value += +row.balance;
                    // add creditor to the list
                    const i = element.blue.accounts.findIndex(x => x.accountNumber == row.accountNumber);
                    if (i >= 0) {
                        element.blue.accounts[i].value += +row.balance;
                    } else {
                        element.blue.accounts.push({
                            value: +row.balance,
                            accountNumber: row.accountNumber,
                            accountName: row.accountName
                        });
                    }

                }
                 if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'RECHNUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'RE') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KR')) &&
                    row.documentDate <= d && (row.applicationDate == null || row.applicationDate > d) && row.dueDate <= d) {
                    element.red.value += +row.balance;
                    const i = element.red.accounts.findIndex(x => x.accountNumber == row.accountNumber);
                    if (i >= 0) {
                        element.red.accounts[i].value += +row.balance;
                    } else {
                        element.red.accounts.push({
                            value: +row.balance,
                            accountNumber: row.accountNumber,
                            accountName: row.accountName
                        });
                    }
                }
                 if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'ZAHLUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KZ') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'ZP')) &&
                    row.documentDate <= d && row.applicationDate == null) {
                    element.green.value += +row.balance;
                    const i = element.green.accounts.findIndex(x => x.accountNumber == row.accountNumber);
                    if (i >= 0) {
                        element.green.accounts[i].value += +row.balance;
                    } else {
                        element.green.accounts.push({
                            value: +row.balance,
                            accountNumber: row.accountNumber,
                            accountName: row.accountName
                        });
                    }
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


module.exports.paymentAnalysisDetails = async (orgId, prcId, fromDate, toDate, accountNumber, cb, cb1) => {
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
        let result = [];
        let finalResult = {
            data: result,
            blue: [],
            red: [],
            green: []
        };
        let starterMonth = fromDate.getMonth() + 1;
        let starterYear = fromDate.getFullYear();
        for (let index = 0; index <= diff; index++) {
            const element = {
                monthName: starterMonth,
                yearName: starterYear,
                blue: {
                    value: 0,
                },
                red: {
                    value: 0,
                },
                green: {
                    value: 0,
                }
            };
            result.push(element);
            starterMonth++;
            if (starterMonth > 12) {
                starterMonth = 1;
                starterYear++;
            }
        }

        let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
                         pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber = ${accountNumber} 
                        AND pos.documentDate is not NULL 
                        AND (pos.applicationDate is null || pos.applicationDate > pos.dueDate)
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG'
                            OR UPPER(pos.documentType) = 'KZ'
                            OR UPPER(pos.documentType) = 'ZP'
                            OR UPPER(pos.documentType) = 'RE'
                            OR UPPER(pos.documentType) = 'KR')`;

        const str = connection.query(query).stream();

        str.on('data', (row) => {
            result.forEach(element => {
                // get last day of the month
                var d = new Date(element.yearName, +element.monthName, 0);
                // BLUES................
                // and it's late: app date > due date
                // month we increment already!!!!!!!!!!!!!!!!!!
                if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'RECHNUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'RE') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KR')) &&
                    row.documentDate <= d && (row.applicationDate == null || row.applicationDate > d)) {
                    element.blue.value += +row.balance;
                    // add row to the blue list
                    const i = finalResult.blue.findIndex(x => x.id == row.id);
                    if (i == -1) {
                        finalResult.blue.push(row);
                    }
                    // RED......................
                }
                 if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'RECHNUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'RE') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KR')) &&
                    row.documentDate <= d && (row.applicationDate == null || row.applicationDate > d) && row.dueDate <= d) {
                    element.red.value += +row.balance;
                    // add row to the red list
                    const i = finalResult.red.findIndex(x => x.id == row.id);
                    if (i == -1) {
                        finalResult.red.push(row);
                    }
                    // finalResult.red.push(row);
                    // GREEN.......................
                }
                 if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == 'ZAHLUNG') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'KZ') ||
                        (row.documentType && row.documentType.toString().toUpperCase() == 'ZP')) &&
                    row.documentDate <= d && row.applicationDate == null) {
                    element.green.value += +row.balance;
                    // add row to the green list
                    const i = finalResult.green.findIndex(x => x.id == row.id);
                    if (i == -1) {
                        finalResult.green.push(row);
                    }
                    // finalResult.green.push(row);
                }
            });
        });

        str.on('end', async () => {
            cb(finalResult);
        });
    } catch (error) {
        cb1(error.message);
    }
};