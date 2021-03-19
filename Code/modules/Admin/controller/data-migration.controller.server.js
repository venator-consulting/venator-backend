// const CountryModel = require('../../../models/country.model.server');
// const CityModel = require('../../../models/city.model.server');
// const StreetModel = require('../../../models/street.model.server');
// const UserModel =  require('../../../models/user.model.server');
// const AccountsModel = require('../../../models/accounts.model.server');
// const { syncProcedures } = require('../../../models/procedures.model.server');

module.exports.buildDatabaseSchema = async function (req, res, next) {

    await require('../../../models/country.model.server').syncCountry();
    await require('../../../models/city.model.server').syncCity();
    await require('../../../models/street.model.server').syncStreet();
    await require('../../../models/user.model.server').syncUser();
    await require('../../../models/accounts.model.server').syncAccounts();
    await require('../../../models/accountType.model.server').syncAccountType();
    await require('../../../models/documentType.model.server').syncDocumentType();
    await require('../../../models/posting.model.server').syncPosting();
    await require('../../../models/procedures.model.server').syncProcedures();
    await require('../../../models/role.model.server').syncRole();
    res
        .status(200)
        .json('done');
};