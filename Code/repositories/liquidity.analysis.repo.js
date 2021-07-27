const connection = require('../config/mysql.config');
const {
    QueryTypes
} = require("sequelize");
const Sequelize = require('../config/sequelize.config');
const sequelize = Sequelize.getSequelize();
const CreditLineRepo = require('./creditLines.repo.server');


module.exports.liquiditytDateRange = async (orgId, prcId) => {
    try {
        let query = `SELECT MIN(pos.StartingBalance) mindate, MAX(pos.documentDate) maxdate, MIN(pos.documentDate) mindocdate 
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId
                        AND UPPER(pos.accountType) = 'K'
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



module.exports.liquidityAnalysis = async (orgId, prcId, fromDate, toDate, cb, cb1) => {
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
    
                const rowindex = getNumberOfDays(fromDate, row.documentDate);
    
                // bank balances starts
                {
                    let startingBalanceIncluded = 0;
                    if (row.StartingBalanceDate) {
                        startingBalanceIncluded = getNumberOfDays(fromDate, row.StartingBalanceDate);
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
                        let thisDate = new Date();
                        thisDate.setDate(fromDate.getDate() + index);
                        chartLabels[index] = chartLabels[index] ? chartLabels[index] : thisDate.toLocaleDateString('de-DE');
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
    
    
                finalResult.accounts = data;
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

    // calculate difference
    const diffirence = getNumberOfDays(fromDate, toDate);

    const creditLinesArray = new Array();

    // foreach day
    for (let index = 0; index < diffirence; index++) {
        if (! creditLinesArray[index]) {
            creditLinesArray[index] = 0;
        }
        // calculate date for this day
        let thisDate = new Date();
        thisDate.setDate(fromDate.getDate() + index);
        // get included credit lines
        const creditLinesForThisDay = creditLines
                                .filter(val => thisDate >= new Date(val.creditLineFromDate) && thisDate <= new Date(val.creditLineToDate));
        creditLinesForThisDay.forEach(element => {
            creditLinesArray[index] += +element.creditLine;
        });
    } // end of foreach day

    return creditLinesArray;

};