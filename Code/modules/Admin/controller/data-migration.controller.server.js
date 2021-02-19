// const CountryModel = require('../../../models/country.model.server');
// const CityModel = require('../../../models/city.model.server');
// const StreetModel = require('../../../models/street.model.server');
// const UserModel =  require('../../../models/user.model.server');
// const AccountsModel = require('../../../models/accounts.model.server');
// const { syncProcedures } = require('../../../models/procedures.model.server');

module.exports.buildDatabaseSchema = function (req, res, next) {

    require('../../../models/country.model.server').syncCountry();
    require('../../../models/city.model.server').syncCity();
    require('../../../models/street.model.server').syncStreet();
    require('../../../models/user.model.server').syncUser();
    require('../../../models/accounts.model.server').syncAccounts();
    require('../../../models/accountType.model.server').syncAccountType();
    require('../../../models/documentType.model.server').syncDocumentType();
    require('../../../models/posting.model.server').syncPosting();
    require('../../../models/procedures.model.server').syncProcedures();
    require('../../../models/role.model.server').syncRole();
    res
        .status(200)
        .json('done');
};