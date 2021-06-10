const Posting = require('../models/posting.model.server');
const {
    Op,
    fn,
    col,
    QueryTypes
} = require("sequelize");
const Sequelize = require('../config/sequelize.config');

const sequelize = Sequelize.getSequelize();


module.exports.fetch = async (criteria) => {
    try {
        const OrganisationId = criteria.OrganisationId;
        if (!OrganisationId) throw new Error("Organisation_id_is_mandatory");
        delete criteria.OrganisationId;
        const limit = criteria.limit ? criteria.limit : 25;
        delete criteria.limit;
        const offset = criteria.offset ? criteria.offset : 0;
        delete criteria.offset;
        for (const key in criteria) {
            if (Object.hasOwnProperty.call(criteria, key)) {
                if (criteria[key].toString().length > 2) {
                    criteria[key] = {
                        [Op.like]: '%' + criteria[key] + '%'
                    };
                }
            }
        }
        return await Posting
            .getPosting('posting_' + OrganisationId)
            .findAndCountAll({
                where: criteria,
                offset: +offset,
                limit: +limit
            });
    } catch (err) {
        // TO-DO: set a custom error message in production environment
        throw new Error(err.message);
    }
};

module.exports.fetchAll = function (companyCode, offset, limit) {
    return new Promise(async (resolve, reject) => {
        try {
            const postings = await Posting
                .getPosting()
                .findAll({
                    where: {
                        companyCode: companyCode
                    },
                    offset: offset,
                    limit: limit,
                    order: [
                        ['id', 'ASC'],
                    ]
                });
            resolve(postings);
        } catch (err) {
            reject(err);
        }
    });

};

module.exports.getDocTypes = async (organisationId, procedureId) => {
    try {
        const result = await Posting
            .getPosting('posting_' + organisationId)
            .findAll({
                where: {
                    ProcedureId: procedureId,
                    documentType: {
                        [Op.ne]: null
                    }
                },
                attributes: [
                    [fn('DISTINCT', col('documentType')), 'documentType'],
                    'documentTypeNewId',
                    'documentTypeNewName',
                    'procedureId'
                ],
                distinct: true
            });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.updateDocTypeNew = async (organisationId, procedureId, documentType, documentTypeNewId, documentTypeNewName) => {
    try {
        return await Posting
            .getPosting('posting_' + organisationId)
            .update({
                documentTypeNewId: documentTypeNewId,
                documentTypeNewName: documentTypeNewName
            }, {
                where: {
                    procedureId: procedureId,
                    documentType: documentType
                }
            });
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.amountAnalysis = async (orgId, prcId, baseBalance) => {
    try {

        const query = `SELECT p.creditorNumber , p.creditorName , SUM(p.balance) as totalBalance, COUNT(p.id) as totlaCount
                            FROM posting_${orgId}  p
                            WHERE procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.creditorNumber is not NULL
                                AND (UPPER(p.documentType) = 'KZ' OR 
                                    UPPER(p.documentType) = 'ZP' OR
                                    UPPER(p.documentTypeNewName) = 'ZAHLUNG')
                                AND p.balance = ROUND(p.balance)
                                AND balance > :baseBalance
                            GROUP BY p.creditorNumber , p.creditorName`;
        const result = await sequelize.query(
            query, {
                replacements: {
                    procedureId: prcId,
                    baseBalance: baseBalance
                },
                type: QueryTypes.SELECT
            }
        );
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports.getByCreditorNumber = async (orgId, procedureId, creditorNumber) => {
    try {
        const result = await Posting
            .getPosting('posting_' + orgId)
            .findAll({
                where: {
                    procedureId: procedureId,
                    creditorNumber: creditorNumber
                }
            });
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports.textAnalysis = async (orgId, prcId, keys) => {
    try {

        let query = `SELECT p.creditorNumber , p.creditorName , COUNT(p.id) as totlaCount
                            FROM posting_${orgId}  p
                            WHERE procedureId = :procedureId 
                                AND UPPER(p.accountType) = 'K' 
                                AND p.creditorNumber is not NULL 
                                `;
        query += keys.length > 0 ? ' AND ( ' : '';

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            query += `  p.reference like '%${key}%'
                        OR p.textPosting like '%${key}%'
                        OR p.textHeader like '%${key}%' OR`;
        }
        query += keys.length > 0 ? ' 1 <> 1) ' : '';

        query += 'GROUP BY p.creditorNumber , p.creditorName';

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


module.exports.susaDateRange = async (orgId, prcId) => {
    try {
        let query = `SELECT MAX(documentDate)  maxdate, MIN(documentDate) mindate from posting_${orgId} pos
                        WHERE
                            pos.procedureId = :procedureId
                            AND UPPER(pos.accountType) = 'K' 
                            AND pos.creditorNumber is not NULL 
                            AND pos.creditorName is not NULL`;

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


module.exports.susaAnalysis = async (orgId, prcId, fromDate, toDate) => {
    try {

        let query = `SELECT DISTINCT pos.creditorNumber, pos.creditorName, fromRange.famount, inRange.inamount , outRange.outamount, credit.creditAmount, debit.debitAmount
        FROM posting_${orgId} pos 
        LEFT OUTER JOIN
            ( SELECT p.creditorNumber , p.creditorName , SUM(p.balance) famount
                FROM venator.posting_${orgId} p 
                WHERE
                    p.procedureId = :procedureId
                    AND UPPER(p.accountType) = 'K' 
                    AND p.creditorNumber is not NULL 
                    AND  p.documentDate <  :fromDate
                GROUP BY p.creditorNumber , p.creditorName) as fromRange
            ON pos.creditorNumber = fromRange.creditorNumber
            left OUTER JOIN 
            ( select p2.creditorNumber , p2.creditorName , SUM(p2.balance) inamount
                FROM venator.posting_${orgId} p2
                WHERE
                    p2.procedureId = :procedureId
                    AND UPPER(p2.accountType) = 'K' 
                    AND p2.creditorNumber is not NULL 
                    AND  p2.documentDate >  :fromDate
                    AND  p2.documentDate <  :toDate 
                GROUP BY p2.creditorNumber , p2.creditorName
            ) as inRange 
        ON pos.creditorNumber = inRange.creditorNumber
        
        left OUTER JOIN 
            ( select p3.creditorNumber , p3.creditorName , SUM(p3.balance) outamount
                FROM venator.posting_${orgId} p3
                WHERE
                    p3.procedureId = :procedureId
                    AND UPPER(p3.accountType) = 'K' 
                    AND p3.creditorNumber is not NULL
                    AND  p3.documentDate >  :toDate 
                GROUP BY p3.creditorNumber , p3.creditorName
            ) as outRange 
        ON pos.creditorNumber = outRange.creditorNumber
        
        left OUTER JOIN 
            ( select p4.creditorNumber , p4.creditorName , SUM(p4.balance) creditAmount
                FROM venator.posting_${orgId} p4
                WHERE
                    p4.procedureId = :procedureId
                    AND UPPER(p4.accountType) = 'K' 
                    AND p4.creditorNumber is not NULL 
                    AND p4.balance > 0
                    AND  p4.documentDate >  :fromDate
                    AND  p4.documentDate <  :toDate 
                GROUP BY p4.creditorNumber , p4.creditorName
            ) as credit 
        ON pos.creditorNumber = credit.creditorNumber
        
        left OUTER JOIN 
            ( select p5.creditorNumber , p5.creditorName , SUM(p5.balance) debitAmount
                FROM venator.posting_${orgId} p5
                WHERE
                    p5.procedureId = :procedureId
                    AND UPPER(p5.accountType) = 'K' 
                    AND p5.creditorNumber is not NULL
                    AND p5.balance < 0
                    AND  p5.documentDate >  :fromDate
                    AND  p5.documentDate <  :toDate 
                GROUP BY p5.creditorNumber , p5.creditorName
            ) as debit 
        ON pos.creditorNumber = debit.creditorNumber
        
        
        WHERE
                    pos.procedureId = :procedureId
                    AND UPPER(pos.accountType) = 'K' 
                    AND pos.creditorNumber is not NULL 
                                `;


        const result = await sequelize.query(
            query, {
                replacements: {
                    procedureId: prcId,
                    fromDate: fromDate,
                    toDate: toDate
                },
                type: QueryTypes.SELECT
            }
        );
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};