const Posting = require('../models/posting.model.server');
const {
    Op,
    fn,
    col,
    QueryTypes
} = require("sequelize");
const Sequelize = require('../config/sequelize.config');

const sequelize = Sequelize.getSequelize();
const connection = require('../config/mysql.config').getConnection();


module.exports.creditorAnalysis = async (orgId, prcId, keys) => {
    try {
        /**
         *  Text Analysis records Starts
         */
        let textQuery = `SELECT p.accountNumber , p.accountName , COUNT(p.id) as totlaCount, SUM(p.balance) as totalBalance
                            FROM posting_${orgId}  p
                            WHERE p.procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber is not NULL 
                                `;
        textQuery += keys.length > 0 ? ' AND ( ' : '';

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            textQuery += `  p.reference ${key}
                        OR p.textPosting ${key}
                        OR p.textHeader ${key} OR`;
        }
        textQuery += keys.length > 0 ? ' 1 <> 1) ' : '';

        textQuery += 'GROUP BY p.accountNumber , p.accountName';

        /**
         * Text Analysis records Ends here
         */



        /**
         * Amount Analysis records starts
         */

        const amountQuery = `SELECT po.accountNumber , po.accountName , SUM(po.balance) as totalBalance, COUNT(po.id) as totlaCount
         FROM posting_${orgId} po
         WHERE po.procedureId = :procedureId 
             AND UPPER(po.accountType) = 'K' 
             AND po.accountNumber is not NULL
             AND (UPPER(po.documentType) = 'KZ' OR 
                 UPPER(po.documentType) = 'ZP' OR
                 UPPER(po.documentTypeNewName) = 'ZAHLUNG')
             AND po.balance = ROUND(po.balance)
             AND po.balance >= :baseBalance
         GROUP BY po.accountNumber , po.accountName`;

        /**
         * Amount Analysis records ends
         */


        /**
         * Payment records starts
         */
        const paymentQuery = `SELECT pos.accountNumber, pos.accountName, SUM(pos.balance) as totalBalance, COUNT(pos.id) as totlaCount
                FROM posting_${orgId} pos
                WHERE
                    pos.procedureId = :procedureId
                    AND UPPER(pos.accountType) = 'K'
                    AND pos.accountNumber is not NULL
                    AND pos.documentDate is not NULL 
                    AND (pos.applicationDate is null || pos.applicationDate > pos.dueDate)
                    AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                        OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG'
                        OR UPPER(pos.documentType) = 'KZ'
                        OR UPPER(pos.documentType) = 'ZP'
                        OR UPPER(pos.documentType) = 'RE'
                        OR UPPER(pos.documentType) = 'KR')
                    GROUP BY pos.accountNumber , pos.accountName`;
        /**
         * Payment records ends
         */


        /**
         * define promises
         */
        const amountResultPromise = await sequelize.query(
            amountQuery, {
                replacements: {
                    procedureId: prcId,
                    baseBalance: 500
                },
                type: QueryTypes.SELECT
            }
        );

        const textResultPromise = sequelize.query(
            textQuery, {
                replacements: {
                    procedureId: prcId
                },
                type: QueryTypes.SELECT
            }
        );

        const paymentResultPromise = sequelize.query(
            paymentQuery, {
                replacements: {
                    procedureId: prcId
                },
                type: QueryTypes.SELECT
            }
        );
        /**
         * define promises ends
         */

        /**
         * execute promises
         */
        let result = new Array();
        await Promise.all([amountResultPromise, textResultPromise, paymentResultPromise]).then((values) => {
            result = values[0].concat(values[1], values[2]);
        });

        let finalResult = new Array();

        result.reduce((res, value) => {
            if (!res[value.accountNumber]) {
                res[value.accountNumber] = {
                    accountNumber: value.accountNumber,
                    accountName: value.accountName,
                    totalBalance: +value.totalBalance,
                    totlaCount: +value.totlaCount
                };
                finalResult.push(res[value.accountNumber])
            }
            res[value.accountNumber].totalBalance += +value.totalBalance;
            res[value.accountNumber].totlaCount += +value.totlaCount;
            return res;
        }, {});

        return finalResult;

    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports.creditorAnalysisDetails = async (orgId, prcId, keys, accountNumber) => {
    try {
        /**
         *  Text Analysis records Starts
         */
        let textQuery = `SELECT p.accountNumber , p.accountName , COUNT(p.id) as totlaCount, SUM(p.balance) as totalBalance,
                            FROM posting_${orgId}  p
                            WHERE procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.accountNumber = :accountNumber
                                `;
        textQuery += keys.length > 0 ? ' AND ( ' : '';

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            textQuery += `  p.reference ${key}
                        OR p.textPosting ${key}
                        OR p.textHeader ${key} OR`;
        }
        textQuery += keys.length > 0 ? ' 1 <> 1) ' : '';

        textQuery += 'GROUP BY p.accountNumber , p.accountName';

        /**
         * Text Analysis records Ends here
         */



        /**
         * Amount Analysis records starts
         */

        const amountQuery = `SELECT p.accountNumber , p.accountName , SUM(p.balance) as totalBalance, COUNT(p.id) as totlaCount
         FROM posting_${orgId}  p
         WHERE procedureId = :procedureId 
             AND UPPER(p.accountType) = 'K' 
             AND p.accountNumber = :accountNumber
             AND (UPPER(p.documentType) = 'KZ' OR 
                 UPPER(p.documentType) = 'ZP' OR
                 UPPER(p.documentTypeNewName) = 'ZAHLUNG')
             AND p.balance = ROUND(p.balance)
             AND balance >= :baseBalance
         GROUP BY p.accountNumber , p.accountName`;

        /**
         * Amount Analysis records ends
         */


        /**
         * Payment records starts
         */
        const paymentQuery = `SELECT pos.id, pos.accountNumber, pos.accountName, SUM(pos.balance) as totalBalance, COUNT(pos.id) as totlaCount
                FROM posting_${orgId} pos
                WHERE
                    pos.procedureId = :procedureId
                    AND UPPER(pos.accountType) = 'K'
                    AND pos.accountNumber :accountNumber
                    AND pos.documentDate is not NULL 
                    AND (pos.applicationDate is null || pos.applicationDate > pos.dueDate)
                    AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                        OR UPPER(pos.documentTypeNewName) = 'ZAHLUNG'
                        OR UPPER(pos.documentType) = 'KZ'
                        OR UPPER(pos.documentType) = 'ZP'
                        OR UPPER(pos.documentType) = 'RE'
                        OR UPPER(pos.documentType) = 'KR')`;
        /**
         * Payment records ends
         */


        /**
         * define promises
         */
        const amountResultPromise = await sequelize.query(
            amountQuery, {
                replacements: {
                    procedureId: prcId,
                    baseBalance: 500,
                    accountNumber: accountNumber
                },
                type: QueryTypes.SELECT
            }
        );

        const textResultPromise = sequelize.query(
            textQuery, {
                replacements: {
                    procedureId: prcId,
                    accountNumber: accountNumber
                },
                type: QueryTypes.SELECT
            }
        );

        const paymentResultPromise = sequelize.query(
            paymentQuery, {
                replacements: {
                    procedureId: prcId,
                    accountNumber: accountNumber
                },
                type: QueryTypes.SELECT
            }
        );
        /**
         * define promises ends
         */

        /**
         * execute promises
         */
        let result = new Array();
        Promise.all([amountResultPromise, textResultPromise, paymentResultPromise]).then((values) => {
            result = values[0].concat(values[1], values[2]);
        });

        let finalResult = new Array();

        result.reduce((res, value) => {
            if (!res[value.accountNumber]) {
                res[value.accountNumber] = {
                    accountNumber: value.accountNumber,
                    accountName: value.accountName,
                    totalBalance: value.totalBalance,
                    totlaCount: value.totlaCount
                };
                finalResult.push(res[value.accountNumber])
            }
            res[value.accountNumber].totalBalance += value.totalBalance;
            res[value.accountNumber].totlaCount += value.totlaCount;
            return res;
        }, {});

        return finalResult;

    } catch (error) {
        throw new Error(error.message);
    }
};