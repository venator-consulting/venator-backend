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
                    ProcedureId: procedureId
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
