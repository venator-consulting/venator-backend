const connection = require("../config/mysql.config");
const { QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const CreditLineRepo = require("./creditLines.repo.server");
const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");
const errors = require('../models/enums/errors');

module.exports.liquiditytDateRange = async (orgId, prcId) => {
  let query = `SELECT MIN(pos.StartingBalanceDate) mindate, MAX(pos.documentDate) maxdate, MIN(pos.documentDate) mindocdate 
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId
                        AND pos.accountNumber is not NULL
                        AND pos.documentDate is not NULL 
                        AND UPPER(pos.accountTypeNewName) = 'FINANZKONTO'`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });
  return result;
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

  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  // Calculating the time difference between two dates
  const diffInTime = end.getTime() - start.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.floor(diffInTime / oneDay);

  return diffInDays;
}

module.exports.liquidityAnalysis = async (orgId, prcId, fromDate, toDate, baseFromDate) => {
  return new Promise((resolve, reject) => {
    if (!fromDate || !toDate) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
    }
    if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
      fromDate = new Date(fromDate);
      toDate = new Date(toDate);
      // throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
    }

    // to be sure it's a date not a date-string
    if (!(baseFromDate instanceof Date)) baseFromDate = new Date(baseFromDate);

    // if theere is a date filter then this value will be bigger than 0
    // and we must slice the array result from the bigening to the fromdate filter
    // if there is no date filter then this will be 0 and will not slice any thing
    const filteredDataStarterIndex = getNumberOfDays(baseFromDate, fromDate);

    let data = {};
    let chartLabels = new Array();

    const finalResult = {
      bankBalances: {
        data: data,
        labels: chartLabels,
      },
    };

    let accounts = new Array();

    // always get from basefrom date then we will slice the result
    // account type is FINANZKONTO for banks account only
    // documentDate >= StartingBalanceDate because if the admin set an error starting balance date
    // we take care of it, because it's impossible to be a transaction with a bank account befor establishment the account 
    let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, 
                            pos.StartingBalanceDate,
                            pos.accountTypeNewName, pos.balance, pos.StartingBalance
                        FROM posting_${orgId} pos
                        WHERE
                            pos.procedureId = ${prcId}
                            AND pos.accountNumber is not NULL
                            AND pos.documentDate is not NULL
                            AND pos.documentDate >= '${baseFromDate.toISOString().split('T')[0]}' 
                            AND pos.documentDate <= '${toDate.toISOString().split('T')[0]}'
                            AND UPPER(pos.accountTypeNewName) = 'FINANZKONTO'
                            AND pos.documentDate >= pos.StartingBalanceDate
                            ORDER BY pos.documentDate`;

    const str = connection.getConnection().query(query).stream();

    str.on("data", (row) => {
      // store account to get a list of accounts
      const i = accounts.findIndex((x) => x.accountNumber == row.accountNumber);
      if (i == -1) {
        accounts.push({
          accountNumber: row.accountNumber,
          accountName: row.accountName,
          count: 0,
        });
      }

      // each index in the result array is a day in the date range
      // so the first day will be at index 0
      // the day 100 after baseFromDate will be at index 100
      const rowindex = getNumberOfDays(baseFromDate, row.documentDate);

      // bank balances starts
      {
        let startingBalanceIncluded = 0;
        if (row.StartingBalanceDate) {
          if (row.StartingBalanceDate?.getTime() >= baseFromDate?.getTime()) {
            startingBalanceIncluded = getNumberOfDays(baseFromDate, row.StartingBalanceDate);
          }
        }

        if (!data[row.accountNumber]) {
          data[row.accountNumber] = new Array();
        }

        row.StartingBalance = row.StartingBalance ? +row.StartingBalance : 0;

        /**
         * (no transactions on this account for this day, so the balance will still the same of the previous day)
         * index < row index and !value then value = previous value 
         */

        /**
         * (the balance for today is the sum of all transactions for today + the balance from previous day + starting balance)
         */
        // index == row index then value = balance + previous value

        /**
         * index == startingBalanceIncluded then value = starting balance 
         * only if not have a value, because starting balance must be add once
         * so if there are multiple transactions for the account today we will add
         *  starting balance just for the first one
         */


        // index < startingBalanceIncluded not a real case!!! to make a transaction
        //  with a bank without starting balance (Establishing an account)
        // but (((if))) it appears set it to zero

        // the next is ERROR it will be set from the previous iteration// 
        //index < row index and value then value = value + previous value

        for (let index = 0; index <= rowindex; index++) {
          // we say before this case musn't appear but leave it here
          // and 0 to ensure it's not null noe undefined
          if (!data[row.accountNumber][index] && index < startingBalanceIncluded) {
            data[row.accountNumber][index] = 0;
          }
          // adding starting balance once
          // just for the first day
          //what we established an account but didn't make any transactions at the first day?!! 
          // the transaction date is rowindex and here we not comparing it
          // so the balance in all the days before the first transaction we be equal startingBalance
          // the first day we sit it here
          // the other days will get the previous day balance which in this case is startingBalance 
          if (!data[row.accountNumber][index] && index == startingBalanceIncluded) {
            data[row.accountNumber][index] = +row.StartingBalance;
          }
          if (index == rowindex && index > 0 && index > startingBalanceIncluded) {
            // if it's not the first transaction for today just add the balance to the total
            if (data[row.accountNumber][index]) data[row.accountNumber][index] += +row.balance;
            // if it the first transaction for today then add the transaction balance to the previous day balance 
            else data[row.accountNumber][index] = +row.balance + data[row.accountNumber][index - 1];
          } else if (index == rowindex && index == startingBalanceIncluded) {
            // just add the balance because we added the starting balance before
            data[row.accountNumber][index] += +row.balance;
          } else if (index > 0 && !data[row.accountNumber][index] && index >= startingBalanceIncluded) {
            // for days after establishing the account and without transactions
            // just set the previous day balance
            data[row.accountNumber][index] = data[row.accountNumber][index - 1];
          }

          let thisDate = new Date(baseFromDate);
          // this day is the baseFromDate + this index (number of days after baseFromDate)
          thisDate.setDate(baseFromDate.getDate() + index);
          // format the label as DE localization
          chartLabels[index] = chartLabels[index]
            ? chartLabels[index]
            : thisDate.toLocaleDateString("de-DE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
        }
      }
      // bank balnces ends
    }); // end of on stream return row

    str.on("end", async () => {
      const diffirence = getNumberOfDays(baseFromDate, toDate);

      // the final result
      // contains the sum of bank balances of all accounts
      let bankBalancesArray = new Array();

      for (let index = 0; index <= diffirence; index++) {
        // to ensure it's not null nor undefined
        if (!bankBalancesArray[index]) {
          bankBalancesArray[index] = 0;
        }
        for (const accounNumber in data) {
          if (Object.hasOwnProperty.call(data, accounNumber)) {
            const element = data[accounNumber];
            if (element && element[index]) {
              bankBalancesArray[index] += element[index];
            } else {
              bankBalancesArray[index] +=
                index > 0 && element[index - 1] ? element[index - 1] : 0;
              element[index] =
                index > 0 && element[index - 1] ? element[index - 1] : 0;
            }
          }
        }
      }

      // get total count for accounts
      accounts.forEach((val) => {
        val.count = data[val.accountNumber]
          ? data[val.accountNumber].length
          : 0;
      });
      for (const accounNumber in data) {
        data[accounNumber]?.splice(0, filteredDataStarterIndex);;
      }

      // slice the arrays from the filteredDataStarterIndex to the end
      bankBalancesArray.splice(0, filteredDataStarterIndex);
      chartLabels.splice(0, filteredDataStarterIndex);
      finalResult.accounts = accounts;
      finalResult.bankBalances = bankBalancesArray;
      finalResult.labels = chartLabels.filter(Boolean);
      finalResult.data = data;
      // cb(finalResult);
      resolve(finalResult);
    });
  });
};

module.exports.creditLinnes = async (orgId, prcId, fromDate, toDate) => {
  /**
   * get credit lines
   * calculate difference
   * foreach day
   *      sum credit lines that day included in it
   */
  if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
    fromDate = new Date(fromDate);
    toDate = new Date(toDate);
    // throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  }

  // get credit lines
  const creditLines = await CreditLineRepo.getAll(orgId, prcId);

  // calculate difference between fromDAte and toDate
  const diffirence = getNumberOfDays(fromDate, toDate);

  const creditLinesArray = new Array();
  let accounts = {};
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
    const creditLinesForThisDay = creditLines.filter(
      (val) =>
        // between date range
        (thisDate >= new Date(val.creditLineFromDate) &&
          thisDate <= new Date(val.creditLineToDate)) ||
        // start date is null and little than end date
        (!val.creditLineFromDate &&
          thisDate <= new Date(val.creditLineToDate)) ||
        // bigger than end date and start date is null
        (thisDate >= new Date(val.creditLineFromDate) && !val.creditLineToDate)
    );
    creditLinesForThisDay.forEach((element) => {
      creditLinesArray[index] += +element.creditLine;
      if (!accounts[element.accountNumber]) {
        accounts[element.accountNumber] = new Array();
      }
      accounts[element.accountNumber][index] = !accounts[element.accountNumber][
        index
      ]
        ? +element.creditLine
        : accounts[element.accountNumber][index] + +element.creditLine;
    });
  } // end of foreach day

  return { creditLines: creditLinesArray, accounts: accounts };
};

module.exports.liquidityAnalysisDetails = async (
  orgId,
  prcId,
  accountNumber,
  fromDate,
  toDate,
  baseFromDate
) => {
  return new Promise((resolve, reject) => {
    if (!fromDate || !toDate) {
      throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
    }
    if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
      fromDate = new Date(fromDate);
      toDate = new Date(toDate);
      // throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
    }

    if (!(baseFromDate instanceof Date)) baseFromDate = new Date(baseFromDate);

    // if theere is a filter then this value will be bigger than 0
    // and we must slice the array result from it to the toDate
    const filteredDataStarterIndex = getNumberOfDays(baseFromDate, fromDate);

    let data = new Array();
    let chartLabels = new Array();
    let accountName;

    const finalResult = {
      bankBalances: {
        data: data,
        labels: chartLabels,
      },
    };

    const accountRecords = [];

    let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, 
                            pos.StartingBalanceDate, pos.textPosting, pos.textHeader, pos.reference, pos.assignment,  
                            pos.accountTypeNewName, pos.balance, pos.StartingBalance
                        FROM posting_${orgId} pos
                        WHERE
                            pos.procedureId = ${prcId}
                            AND pos.accountNumber = ${accountNumber}
                            AND pos.documentDate is not NULL 
                            AND pos.documentDate >= '${baseFromDate.toISOString().split('T')[0]}' 
                            AND pos.documentDate <= '${toDate.toISOString().split('T')[0]}'
                            AND UPPER(pos.accountTypeNewName) = 'FINANZKONTO'
                            ORDER BY pos.documentDate`;

    const str = connection.getConnection().query(query).stream();

    str.on("data", (row) => {
      if (!accountName) {
        accountName = row.accountName;
      }
      if (row.documentDate?.getTime() > fromDate?.getTime())
        accountRecords.push(row);

      const rowindex = getNumberOfDays(baseFromDate, row.documentDate);

      // bank balances starts
      {
        let startingBalanceIncluded = 0;
        if (row.StartingBalanceDate) {
          startingBalanceIncluded = getNumberOfDays(
            baseFromDate,
            row.StartingBalanceDate
          );
        }

        row.StartingBalance = row.StartingBalance ? +row.StartingBalance : 0;

        // index ==0 and value == 0 then starting balance
        // index != row index and !value then value = previous value
        // index == row index then value = balance + previous value

        for (let index = 0; index <= rowindex; index++) {
          if (!data[index] && index < startingBalanceIncluded) {
            data[index] = 0;
          }
          if (!data[index] && index == startingBalanceIncluded) {
            data[index] = +row.StartingBalance;
          }
          if (
            index == rowindex &&
            index > 0 &&
            index > startingBalanceIncluded
          ) {
            if (data[index]) {
              data[index] += +row.balance;
            } else data[index] = +row.balance + data[index - 1];
          } else if (index == rowindex && index == startingBalanceIncluded) {
            data[index] += +row.balance;
          } else if (
            index > 0 &&
            !data[index] &&
            index >= startingBalanceIncluded
          ) {
            data[index] = data[index - 1];
          }
          let thisDate = new Date(baseFromDate);
          thisDate.setDate(baseFromDate.getDate() + index);
          chartLabels[index] = chartLabels[index]
            ? chartLabels[index]
            : thisDate.toLocaleDateString("de-DE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
        }
      }
      // bank balnces ends
    }); // end of on stream return row

    str.on("end", async () => {
      const diffirence = getNumberOfDays(baseFromDate, toDate);

      for (let index = data.length; index <= diffirence; index++) {
        data[index] = index > 0 && data[index - 1] ? data[index - 1] : 0;
      }

      chartLabels.splice(0, filteredDataStarterIndex);
      data.splice(0, filteredDataStarterIndex);

      finalResult.bankBalances = data;
      finalResult.labels = chartLabels.filter(Boolean);
      finalResult.accountName = accountName;
      finalResult.accountRecords = accountRecords;
      // cb(finalResult);
      resolve(finalResult);
    });
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
  const creditLines = await CreditLineRepo.getByAccountNumber(
    orgId,
    prcId,
    accountNumber
  );

  if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
    fromDate = new Date(fromDate);
    toDate = new Date(toDate);
    // throw new Exception(httpStatus.BAD_REQUEST, errors.no_document_date);
  }

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
    const creditLinesForThisDay = creditLines.filter(
      (val) =>
        // between date range
        (thisDate >= new Date(val.creditLineFromDate) &&
          thisDate <= new Date(val.creditLineToDate)) ||
        // start date is null and little than end date
        (!val.creditLineFromDate &&
          thisDate <= new Date(val.creditLineToDate)) ||
        // bigger than end date and start date is null
        (thisDate >= new Date(val.creditLineFromDate) && !val.creditLineToDate)
    );
    creditLinesForThisDay.forEach((element) => {
      creditLinesArray[index] += +element.creditLine;
    });
  } // end of foreach day

  return creditLinesArray;
};

module.exports.selectedDate = async (
  orgId,
  prcId,
  accountNumber,
  selectedDate
) => {
  let query = `SELECT * FROM posting_${orgId} p
                  WHERE p.procedureId = :procedureId
                  AND p.accountNumber = :accountNumber
                  AND date(p.documentDate) = date(:selectedDate) 
                  AND p.documentDate >= p.StartingBalanceDate`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
      accountNumber: accountNumber,
      selectedDate: selectedDate,
    },
    type: QueryTypes.SELECT,
  });
  return result;
};
