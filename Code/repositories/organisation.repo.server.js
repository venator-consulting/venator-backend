const Posting = require('../models/posting.model.server');
const Accounts = require('../models/accounts.model.server');
const Organisation = require('../models/organisation.model.server');
const {
    Op
} = require("sequelize");



module.exports.fetchAll = async () => {
    try {
        const orgs = await Organisation
            .getOrganisation()
            .findAll({
                where: {
                    deleted: false
                }
            });
            console.log("orgs: ",orgs)
        return orgs;
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    }
};


module.exports.fetch = async (search = '_', orderBy = 'name', order = 'DESC', limit = 50, offset = 0) => {
    try {
        const orgs = await Organisation
            .getOrganisation()
            .findAll({
                where: {
                    [Op.or]: [{
                            name: {
                                [Op.like]: '%' + search + '%'
                            }
                        },
                        {
                            email: {
                                [Op.like]: '%' + search + '%'
                            }
                        }
                    ]

                },
                offset: offset,
                limit: limit,
                order: [
                    [orderBy, order]
                ]
            });
        return orgs;
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    } // end of try-catch
};


module.exports.fetchOne = async (orgId) => {
    try {
        return await Organisation
        .getOrganisation()
        .findAll({
            where: {
                deleted: false,
                id: orgId
            }
        });
    } catch (error) {
        throw new Error('there_is_an_error_in_db_connection');
    }
};


module.exports.insert = async (org) => {
    try {
        const result = await Organisation
            .getOrganisation()
            .create(org);

        await Posting.syncPosting('posting_' + result.dataValues.id);
        await Accounts.syncAccounts('accounts_' + result.dataValues.id);

        return result;
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    }
}; // end of create new organisation



/**
 * @param {*} org org object or part of it
 * @param {*} orgId to use in where close
 */
module.exports.update = async (org, orgId) => {
    try {
        return await Organisation
            .getOrganisation()
            .update(org, {
                where: {
                    id: orgId
                }
            });
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    }
}; // end of update organisation


module.exports.softDelete = async (orgId) => {
    try {
        return await Organisation
            .getOrganisation()
            .update({
                deleted: true
            }, {
                where: {
                    id: orgId
                }
            });
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    }
};

// TO-DO prefer to use soft delete
/**
 * @deprecated prefer to use soft delete
 * @param {*} orgId 
 */
module.exports.delete = async (orgId) => {
    try {
        return await Organisation
            .getOrganisation()
            .destroy({
                where: {
                    id: orgId
                }
            });
    } catch (err) {
        throw new Error('there_is_an_error_in_db_connection');
    }
};