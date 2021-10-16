const Posting = require("../models/posting.model.server");
const { Op, fn, col, QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");

const sequelize = Sequelize.getSequelize();

module.exports.creditorAnalysis = async (orgId, prcId, keys, criteria) => {
  let limit = criteria.limit ? criteria.limit : 25;
  let offset = criteria.offset ? criteria.offset : 0;
  let orderBy = criteria.orderBy ? criteria.orderBy : "accountNumber";
  orderBy =
    orderBy == "accountNumber"
      ? "LPAD(LOWER(p.accountNumber), 10,0) "
      : orderBy;
  const sortOrder = criteria.sortOrder == -1 ? "DESC" : "ASC";

  let query = `SELECT SQL_CALC_FOUND_ROWS p.accountNumber , p.accountName , COUNT(p.id) as totlaCount, SUM(p.balance) as totalBalance
                            FROM posting_${orgId}  p
                            WHERE p.procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber is not NULL 
                                `;
  query += keys.length > 0 ? " AND (( " : "";
  // for text records
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    query += `  p.reference ${key}
                        OR p.textPosting ${key}
                        OR p.textHeader ${key} OR`;
  }
  query += keys.length > 0 ? " 1 <> 1) " : "";
  // for amount records
  query += ` OR ((UPPER(p.documentType) = 'KZ' OR 
            UPPER(p.documentType) = 'ZP' OR
            UPPER(p.documentTypeNewName) = 'ZAHLUNG')
            AND p.balance = ROUND(p.balance, -2)
            AND p.balance >= :baseBalance)`;
  // for payment records
  query += ` OR (p.documentDate is not NULL 
            AND (year(p.documentDate) <> year(p.dueDate) OR p.applicationDate is null OR 
                (year(p.documentDate) = year(p.dueDate) AND month(p.documentDate) <> month(p.dueDate)))
            AND (UPPER(p.documentTypeNewName) = 'RECHNUNG'
                OR UPPER(p.documentTypeNewName) = 'ZAHLUNG'))`;

  query += ")";
  if (criteria.accountNumber) {
    query += `and p.accountNumber like '%${criteria.accountNumber}%' `;
  }
  if (criteria.accountName) {
    query += `and p.accountName like '%${criteria.accountName}%' `;
  }
  query += "GROUP BY p.accountNumber , p.accountName ";
  query += ` order by ${orderBy} ${sortOrder} `;
  query += ` LIMIT ${limit} offset ${offset}`;

  const result = await sequelize.query(query, {
    replacements: {
      procedureId: prcId,
      baseBalance: 500,
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
};

module.exports.creditorAnalysisDetails = async (
  orgId,
  prcId,
  keys,
  accountNumber
) => {
  /**
   *  Text Analysis records Starts
   */
  let textQuery = `SELECT p.accountNumber , p.accountName , COUNT(p.id) as totlaCount, SUM(p.balance) as totalBalance
                            FROM posting_${orgId}  p
                            WHERE procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber = :accountNumber `;
  textQuery += keys.length > 0 ? " AND ( " : "";

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    textQuery += `  p.reference ${key}
                        OR p.textPosting ${key}
                        OR p.textHeader ${key} OR`;
  }
  textQuery += keys.length > 0 ? " 1 <> 1) " : "";

  textQuery += "GROUP BY p.accountNumber , p.accountName";

  /**
   * Text Analysis records Ends here
   */

  /**
   * Amount Analysis records starts
   */

  const amountQuery = `SELECT po.accountNumber , po.accountName , SUM(po.balance) as totalBalance, COUNT(po.id) as totlaCount
         FROM posting_${orgId}  po
         WHERE po.procedureId = :procedureId 
             AND UPPER(po.accountType) = 'K' 
             AND po.accountNumber = :accountNumber
             AND (UPPER(po.documentType) = 'KZ' OR 
                 UPPER(po.documentType) = 'ZP' OR
                 UPPER(po.documentTypeNewName) = 'ZAHLUNG')
             AND po.balance = ROUND(po.balance, -2)
             AND po.balance >= :baseBalance
         GROUP BY po.accountNumber , po.accountName`;

  /**
   * Amount Analysis records ends
   */

  /**
   * Payment records starts
   */
  const paymentQuery = `SELECT  pos.accountNumber, pos.accountName, SUM(pos.balance) as totalBalance, COUNT(pos.id) as totlaCount
                FROM posting_${orgId} pos
                WHERE
                    pos.procedureId = :procedureId
                    AND UPPER(pos.accountType) = 'K'
                    AND pos.accountNumber = :accountNumber
                    AND pos.documentDate is not NULL 
                    AND (year(pos.documentDate) <> year(pos.applicationDate) OR pos.applicationDate is null OR 
                        (year(pos.documentDate) = year(pos.applicationDate) AND month(pos.documentDate) <> month(pos.applicationDate)))
                    AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                        OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG')
                GROUP BY pos.accountNumber , pos.accountName`;
  /**
   * Payment records ends
   */

  /**
   * define promises
   */
  const amountResultPromise = sequelize.query(amountQuery, {
    replacements: {
      procedureId: prcId,
      baseBalance: 500,
      accountNumber: accountNumber,
    },
    type: QueryTypes.SELECT,
  });

  const textResultPromise = sequelize.query(textQuery, {
    replacements: {
      procedureId: prcId,
      accountNumber: accountNumber,
    },
    type: QueryTypes.SELECT,
  });

  const paymentResultPromise = sequelize.query(paymentQuery, {
    replacements: {
      procedureId: prcId,
      accountNumber: accountNumber,
    },
    type: QueryTypes.SELECT,
  });
  /**
   * define promises ends
   */

  /**
   * execute promises
   */
  let result = new Array();
  let textResult = new Array();
  let amountResult = new Array();
  let paymentResult = new Array();

  await Promise.all([
    amountResultPromise,
    textResultPromise,
    paymentResultPromise,
  ]).then((values) => {
    result = values;
  });

  result[0].reduce((res, value) => {
    if (!res[value.accountNumber]) {
      res[value.accountNumber] = {
        accountNumber: value.accountNumber,
        accountName: value.accountName,
        totalBalance: +value.totalBalance,
        totlaCount: +value.totlaCount,
      };
      amountResult.push(res[value.accountNumber]);
    } else {
      res[value.accountNumber].totalBalance += +value.totalBalance;
      res[value.accountNumber].totlaCount += +value.totlaCount;
    }

    return res;
  }, {});

  result[1].reduce((res, value) => {
    if (!res[value.accountNumber]) {
      res[value.accountNumber] = {
        accountNumber: value.accountNumber,
        accountName: value.accountName,
        totalBalance: +value.totalBalance,
        totlaCount: +value.totlaCount,
      };
      textResult.push(res[value.accountNumber]);
    } else {
      res[value.accountNumber].totalBalance += +value.totalBalance;
      res[value.accountNumber].totlaCount += +value.totlaCount;
    }

    return res;
  }, {});

  result[2].reduce((res, value) => {
    if (!res[value.accountNumber]) {
      res[value.accountNumber] = {
        accountNumber: value.accountNumber,
        accountName: value.accountName,
        totalBalance: +value.totalBalance,
        totlaCount: +value.totlaCount,
      };
      paymentResult.push(res[value.accountNumber]);
    } else {
      res[value.accountNumber].totalBalance += +value.totalBalance;
      res[value.accountNumber].totlaCount += +value.totlaCount;
    }
    return res;
  }, {});

  return {
    text: textResult,
    amount: amountResult,
    payment: paymentResult,
  };
};
