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
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

/**
 * 
 * @param {Date} d1 start Date
 * @param {Date} d2 end Date
 * @returns number of months between to dates
 */
function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

