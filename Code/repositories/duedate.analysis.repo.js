const connection = require("../config/mysql.config").getConnection();
const { QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const errors = require('../models/enums/errors');

module.exports.dueDateRange = async (orgId, prcId) => {
  let query = `SELECT MIN(pos.dueDate) mindate , MAX(pos.dueDate) maxdate,
                         MIN(pos.documentDate) mindocdate , MAX(pos.applicationDate) maxappdate
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.dueDate is not NULL 
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG')`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });
  return result;
};

module.exports.dueDateRangeCalc = async (orgId, prcId) => {
  let query = `SELECT MIN(pos.dueDate) mindate , MAX(pos.dueDate) maxdate,
                         MIN(pos.documentDate) mindocdate , MAX(pos.applicationDate) maxappdate
                    FROM due_date_analysis_${orgId} pos
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
};

module.exports.dueDateAnalysis = async (orgId, prcId, fromDate,
  toDate, mindocdate, maxappdate, cb) => {
  if (!fromDate) {
    throw new Error("Due Date is null for this procedure!");
  }
  if (!toDate) {
    throw new Error("Due Date is null for this procedure!");
  }
  if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
    throw new Error("Due Date and ApplicationDate must be Date!");
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
      notPaid: 0,
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
  let recordsCountPerDay = new Array();
  let recordsDelay = new Array();

  const finalResult = {
    dueDateReference: {
      data: diffData,
      labels: firstChartLabels,
      recordsDelay: recordsDelay,
    },
    docDateReference: res,
  };

  let dueDateRefAccounts = new Array();

  let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
                         pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.dueDate is not NULL 
                        AND pos.applicationDate is not NULL 
                        AND (year(pos.documentDate) <> year(pos.applicationDate) OR pos.applicationDate is null OR 
                            (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG')
                        ORDER BY pos.dueDate`;

  const str = connection.query(query).stream();

  str.on("data", (row) => {
    // too early or too late records
    if (row.applicationDate) {
      const rowDiff = getNumberOfDays(row.dueDate, row.applicationDate);
      const rowindex = getNumberOfDays(fromDate, row.applicationDate);
      recordsCountPerDay[rowindex] = recordsCountPerDay[rowindex] ? recordsCountPerDay[rowindex] + 1 : 1;
      diffData[rowindex] = diffData[rowindex] ? diffData[rowindex] + rowDiff : rowDiff;
      recordsDelay.push({
        x: rowindex,
        y: rowDiff
      });
      firstChartLabels[rowindex] = firstChartLabels[rowindex]
        ? firstChartLabels[rowindex]
        : row.applicationDate.toLocaleDateString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

      const i = dueDateRefAccounts.findIndex((x) => x.accountNumber == row.accountNumber);
      if (i == -1) {
        if (rowDiff > 0) {
          dueDateRefAccounts.push({
            accountNumber: row.accountNumber,
            accountName: row.accountName,
            delayPos: rowDiff,
            delayNeg: 0,
            count: 1,
            posCount: 1,
            negCount: 0
          });
        } else {
          dueDateRefAccounts.push({
            accountNumber: row.accountNumber,
            accountName: row.accountName,
            delayPos: 0,
            delayNeg: rowDiff,
            count: 1,
            posCount: 0,
            negCount: 1
          });
        }
      } else {
        dueDateRefAccounts[i].count++;
        if (rowDiff > 0) {
          dueDateRefAccounts[i].posCount++;
          dueDateRefAccounts[i].delayPos += +rowDiff;
        } else {
          dueDateRefAccounts[i].negCount++;
          dueDateRefAccounts[i].delayNeg += +rowDiff;
        }
      }

      for (const element of res) {
        if (
          row.documentDate.getMonth() == element.monthName - 1 &&
          row.documentDate.getFullYear() == element.yearName
        ) {
          element.positive += rowDiff > 0 ? rowDiff : 0;
          element.negative += rowDiff < 0 ? rowDiff : 0;
          continue;
        }
      }
      // Not paid at all
    } else {
      for (const element of res) {
        if (
          row.documentDate.getMonth() == element.monthName - 1 &&
          row.documentDate.getFullYear() == element.yearName
        ) {
          element.notPaid += +row.balance;
          continue;
        }
      }
    }
  }); // end of on data

  str.on("end", async () => {
    for (let index = 0; index < diffData.length; index++) {
      if (diffData[index] && recordsCountPerDay[index]) diffData[index] = Math.ceil(diffData[index] / recordsCountPerDay[index]);
    }
    dueDateRefAccounts = dueDateRefAccounts.map(account => {
      return {
        accountNumber: account.accountNumber,
        accountName: account.accountName,
        delayPosTotal: account.delayPos,
        delayNegTotal: account.delayNeg,
        delayPos: account.posCount ? Math.ceil(account.delayPos / account.posCount) : 0,
        delayNeg: account.negCount ? Math.ceil(account.delayNeg / account.negCount) : 0,
        count: account.count,
        posCount: account.posCount,
        negCount: account.negCount
      };
    });
    finalResult.dueDateReference.data = diffData.filter(Boolean);
    finalResult.dueDateReference.labels = firstChartLabels.filter(Boolean);
    finalResult.dueDateReference.recordsDelay = recordsDelay.filter(Boolean);
    finalResult.docDateReference = res;
    finalResult.dueDateRefAccounts = dueDateRefAccounts;
    cb(finalResult);
  });
};

module.exports.dueDateAnalysisCalc = async (orgId, prcId, fromDate,
  toDate, mindocdate, maxappdate, cb) => {
  if (!fromDate) {
    throw new Error("Due Date is null for this procedure!");
  }
  if (!toDate) {
    throw new Error("Due Date is null for this procedure!");
  }
  if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
    throw new Error("Due Date and ApplicationDate must be Date!");
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
      notPaid: 0,
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
  let recordsCountPerDay = new Array();
  let recordsDelay = new Array();

  const finalResult = {
    dueDateReference: {
      data: diffData,
      labels: firstChartLabels,
      recordsDelay: recordsDelay,
    },
    docDateReference: res,
  };

  let dueDateRefAccounts = new Array();

  let query = `SELECT *
                    FROM due_date_analysis_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        ORDER BY pos.dueDate`;

  const str = connection.query(query).stream();

  str.on("data", (row) => {
    // too early or too late records
    if (row.applicationDate) {
      const rowDiff = getNumberOfDays(row.dueDate, row.applicationDate);
      const rowindex = getNumberOfDays(fromDate, row.applicationDate);
      recordsCountPerDay[rowindex] = recordsCountPerDay[rowindex] ? recordsCountPerDay[rowindex] + 1 : 1;
      diffData[rowindex] = diffData[rowindex] ? diffData[rowindex] + rowDiff : rowDiff;
      recordsDelay.push({
        x: rowindex,
        y: rowDiff
      });
      firstChartLabels[rowindex] = firstChartLabels[rowindex]
        ? firstChartLabels[rowindex]
        : row.applicationDate.toLocaleDateString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

      const i = dueDateRefAccounts.findIndex(
        (x) => x.accountNumber == row.accountNumber
      );
      if (i == -1) {
        if (rowDiff > 0) {
          dueDateRefAccounts.push({
            accountNumber: row.accountNumber,
            accountName: row.accountName,
            delayPos: rowDiff,
            delayNeg: 0,
            count: 1,
            posCount: 1,
            negCount: 0
          });
        } else {
          dueDateRefAccounts.push({
            accountNumber: row.accountNumber,
            accountName: row.accountName,
            delayPos: 0,
            delayNeg: rowDiff,
            count: 1,
            posCount: 0,
            negCount: 1
          });
        }
      } else {
        dueDateRefAccounts[i].count++;
        if (rowDiff > 0) {
          dueDateRefAccounts[i].posCount++;
          dueDateRefAccounts[i].delayPos += +rowDiff;
        } else {
          dueDateRefAccounts[i].negCount++;
          dueDateRefAccounts[i].delayNeg += +rowDiff;
        }
      }

      for (const element of res) {
        if (
          row.documentDate.getMonth() == element.monthName - 1 &&
          row.documentDate.getFullYear() == element.yearName
        ) {
          element.positive += rowDiff > 0 ? rowDiff : 0;
          element.negative += rowDiff < 0 ? rowDiff : 0;
          continue;
        }
      }
      // Not paid at all
    } else {
      for (const element of res) {
        if (
          row.documentDate.getMonth() == element.monthName - 1 &&
          row.documentDate.getFullYear() == element.yearName
        ) {
          element.notPaid += +row.balance;
          continue;
        }
      }
    }
  }); // end of on data

  str.on("end", async () => {
    for (let index = 0; index < diffData.length; index++) {
      if (diffData[index] && recordsCountPerDay[index]) diffData[index] = Math.ceil(diffData[index] / recordsCountPerDay[index]);
    }
    dueDateRefAccounts = dueDateRefAccounts.map(account => {
      return {
        accountNumber: account.accountNumber,
        accountName: account.accountName,
        delayPosTotal: account.delayPos,
        delayNegTotal: account.delayNeg,
        delayPos: account.posCount ? Math.ceil(account.delayPos / account.posCount) : 0,
        delayNeg: account.negCount ? Math.ceil(account.delayNeg / account.negCount) : 0,
        count: account.count,
        posCount: account.posCount,
        negCount: account.negCount
      };
    });
    finalResult.dueDateReference.data = diffData.filter(Boolean);
    finalResult.dueDateReference.labels = firstChartLabels.filter(Boolean);
    finalResult.dueDateReference.recordsDelay = recordsDelay.filter(Boolean);
    finalResult.docDateReference = res;
    finalResult.dueDateRefAccounts = dueDateRefAccounts;
    cb(finalResult);
  });
};


module.exports.dueDateAnalysisDetails = async (
  orgId,
  prcId,
  mindocdate,
  maxappdate,
  accountNumber,
  cb
) => {
  if (!mindocdate) {
    throw new Error("Due Date is null for this procedure!");
  }
  if (!maxappdate) {
    throw new Error("Due Date is null for this procedure!");
  }
  if (!(mindocdate instanceof Date) || !(maxappdate instanceof Date)) {
    throw new Error("Due Date and ApplicationDate must be Date!");
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
      notPaid: 0,
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
    records: new Array(),
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
                        AND (year(pos.documentDate) <> year(pos.applicationDate) OR pos.applicationDate is null OR 
                            (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
                        AND pos.applicationDate > pos.dueDate
                        AND pos.accountNumber = ${accountNumber}
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG')
                        ORDER BY pos.dueDate`;

  const str = connection.query(query).stream();

  str.on("data", (row) => {
    // too early or too late records
    // if (row.applicationDate) {
    const rowDiff = getNumberOfDays(row.dueDate, row.applicationDate);
    records.push(row);
    for (const element of res) {
      if (
        row.documentDate.getMonth() == element.monthName - 1 &&
        row.documentDate.getFullYear() == element.yearName
      ) {
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

  str.on("end", async () => {
    finalResult.docDateReference = res;
    finalResult.records = records;
    cb(finalResult);
  });
};
