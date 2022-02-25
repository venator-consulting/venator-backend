const connection = require("../config/mysql.config").getConnection();
const { QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");
const sequelize = Sequelize.getSequelize();
const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");
const errors = require('../models/enums/errors');

module.exports.dueDateRangeCalc = async (orgId, prcId) => {
  let query = `SELECT MIN(pos.applicationDate) mindate , MAX(pos.applicationDate) maxdate,
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
  const diffInDays = Math.ceil(diffInTime / oneDay);

  return diffInDays;
}

monthDiff = (d1, d2) => {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};


module.exports.dueDateAnalysisCalc = async (orgId, prcId, mindate, maxappdate, selctedMaxDelay, accountNumber, cb) => {

  if (!(mindate instanceof Date) || !(maxappdate instanceof Date)) {
    mindate = new Date(mindate);
    maxappdate = new Date(maxappdate);
  }
  // for max delay filter
  let maxDelay = 0;

  const diff = monthDiff(mindate, maxappdate);

  let res = new Array();
  let starterMonth = mindate.getMonth() + 1;
  let starterYear = mindate.getFullYear();
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
  let secondChartLabels = new Array();

  const finalResult = {
    // the data and the labels of the chart
    dueDateReference: {
      data: diffData,
      labels: firstChartLabels,
      recordsDelay: recordsDelay,
      secondChartLabels: secondChartLabels
    },
    docDateReference: res,
  };

  // for the dropdown to select single account
  let dueDateRefAccounts = new Array();

  let query = `SELECT *
                    FROM due_date_analysis_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId} 
                        AND pos.applicationDate >= '${mindate.toISOString().split('T')[0]}'  
                        AND pos.applicationDate <= '${maxappdate.toISOString().split('T')[0]}' `;
  if (accountNumber && accountNumber != 'null' && accountNumber != 'undefined') query += `AND pos.accountNumber = ${accountNumber} `;
  query += ` ORDER BY pos.applicationDate`;
  const str = connection.query(query).stream();

  str.on("data", (row) => {
    // too early or too late records
    if (row.applicationDate) {
      const rowDiff = getNumberOfDays(row.dueDate, row.applicationDate);
      if (!selctedMaxDelay || selctedMaxDelay == 'null' || selctedMaxDelay == 'undefined' || rowDiff <= selctedMaxDelay) {
        if (rowDiff > maxDelay) maxDelay = rowDiff;
        const rowindex = getNumberOfDays(mindate, row.applicationDate);
        recordsCountPerDay[rowindex] = recordsCountPerDay[rowindex] ? recordsCountPerDay[rowindex] + 1 : 1;
        diffData[rowindex] = diffData[rowindex] ? diffData[rowindex] + rowDiff : rowDiff;
        recordsDelay.push({
          x: rowindex,
          y: rowDiff,
          accountNumber: row.accountNumber,
          accountName: row.accountName,
          label: row.applicationDate.toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        });
        firstChartLabels[rowindex] = firstChartLabels[rowindex]
          ? firstChartLabels[rowindex]
          : row.applicationDate.toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });

        const i = dueDateRefAccounts.findIndex((x) => x.accountNumber == row.accountNumber);
        if (i == -1)
          dueDateRefAccounts.push({ accountNumber: row.accountNumber, accountName: row.accountName, });
      }
      // Not paid at all
    }
  }); // end of on data

  str.on("end", async () => {
    for (let index = 0; index < diffData.length; index++) {
      if (diffData[index] && recordsCountPerDay[index]) diffData[index] = Math.ceil(diffData[index] / recordsCountPerDay[index]);
      if (diffData[index] > maxDelay) maxDelay = diffData[index];
    }
    firstChartLabels = firstChartLabels.filter(Boolean);
    recordsDelay = recordsDelay.filter(Boolean);
    finalResult.dueDateReference.data = diffData.filter(value => value != null && value != undefined);
    finalResult.dueDateReference.labels = firstChartLabels;
    finalResult.dueDateReference.secondChartLabels = secondChartLabels;
    finalResult.dueDateReference.recordsDelay = recordsDelay;
    finalResult.docDateReference = res;
    finalResult.dueDateRefAccounts = dueDateRefAccounts;
    finalResult.maxDelay = maxDelay;
    cb(finalResult);
  });
};


module.exports.dueDateAnalysisDetails = async (orgId, prcId, mindocdate, maxappdate, accountNumber, maxDelay, cb) => {
  if (!mindocdate) {
    throw new Error("Due Date is null for this procedure!");
  }
  if (!maxappdate) {
    throw new Error("Due Date is null for this procedure!");
  }

  if (!(mindocdate instanceof Date) || !(maxappdate instanceof Date)) {
    mindocdate = new Date(mindocdate);
    maxappdate = new Date(maxappdate);
  }

  const finalResult = {
    records: new Array(),
  };

  let records = new Array();
  let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
                         pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType, pos.textPosting, pos.textHeader, pos.reference, pos.assignment 
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.dueDate is not NULL 
                        AND pos.applicationDate is not null 
                        AND pos.applicationDate >= '${mindocdate.toISOString().split('T')[0]}'  
                        AND pos.applicationDate <= '${maxappdate.toISOString().split('T')[0]}'
                        AND (year(pos.documentDate) <> year(pos.applicationDate) OR pos.applicationDate is null OR 
                            (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
                        AND pos.applicationDate <> pos.dueDate
                        AND pos.accountNumber = ${accountNumber}
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG')
                        ORDER BY pos.dueDate`;

  const str = connection.query(query).stream();

  str.on("data", (row) => {
    // too early or too late records
    const rowDiff = getNumberOfDays(row.dueDate, row.applicationDate);
    row.delay = rowDiff;
    if (!maxDelay || maxDelay == 'null' || maxDelay == 'undefined' || rowDiff <= maxDelay)
      records.push(row);
  }); // end of on data

  str.on("end", async () => {
    finalResult.records = records;
    cb(finalResult);
  });
};


module.exports.topDelayedAccounts = async (orgId, prcId, offset, limit) => {
  limit = limit ?? 25;
  offset = offset ?? 0;
  let query = `select SQL_CALC_FOUND_ROWS d.accountNumber, d.accountName , count(d.id) totalCount,
     SUM(d.dayDiff) totalDelay 
                from due_date_analysis_${orgId} d
                WHERE d.procedureId = :procedureId
                group by d.accountNumber , d.accountName 
                order by totalDelay DESC
                LIMIT ${limit} offset ${offset}`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });

  const query1 = `SELECT FOUND_ROWS()`;

  const totalCount = await sequelize.query(query1, {
    type: QueryTypes.SELECT,
  });

  let finalResult = {
    data: result,
    count: totalCount,
  };

  return finalResult;
}

