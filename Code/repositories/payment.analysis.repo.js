const connection = require("../config/mysql.config");
const { QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const Posting = require("../models/posting.model.server");

module.exports.paymentDateRange = async (orgId, prcId) => {
  let query = `SELECT MAX(pos.applicationDate)  maxdate, MIN(pos.documentDate) mindate , MAX(pos.dueDate) maxdue 
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.documentDate is not NULL 
                        AND (pos.applicationDate is null || pos.applicationDate > pos.dueDate)
                        AND (year(pos.documentDate) <> year(pos.applicationDate) OR pos.applicationDate is null OR 
                            (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG')`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });
  return result;
};

module.exports.paymentDateRangeCalc = async (orgId, prcId) => {
  let query = `SELECT MAX(pos.applicationDate)  maxdate, MIN(pos.documentDate) mindate , MAX(pos.dueDate) maxdue 
                    FROM payment_analysis_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });
  return result;
};

monthDiff = (d1, d2) => {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

module.exports.paymentAnalysis = async (orgId, prcId, fromDate, toDate, cb) => {
  if (!fromDate) {
    throw new Error("Document Date is null for this procedure!");
  }
  if (!toDate) {
    throw new Error("Application Date is null for this procedure!");
  }
  if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
    throw new Error("DocumentDate and ApplicationDate must be Date!");
  }
  const diff = monthDiff(fromDate, toDate);
  // if diff = 0 throw an error
  let res = new Array();
  let starterMonth = fromDate.getMonth() + 1;
  let starterYear = fromDate.getFullYear();
  for (let index = 0; index <= diff; index++) {
    const element = {
      monthName: starterMonth,
      yearName: starterYear,
      blue: {
        value: 0,
        accounts: [],
      },
      red: {
        value: 0,
        accounts: [],
      },
      green: {
        value: 0,
        accounts: [],
      },
    };
    res.push(element);
    starterMonth++;
    if (starterMonth > 12) {
      starterMonth = 1;
      starterYear++;
    }
  }

  const finalResult = {
    res: res,
    accounts: new Array(),
  };

  const blueBlackList = new Array();
  const redBlackList = new Array();
  const greenBlackList = new Array();

  let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
                         pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.documentDate is not NULL 
                        AND (pos.applicationDate is null || pos.applicationDate > pos.dueDate) 
                        AND (year(pos.documentDate) <> year(pos.applicationDate) OR pos.applicationDate is null OR 
                        (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG')`;

  const str = connection.getConnection().query(query).stream();

  str.on("data", (row) => {
    res.forEach((element) => {
      // get last day of the month
      var d = new Date(element.yearName, +element.monthName, 0);
      if (
        ((row.documentTypeNewName &&
          row.documentTypeNewName.toString().toUpperCase() == "RECHNUNG") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "RE") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "KR")) &&
        row.documentDate <= d &&
        (row.applicationDate == null || row.applicationDate > d)
      ) {
        element.blue.value += +row.balance;
        // add creditor to the list
        const b = element.blue.accounts.findIndex(
          (x) => x.accountNumber == row.accountNumber
        );
        if (b >= 0) {
          element.blue.accounts[b].value += +row.balance;
        } else {
          element.blue.accounts.push({
            value: +row.balance,
            accountNumber: row.accountNumber,
            accountName: row.accountName,
          });
        }
        const i = finalResult.accounts.findIndex(
          (x) => x.accountNumber == row.accountNumber
        );
        if (i >= 0) {
          const j = blueBlackList.findIndex((x) => x == row.id);
          if (j == -1) {
            if (finalResult.accounts[i].blue) {
              finalResult.accounts[i].blue += +row.balance;
            } else {
              finalResult.accounts[i].blue = +row.balance;
            }
            blueBlackList.push(row.id);
          }
        } else {
          finalResult.accounts.push({
            blue: +row.balance,
            red: 0,
            green: 0,
            accountNumber: row.accountNumber,
            accountName: row.accountName,
          });
          blueBlackList.push(row.id);
        }
      } // end of blue condition
      if (
        ((row.documentTypeNewName &&
          row.documentTypeNewName.toString().toUpperCase() == "RECHNUNG") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "RE") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "KR")) &&
        row.documentDate <= d &&
        (row.applicationDate == null || row.applicationDate > d) &&
        row.dueDate <= d
      ) {
        element.red.value += +row.balance;
        const r = element.red.accounts.findIndex(
          (x) => x.accountNumber == row.accountNumber
        );
        if (r >= 0) {
          element.red.accounts[r].value += +row.balance;
        } else {
          element.red.accounts.push({
            value: +row.balance,
            accountNumber: row.accountNumber,
            accountName: row.accountName,
          });
        }
        const i = finalResult.accounts.findIndex(
          (x) => x.accountNumber == row.accountNumber
        );
        if (i >= 0) {
          const j = redBlackList.findIndex((x) => x == row.id);
          if (j == -1) {
            if (finalResult.accounts[i].red) {
              finalResult.accounts[i].red += +row.balance;
            } else {
              finalResult.accounts[i].red = +row.balance;
            }
            redBlackList.push(row.id);
          }
        } else {
          finalResult.accounts.push({
            blue: 0,
            red: +row.balance,
            green: 0,
            accountNumber: row.accountNumber,
            accountName: row.accountName,
          });
          redBlackList.push(row.id);
        }
      } // end of red condition
      if (
        ((row.documentTypeNewName &&
          row.documentTypeNewName.toString().toUpperCase() == "ZAHLUNG") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "KZ") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "ZP")) &&
        row.documentDate <= d &&
        row.applicationDate == null
      ) {
        element.green.value += +row.balance;
        const g = element.green.accounts.findIndex(
          (x) => x.accountNumber == row.accountNumber
        );
        if (g >= 0) {
          element.green.accounts[g].value += +row.balance;
        } else {
          element.green.accounts.push({
            value: +row.balance,
            accountNumber: row.accountNumber,
            accountName: row.accountName,
          });
        }
        const i = finalResult.accounts.findIndex(
          (x) => x.accountNumber == row.accountNumber
        );
        if (i >= 0) {
          const j = greenBlackList.findIndex((x) => x == row.id);
          if (j == -1) {
            if (finalResult.accounts[i].green) {
              finalResult.accounts[i].green += +row.balance;
            } else {
              finalResult.accounts[i].green = +row.balance;
            }
            greenBlackList.push(row.id);
          }
        } else {
          finalResult.accounts.push({
            blue: 0,
            red: 0,
            green: +row.balance,
            accountNumber: row.accountNumber,
            accountName: row.accountName,
          });
          greenBlackList.push(row.id);
        }
      } // end of green condition
    }); // end of foreach
  }); // end of fetching row event

  str.on("end", async () => {
    cb(finalResult);
  });
};


module.exports.paymentAnalysisCalc = async (orgId, prcId, fromDate, toDate, cb) => {
  if (!fromDate) {
    throw new Error("Document Date is null for this procedure!");
  }
  if (!toDate) {
    throw new Error("Application Date is null for this procedure!");
  }
  if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
    throw new Error("DocumentDate and ApplicationDate must be Date!");
  }
  const diff = monthDiff(fromDate, toDate);
  // if diff = 0 throw an error
  // init res
  let res = new Array();
  let starterMonth = fromDate.getMonth() + 1;
  let starterYear = fromDate.getFullYear();
  // add element for each included month
  for (let index = 0; index <= diff; index++) {
    const element = {
      monthName: starterMonth,
      yearName: starterYear,
      blue: { value: 0, accounts: [], },
      red: { value: 0, accounts: [], },
      green: { value: 0, accounts: [], },
    };
    res.push(element);
    starterMonth++;
    if (starterMonth > 12) {
      starterMonth = 1;
      starterYear++;
    }
  }
  // final result contains: 
  // accounts (for the table) which contains includedd account and for each of them the sum of blue, green and red
  // the res (for chart) which include the sum of blue, green and red for each month 
  const finalResult = { res: res, accounts: new Array(), };

  const blueBlackList = new Array();
  const redBlackList = new Array();
  const greenBlackList = new Array();

  let query = `SELECT *
                    FROM payment_analysis_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}`;

  const str = connection.getConnection().query(query).stream();

  str.on("data", (row) => {
    // iterate for each month
    res.forEach((element) => {
      // get last day of the month
      var d = new Date(element.yearName, +element.monthName, 0);
      if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == "RECHNUNG") ||
        (row.documentType && row.documentType.toString().toUpperCase() == "RE") ||
        (row.documentType && row.documentType.toString().toUpperCase() == "KR")) &&
        row.documentDate?.getTime() <= d?.getTime() && (row.applicationDate == null || row.applicationDate?.getTime() > d?.getTime())) {
        element.blue.value += +row.balance;
        // add creditor to the list
        // check if the account added to the blue bar in chart for this month
        const b = element.blue.accounts.findIndex((x) => x.accountNumber?.trim() == row.accountNumber?.trim());
        // if already account added, then sum the balance
        if (b >= 0) {
          element.blue.accounts[b].value += +row.balance;
          // else add the account
        } else {
          element.blue.accounts.push({
            value: +row.balance,
            accountNumber: row.accountNumber?.trim(),
            accountName: row.accountName,
          });
        }
        // check if the account added to the accounts array for the table
        const i = finalResult.accounts.findIndex((x) => x.accountNumber?.trim() == row.accountNumber?.trim());
        if (i >= 0) {
          // the row must be added once
          const j = blueBlackList.findIndex((x) => x == row.id);
          if (j == -1) {
            if (finalResult.accounts[i].blue) {
              finalResult.accounts[i].blue += +row.balance;
            } else {
              finalResult.accounts[i].blue = +row.balance;
            }
            blueBlackList.push(row.id);
          }
        } else {
          finalResult.accounts.push({
            blue: +row.balance,
            red: 0,
            green: 0,
            accountNumber: row.accountNumber?.trim(),
            accountName: row.accountName,
          });
          blueBlackList.push(row.id);
        }
      } // end of blue condition
      if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == "RECHNUNG") ||
        (row.documentType && row.documentType.toString().toUpperCase() == "RE") ||
        (row.documentType && row.documentType.toString().toUpperCase() == "KR")) &&
        row.documentDate?.getTime() <= d?.getTime() && (row.applicationDate == null || row.applicationDate?.getTime() > d?.getTime()) &&
        row.dueDate?.getTime() <= d?.getTime()) {
        element.red.value += +row.balance;
        const r = element.red.accounts.findIndex((x) => x.accountNumber?.trim() == row.accountNumber?.trim());
        if (r >= 0) {
          element.red.accounts[r].value += +row.balance;
        } else {
          element.red.accounts.push({
            value: +row.balance,
            accountNumber: row.accountNumber?.trim(),
            accountName: row.accountName,
          });
        }
        const i = finalResult.accounts.findIndex((x) => x.accountNumber?.trim() == row.accountNumber?.trim());
        if (i >= 0) {
          const j = redBlackList.findIndex((x) => x == row.id);
          if (j == -1) {
            if (finalResult.accounts[i].red) {
              finalResult.accounts[i].red += +row.balance;
            } else {
              finalResult.accounts[i].red = +row.balance;
            }
            redBlackList.push(row.id);
          }
        } else {
          finalResult.accounts.push({
            blue: 0,
            red: +row.balance,
            green: 0,
            accountNumber: row.accountNumber?.trim(),
            accountName: row.accountName,
          });
          redBlackList.push(row.id);
        }
      } // end of red condition
      if (((row.documentTypeNewName && row.documentTypeNewName.toString().toUpperCase() == "ZAHLUNG") ||
        (row.documentType && row.documentType.toString().toUpperCase() == "KZ") ||
        (row.documentType && row.documentType.toString().toUpperCase() == "ZP")) &&
        row.documentDate?.getTime() <= d?.getTime() && row.applicationDate == null) {
        element.green.value += +row.balance;
        const g = element.green.accounts.findIndex((x) => x.accountNumber?.trim() == row.accountNumber?.trim());
        if (g >= 0) {
          element.green.accounts[g].value += +row.balance;
        } else {
          element.green.accounts.push({
            value: +row.balance,
            accountNumber: row.accountNumber?.trim(),
            accountName: row.accountName,
          });
        }
        const i = finalResult.accounts.findIndex((x) => x.accountNumber?.trim() == row.accountNumber?.trim());
        if (i >= 0) {
          const j = greenBlackList.findIndex((x) => x == row.id);
          if (j == -1) {
            if (finalResult.accounts[i].green) {
              finalResult.accounts[i].green += +row.balance;
            } else {
              finalResult.accounts[i].green = +row.balance;
            }
            greenBlackList.push(row.id);
          }
        } else {
          finalResult.accounts.push({
            blue: 0,
            red: 0,
            green: +row.balance,
            accountNumber: row.accountNumber?.trim(),
            accountName: row.accountName,
          });
          greenBlackList.push(row.id);
        }
      } // end of green condition
    }); // end of foreach month


  }); // end of fetching row event

  str.on("end", async () => {
    cb(finalResult);
  });
};



module.exports.paymentAnalysisDetails = async (orgId, prcId, fromDate, toDate, accountNumber, cb) => {
  if (!fromDate) {
    throw new Error("Document Date is null for this procedure!");
  }
  if (!toDate) {
    throw new Error("Application Date is null for this procedure!");
  }
  if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
    throw new Error("DocumentDate and ApplicationDate must be Date!");
  }
  const diff = monthDiff(fromDate, toDate);
  // if diff = 0 throw an error
  let result = [];
  let finalResult = { data: result, blue: [], red: [], green: [], };
  let starterMonth = fromDate.getMonth() + 1;
  let starterYear = fromDate.getFullYear();
  for (let index = 0; index <= diff; index++) {
    const element = {
      monthName: starterMonth,
      yearName: starterYear,
      blue: { value: 0, },
      red: { value: 0, },
      green: { value: 0, },
    };
    result.push(element);
    starterMonth++;
    if (starterMonth > 12) {
      starterMonth = 1;
      starterYear++;
    }
  }

  let query = `SELECT pos.id, pos.procedureId, pos.accountNumber, pos.accountName, pos.paymentRelevant,
                        pos.paymentRelevantComment, pos.accountType, pos.documentType, pos.balance, pos.contraAccountNumber,
                        pos.contraAccountName, pos.documentTypeNewName, pos.documentNumber, pos.documentDate, pos.recordNumber,
                        pos.ledgerId, pos.executionDate, pos.dueDate, pos.applicationDate 
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber = ${accountNumber} 
                        AND pos.documentDate is not NULL 
                        AND (pos.applicationDate is null || pos.applicationDate > pos.dueDate)
                        AND (year(pos.documentDate) <> year(pos.applicationDate) OR  pos.applicationDate is null OR 
                        (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG')`;

  const str = connection.getConnection().query(query).stream();

  str.on("data", (row) => {
    result.forEach((element) => {
      // get last day of the month
      var d = new Date(element.yearName, +element.monthName, 0);
      // BLUES................
      // and it's late: app date > due date
      // month we increment already!!!!!!!!!!!!!!!!!!
      if (
        ((row.documentTypeNewName &&
          row.documentTypeNewName.toString().toUpperCase() == "RECHNUNG") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "RE") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "KR")) &&
        row.documentDate?.getTime() <= d?.getTime() &&
        (row.applicationDate == null || row.applicationDate?.getTime() > d?.getTime())
      ) {
        element.blue.value += +row.balance;
        // add row to the blue list
        const i = finalResult.blue.findIndex((x) => x.id == row.id);
        if (i == -1) {
          finalResult.blue.push(row);
        }
        // RED......................
      }
      if (
        ((row.documentTypeNewName &&
          row.documentTypeNewName.toString().toUpperCase() == "RECHNUNG") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "RE") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "KR")) &&
        row.documentDate?.getTime() <= d?.getTime() &&
        (row.applicationDate == null || row.applicationDate?.getTime() > d?.getTime()) &&
        row.dueDate?.getTime() <= d?.getTime()
      ) {
        element.red.value += +row.balance;
        // add row to the red list
        const i = finalResult.red.findIndex((x) => x.id == row.id);
        if (i == -1) {
          finalResult.red.push(row);
        }
        // finalResult.red.push(row);
        // GREEN.......................
      }
      if (
        ((row.documentTypeNewName &&
          row.documentTypeNewName.toString().toUpperCase() == "ZAHLUNG") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "KZ") ||
          (row.documentType &&
            row.documentType.toString().toUpperCase() == "ZP")) &&
        row.documentDate?.getTime() <= d?.getTime() &&
        row.applicationDate == null
      ) {
        element.green.value += +row.balance;
        // add row to the green list
        const i = finalResult.green.findIndex((x) => x.id == row.id);
        if (i == -1) {
          finalResult.green.push(row);
        }
        // finalResult.green.push(row);
      }
    });
  });

  str.on("end", async () => {
    cb(finalResult);
  });
};

/**
 * Bulk update of array of posting records
 * @param {number} orgId
 * @param {Posting[]} records
 */
module.exports.paymentBulkUpdate = async (orgId, records) => {
  const postings = await Posting.getPosting("posting_" + orgId).bulkCreate(
    records,
    {
      updateOnDuplicate: ["paymentRelevant", "paymentRelevantComment"],
    }
  );
  return postings;
};

module.exports.paymentJustRelevant = async (orgId, prcId, accountNumber) => {
  return await Posting.getPosting("posting_" + orgId).findAll({
    where: {
      paymentRelevant: true,
      accountNumber: accountNumber,
      ProcedureId: prcId,
    },
    attributes: [
      "id",
      "procedureId",
      "accountNumber",
      "accountName",
      "paymentRelevant",
      "paymentRelevantComment",
      "accountType",
      "documentType",
      "balance",
      "contraAccountNumber",
      "contraAccountName",
      "documentTypeNewName",
      "documentNumber",
      "documentDate",
      "recordNumber",
      "ledgerId",
      "executionDate",
      "dueDate",
    ],
  });
};
