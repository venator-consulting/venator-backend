const connection = require('../config/mysql.config');
const {
    QueryTypes
} = require("sequelize");
const Sequelize = require('../config/sequelize.config');
const sequelize = Sequelize.getSequelize();
const CreditLineRepo = require('./creditLines.repo.server');

// AND UPPER(pos.accountType) = 'K'
// ALTER TABLE venator.posting_1 MODIFY COLUMN StartingBalanceDate DATETIME NULL;

module.exports.liquiditytDateRange = async (orgId, prcId) => {
    try {
        let query = `SELECT MIN(pos.StartingBalanceDate) mindate, MAX(pos.documentDate) maxdate, MIN(pos.documentDate) mindocdate 
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId
                        AND pos.accountNumber is not NULL
                        AND pos.documentDate is not NULL 
                        AND UPPER(pos.accountTypeNewName) = 'FINANZKONTO'`;

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



module.exports.liquidityAnalysis = async (orgId, prcId, fromDate, toDate) => {
    return new Promise((resolve, reject) => {
        try {

            if (!fromDate) {
                throw new Error('Document Date is null for this procedure!');
            }
            if (!toDate) {
                throw new Error('Document Date is null for this procedure!');
            }
            if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
                throw new Error('Document Date and Starting Balance Date must be Date!');
            }

            let data = {};
            let chartLabels = new Array();

            const finalResult = {
                bankBalances: {
                    data: data,
                    labels: chartLabels
                }
            };

            let accounts = new Array();

            let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, 
                            pos.StartingBalanceDate,
                            pos.accountTypeNewName, pos.balance, pos.StartingBalance
                        FROM posting_${orgId} pos
                        WHERE
                            pos.procedureId = ${prcId}
                            AND pos.accountNumber is not NULL
                            AND pos.documentDate is not NULL 
                            AND UPPER(pos.accountTypeNewName) = 'FINANZKONTO'
                            ORDER BY pos.documentDate`;

            const str = connection.getConnection().query(query).stream();

            str.on('data', (row) => {

                // store account
                const i = accounts.findIndex(x => x.accountNumber == row.accountNumber);
                if (i == -1) {
                    accounts.push({
                        accountNumber: row.accountNumber,
                        accountName: row.accountName,
                        count: 0
                    });
                }

                const rowindex = getNumberOfDays(fromDate, row.documentDate);

                // bank balances starts
                {
                    let startingBalanceIncluded = 0;
                    if (row.StartingBalanceDate) {
                        if (row.StartingBalanceDate > fromDate) {
                            startingBalanceIncluded = getNumberOfDays(fromDate, row.StartingBalanceDate);    
                        } else startingBalanceIncluded = 0;
                        
                    }

                    if (!data[row.accountNumber]) {
                        data[row.accountNumber] = new Array();
                    }

                    row.StartingBalance = row.StartingBalance ? +row.StartingBalance : 0;

                    // index ==0 and value == 0 then starting balance
                    // index != row index and !value then value = previous value 
                    // index == row index then value = balance + previous value

                    for (let index = 0; index <= rowindex; index++) {
                        if (index == 0 && !data[row.accountNumber][index] && index >= startingBalanceIncluded) {
                            data[row.accountNumber][index] = +row.StartingBalance;
                        }
                        if (index != 0 && !data[row.accountNumber][index] && index >= startingBalanceIncluded) {
                            data[row.accountNumber][index] = data[row.accountNumber][index - 1];
                        }
                        if (index == rowindex && index != 0 && index >= startingBalanceIncluded) {
                            data[row.accountNumber][index] = +row.balance + data[row.accountNumber][index - 1];
                        } else if (index == rowindex && index == 0) {
                            data[row.accountNumber][index] += +row.balance;
                        }
                        let thisDate = new Date(fromDate);
                        thisDate.setDate(fromDate.getDate() + index);
                        chartLabels[index] = chartLabels[index] ? chartLabels[index] : thisDate.toLocaleDateString('de-DE', {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                        });
                    }
                }
                // bank balnces ends




            }); // end of on stream return row


            str.on('end', async () => {

                const diffirence = getNumberOfDays(fromDate, toDate);

                let bankBalancesArray = new Array();

                for (let index = 0; index <= diffirence; index++) {
                    if (!bankBalancesArray[index]) {
                        bankBalancesArray[index] = 0;
                    }
                    for (const accounNumber in data) {
                        if (Object.hasOwnProperty.call(data, accounNumber)) {
                            const element = data[accounNumber];
                            if (element && element[index]) {
                                bankBalancesArray[index] += element[index];
                            }
                        }
                    }
                }

                // get total count for accounts
                accounts.forEach(val => {
                    val.count = data[val.accountNumber] ? data[val.accountNumber].length : 0;
                });


                finalResult.accounts = accounts;
                finalResult.bankBalances = bankBalancesArray;
                finalResult.labels = chartLabels.filter(Boolean);
                // cb(finalResult);
                resolve(finalResult);
            });


        } catch (error) {
            reject(error.message);
        }
    });
};


module.exports.creditLinnes = async (orgId, prcId, fromDate, toDate) => {
    /**
     * get credit lines
     * calculate difference
     * foreach day
     *      sum credit lines that day included in it
     */
    // get credit lines
    const creditLines = await CreditLineRepo.getAll(orgId, prcId);

    // calculate difference between fromDAte and toDate
    const diffirence = getNumberOfDays(fromDate, toDate);

    const creditLinesArray = new Array();

    // foreach day
    for (let index = 0; index <= diffirence; index++) {
        if (!creditLinesArray[index]) {
            creditLinesArray[index] = 0;
        }
        // calculate date for this day
        let thisDate = new Date(fromDate);
        thisDate.setDate(fromDate.getDate() + index);
        // get included credit lines
        // if toDate or fromDate is null? should be manipulated
        const creditLinesForThisDay = creditLines
            .filter(val => 
                // between date range
                (thisDate >= new Date(val.creditLineFromDate) && thisDate <= new Date(val.creditLineToDate)) ||
                // start date is null and little than end date
                (!val.creditLineFromDate && thisDate <= new Date(val.creditLineToDate)) ||
                // bigger than end date and start date is null
                (thisDate >= new Date(val.creditLineFromDate) && !val.creditLineToDate));
        creditLinesForThisDay.forEach(element => {
            creditLinesArray[index] += +element.creditLine;
        });
    } // end of foreach day

    return creditLinesArray;

};


module.exports.liquidityAnalysisDetails = async (orgId, prcId, accountNumber, fromDate, toDate) => {
    return new Promise((resolve, reject) => {
        try {

            if (!fromDate) {
                throw new Error('Document Date is null for this procedure!');
            }
            if (!toDate) {
                throw new Error('Document Date is null for this procedure!');
            }
            if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
                throw new Error('Document Date and Starting Balance Date must be Date!');
            }

            let data = new Array();
            let chartLabels = new Array();
            let accountName;

            const finalResult = {
                bankBalances: {
                    data: data,
                    labels: chartLabels
                }
            };

            let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, 
                            pos.StartingBalanceDate,
                            pos.accountTypeNewName, pos.balance, pos.StartingBalance
                        FROM posting_${orgId} pos
                        WHERE
                            pos.procedureId = ${prcId}
                            AND pos.accountNumber = ${accountNumber}
                            AND pos.documentDate is not NULL 
                            AND UPPER(pos.accountTypeNewName) = 'FINANZKONTO'
                            ORDER BY pos.documentDate`;

            const str = connection.getConnection().query(query).stream();

            str.on('data', (row) => {

                if (!accountName) {
                    accountName = row.accountName;
                }

                const rowindex = getNumberOfDays(fromDate, row.documentDate);

                // bank balances starts
                {
                    let startingBalanceIncluded = 0;
                    if (row.StartingBalanceDate) {
                        startingBalanceIncluded = getNumberOfDays(fromDate, row.StartingBalanceDate);
                    }


                    row.StartingBalance = row.StartingBalance ? +row.StartingBalance : 0;

                    // index ==0 and value == 0 then starting balance
                    // index != row index and !value then value = previous value 
                    // index == row index then value = balance + previous value

                    for (let index = 0; index <= rowindex; index++) {
                        if (index == 0 && !data[index] && index >= startingBalanceIncluded) {
                            data[index] = +row.StartingBalance;
                        }
                        if (index != 0 && !data[index] && index >= startingBalanceIncluded) {
                            data[index] = data[index - 1];
                        }
                        if (index == rowindex && index != 0 && index >= startingBalanceIncluded) {
                            data[index] = +row.balance + data[index - 1];
                        } else if (index == rowindex && index == 0) {
                            data[index] += +row.balance;
                        }
                        let thisDate = new Date(fromDate);
                        thisDate.setDate(fromDate.getDate() + index);
                        chartLabels[index] = chartLabels[index] ? chartLabels[index] : thisDate.toLocaleDateString('de-DE', {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                        });
                    }
                }
                // bank balnces ends

            }); // end of on stream return row


            str.on('end', async () => {

                finalResult.bankBalances = data;
                finalResult.labels = chartLabels.filter(Boolean);
                finalResult.accountName = accountName;
                // cb(finalResult);
                resolve(finalResult);
            });


        } catch (error) {
            reject(error.message);
        }
    });
};


module.exports.creditLinnesDetails = async (orgId, prcId, accountNumber, fromDate, toDate) => {
    /**
     * get credit lines
     * calculate difference
     * foreach day
     *      sum credit lines that day included in it
     */
    // get credit lines
    const creditLines = await CreditLineRepo.getByAccountNumber(orgId, prcId, accountNumber);

    // calculate difference
    const diffirence = getNumberOfDays(fromDate, toDate);

    const creditLinesArray = new Array();

    // foreach day
    for (let index = 0; index < diffirence; index++) {
        if (!creditLinesArray[index]) {
            creditLinesArray[index] = 0;
        }
        // calculate date for this day
        let thisDate = new Date(fromDate);
        thisDate.setDate(fromDate.getDate() + index);
        // get included credit lines
        const creditLinesForThisDay = creditLines
            .filter(val => 
                // between date range
                (thisDate >= new Date(val.creditLineFromDate) && thisDate <= new Date(val.creditLineToDate)) ||
                // start date is null and little than end date
                (!val.creditLineFromDate && thisDate <= new Date(val.creditLineToDate)) ||
                // bigger than end date and start date is null
                (thisDate >= new Date(val.creditLineFromDate) && !val.creditLineToDate));
        creditLinesForThisDay.forEach(element => {
            creditLinesArray[index] += +element.creditLine;
        });
    } // end of foreach day

    return creditLinesArray;

};