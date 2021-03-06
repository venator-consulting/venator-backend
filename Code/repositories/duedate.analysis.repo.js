const connection = require('../config/mysql.config').getConnection();
const {
    QueryTypes
} = require("sequelize");
const Sequelize = require('../config/sequelize.config');
const sequelize = Sequelize.getSequelize();

module.exports.dueDateRange = async (orgId, prcId) => {
    try {

        // AND pos.applicationDate is not NULL
        // AND (pos.applicationDate <> pos.dueDate)
        let query = `SELECT MIN(pos.dueDate) mindate , MAX(pos.dueDate) maxdate,
                         MIN(pos.documentDate) mindocdate , MAX(pos.applicationDate) maxappdate
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.dueDate is not NULL 
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
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

/**
 * 
 * @param {Date} start 
 * @param {Date} end 
 * @returns number of days positive or negative if end smaller than start
 */
function getNumberOfDays(start, end) {
    // a day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = end.getTime() - start.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

monthDiff = (d1, d2) => {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

module.exports.dueDateAnalysis = async (orgId, prcId, fromDate, toDate, mindocdate, maxappdate, cb, cb1) => {
    try {

        if (!fromDate) {
            throw new Error('Due Date is null for this procedure!');
        }
        if (!toDate) {
            throw new Error('Due Date is null for this procedure!');
        }
        if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
            throw new Error('Due Date and ApplicationDate must be Date!');
        }

        const diff = monthDiff(mindocdate, maxappdate);

        let res = new Array();
        let starterMonth = mindocdate.getMonth() + 1;
        let starterYear = mindocdate.getFullYear();
        for (let index = 0; index <= diff; index++) {
            const element = {
                monthName: starterMonth,
                yearName: starterYear,
                positive: 0,
                negative: 0,
                notPaid: 0
            };
            res.push(element);
            starterMonth++;
            if (starterMonth > 12) {
                starterMonth = 1;
                starterYear++;
            }
        }

        let diffData = new Array();
        let firstChartLabels = new Array();

        const finalResult = {
            dueDateReference: {
                data: diffData,
                labels: firstChartLabels
            },
            docDateReference: res
        };

        let dueDateRefAccounts = new Array();

        // AND pos.applicationDate is not NULL
        // AND (pos.applicationDate <> pos.dueDate)
        let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
                         pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.dueDate is not NULL 
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentType) = 'RE'
                            OR UPPER(pos.documentType) = 'KR')
                        ORDER BY pos.dueDate`;

        const str = connection.query(query).stream();


        str.on('data', (row) => {
            // too early or too late records
            if (row.applicationDate) {
                const rowDiff = getNumberOfDays(row.dueDate, row.applicationDate);
                const rowindex = getNumberOfDays(fromDate, row.dueDate);
                diffData[rowindex] = diffData[rowindex] ? diffData[rowindex] + rowDiff : rowDiff;
                firstChartLabels[rowindex] = firstChartLabels[rowindex] ? firstChartLabels[rowindex] : row.dueDate.toLocaleDateString('de-DE');;


                const i = dueDateRefAccounts.findIndex(x => x.accountNumber == row.accountNumber);
                if (i == -1) {
                    if (rowDiff > 0) {
                        dueDateRefAccounts.push({
                            accountNumber: row.accountNumber,
                            accountName: row.accountName,
                            delayPos: rowDiff,
                            delayNeg: 0,
                            count: 1
                        });
                    } else {
                        dueDateRefAccounts.push({
                            accountNumber: row.accountNumber,
                            accountName: row.accountName,
                            delayPos: 0,
                            delayNeg: rowDiff,
                            count: 1
                        });
                    }
                } else {
                    dueDateRefAccounts[i].count++;
                    if (rowDiff > 0) {
                        dueDateRefAccounts[i].delayPos += +rowDiff;
                    } else {
                        dueDateRefAccounts[i].delayNeg += +rowDiff;
                    }
                }

                for (const element of res) {
                    if (row.documentDate.getMonth() == (element.monthName - 1) && row.documentDate.getFullYear() == element.yearName) {
                        element.positive += rowDiff > 0 ? rowDiff : 0;
                        element.negative += rowDiff < 0 ? rowDiff : 0;
                        continue;
                    }
                }
                // Not paid at all
            } else {
                for (const element of res) {
                    if (row.documentDate.getMonth() == (element.monthName - 1) && row.documentDate.getFullYear() == element.yearName) {
                        element.notPaid += +row.balance;
                        continue;
                    }
                }
            }

        }); // end of on data

        str.on('end', async () => {
            finalResult.dueDateReference.data = diffData.filter(Boolean);
            finalResult.dueDateReference.labels = firstChartLabels.filter(Boolean);
            finalResult.docDateReference = res;
            finalResult.dueDateRefAccounts = dueDateRefAccounts;
            cb(finalResult);
        });


    } catch (error) {
        cb1(error.message);
    }
}


module.exports.dueDateAnalysisDetails = async (orgId, prcId, mindocdate, maxappdate, accountNumber, cb, cb1) => {
    try {

        if (!mindocdate) {
            throw new Error('Due Date is null for this procedure!');
        }
        if (!maxappdate) {
            throw new Error('Due Date is null for this procedure!');
        }
        if (!(mindocdate instanceof Date) || !(maxappdate instanceof Date)) {
            throw new Error('Due Date and ApplicationDate must be Date!');
        }

        const diff = monthDiff(mindocdate, maxappdate);

        let res = new Array();
        let starterMonth = mindocdate.getMonth() + 1;
        let starterYear = mindocdate.getFullYear();
        for (let index = 0; index <= diff; index++) {
            const element = {
                monthName: starterMonth,
                yearName: starterYear,
                positive: 0,
                negative: 0,
                notPaid: 0
            };
            res.push(element);
            starterMonth++;
            if (starterMonth > 12) {
                starterMonth = 1;
                starterYear++;
            }
        }

        const finalResult = {
            docDateReference: res,
            records: new Array()
        };

        let records = new Array();

        // AND pos.applicationDate is not NULL
        // AND (pos.applicationDate <> pos.dueDate)
        let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
                         pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.dueDate is not NULL 
                        AND pos.applicationDate is not null
                        AND pos.applicationDate > pos.dueDate
                        AND pos.accountNumber = ${accountNumber}
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentType) = 'RE'
                            OR UPPER(pos.documentType) = 'KR')
                        ORDER BY pos.dueDate`;

        const str = connection.query(query).stream();


        str.on('data', (row) => {
            // too early or too late records
            // if (row.applicationDate) {
            const rowDiff = getNumberOfDays(row.dueDate, row.applicationDate);
            records.push(row);
            for (const element of res) {
                if (row.documentDate.getMonth() == (element.monthName - 1) && row.documentDate.getFullYear() == element.yearName) {
                    element.positive += rowDiff > 0 ? rowDiff : 0;
                    element.negative += rowDiff < 0 ? rowDiff : 0;
                    continue;
                }
            }
            // Not paid at all
            // } else {
            //     for (const element of res) {
            //         if (row.documentDate.getMonth() == (element.monthName - 1) && row.documentDate.getFullYear() == element.yearName) {
            //             element.notPaid += +row.balance;
            //             continue;
            //         }
            //     }
            // }

        }); // end of on data

        str.on('end', async () => {
            finalResult.docDateReference = res;
            finalResult.records = records;
            cb(finalResult);
        });


    } catch (error) {
        cb1(error.message);
    }
}