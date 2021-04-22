module.exports.buildDatabaseSchema = async function (req, res, next) {

    try {
        await Promise.all([
            require('../../../models/country.model.server').syncCountry(),
            require('../../../models/city.model.server').syncCity(),
            require('../../../models/street.model.server').syncStreet(),
            require('../../../models/user.model.server').syncUser(),
            require('../../../models/accounts.model.server').syncAccounts(),
            require('../../../models/accountType.model.server').syncAccountType(),
            require('../../../models/documentType.model.server').syncDocumentType(),
            require('../../../models/posting.model.server').syncPosting(),
            require('../../../models/procedures.model.server').syncProcedures(),
            require('../../../models/role.model.server').syncRole(),
            require('../../../models/organisation.model.server').syncOrganisation()
        ]);
        res
            .status(200)
            .json('done');
    } catch (error) {
        res
            .status(500)
            .json(error);
    }
};