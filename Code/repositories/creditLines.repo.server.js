const {
    Op,
    fn,
    col,
    QueryTypes
} = require("sequelize");
const Sequelize = require('../config/sequelize.config');

const sequelize = Sequelize.getSequelize();
const CreditLines = require('../models/creditLines.model.server');


module.exports.getCreditLines = async (orgId, prcId) => {
    try {

        let query = `SELECT DISTINCT p.accountNumber, p.accountName, c.procedureId, c.creditLineFromDate , c.id, c.creditLineToDate , c.creditLine FROM 
                        posting_${orgId} p
                        left outer join
                        creditLines_${orgId} c
                        on p.accountNumber = c.accountNumber
                        WHERE p.procedureId = :procedureId and (c.procedureId = :procedureId OR c.procedureId is null)`;


        const result = sequelize.query(
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


module.exports.getAll = async (orgId, prcId) => {
    try {
        return await CreditLines
            .getCreditLines('creditLines_' + orgId)
            .findAll({
                where: {
                    procedureId: prcId
                }
            });
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports.insert = async (orgId, prcId, creditLine) => {
    try {
        if (!creditLine.procedureId) creditLine.procedureId = prcId;

        return await CreditLines
            .getCreditLines('creditLines_' + orgId)
            .create(creditLine);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports.update = async (orgId, prcId, creditLine) => {
    try {
        if (!creditLine.procedureId) creditLine.procedureId = prcId;

        return await CreditLines
            .getCreditLines('creditLines_' + orgId)
            .update(creditLine);
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports.save = async (orgId, prcId, creditLine) => {
    try {
        if (!creditLine.procedureId) creditLine.procedureId = prcId;

        return await CreditLines
            .getCreditLines('creditLines_' + orgId)
            .upsert(creditLine);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports.delete = async (orgId, creditLine) => {
    try {
        return await CreditLines
            .getCreditLines('creditLines_' + orgId)
            .destroy(creditLine);
    } catch (error) {
        throw new Error(error.message);
    }
};