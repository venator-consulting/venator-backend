const connection = require('../config/mysql.config').getConnection();
const {
    QueryTypes
} = require("sequelize");
const Sequelize = require('../config/sequelize.config');
const sequelize = Sequelize.getSequelize();

module.exports.dueDateRange = async (orgId, prcId) => {
    try {
        let query = `SELECT MIN(pos.dueDate) mindate , MAX(pos.dueDate) maxdate
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = :procedureId
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.dueDate is not NULL 
                        AND pos.applicationDate is not NULL
                        AND (pos.applicationDate <> pos.dueDate)
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

module.exports.dueDateAnalysis = async (orgId, prcId, fromDate, toDate, cb, cb1) => {
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
        // const diff = getNumberOfDays(fromDate, toDate);

        let diffData = new Array();
        let firstChartLabels = new Array();

        const finalResult = {
            data: diffData,
            labels: firstChartLabels
        };

        // for (let index = 0; index < diff; index++) {
        //     fromDate.setDate(fromDate.getDate() + index);


        // } // end of for every day in diffirence

        let query = `SELECT pos.id, pos.accountNumber, pos.accountName, pos.accountType, pos.documentDate, pos.dueDate,
                         pos.applicationDate, pos.balance, pos.documentTypeNewName, pos.documentType
                    FROM posting_${orgId} pos
                    WHERE
                        pos.procedureId = ${prcId}
                        AND UPPER(pos.accountType) = 'K'
                        AND pos.accountNumber is not NULL
                        AND pos.dueDate is not NULL 
                        AND pos.applicationDate is not NULL
                        AND (pos.applicationDate <> pos.dueDate)
                        AND (UPPER(pos.documentTypeNewName) = 'RECHNUNG'
                            OR UPPER(pos.documentType) = 'RE'
                            OR UPPER(pos.documentType) = 'KR')
                        ORDER BY pos.dueDate`;

        const str = connection.query(query).stream();


        str.on('data', (row) => {
            const rowDiff = getNumberOfDays(row.dueDate, row.applicationDate);
            const rowindex = getNumberOfDays(fromDate, row.dueDate);
            diffData[rowindex] = diffData[rowindex]? diffData[rowindex] + rowDiff : rowDiff;
            firstChartLabels[rowindex] = firstChartLabels[rowindex]? firstChartLabels[rowindex] : row.dueDate.toLocaleDateString('de-DE');;
        }); // end of on data

        str.on('end', async () => {
            finalResult.data = diffData.filter(Boolean);
            finalResult.labels = firstChartLabels.filter(Boolean);
            cb(finalResult);
        });
 

    } catch (error) {
        cb1(error.message);
    }
}