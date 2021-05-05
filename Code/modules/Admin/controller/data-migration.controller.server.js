module.exports.buildDatabaseSchema = async function (req, res, next) {

    try {
        await require('../../../models/country.model.server').syncCountry();
        await require('../../../models/city.model.server').syncCity();
        await require('../../../models/street.model.server').syncStreet();
        await require('../../../models/organisation.model.server').syncOrganisation();
        await require('../../../models/procedures.model.server').syncProcedures();
        await require('../../../models/documentType.model.server').syncDocumentType();
        await require('../../../models/accountType.model.server').syncAccountType();
        await require('../../../models/accounts.model.server').syncAccounts();
        await require('../../../models/role.model.server').syncRole();
        await require('../../../models/user.model.server').syncUser();
        await require('../../../models/posting.model.server').syncPosting();

        res
            .status(200)
            .json('done');
    } catch (error) {
        res
            .status(500)
            .json(error);
    }
};