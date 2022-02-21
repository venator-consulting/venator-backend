const dictRepo = require("../../../repositories/dict.repository.server");

module.exports.buildDatabaseSchema = async function (req, res, next) {
  // await require('../../../models/creditLines.model.server').syncCreditLines();
  await require("../../../models/country.model.server").syncCountry();
  await require("../../../models/city.model.server").syncCity();
  await require("../../../models/street.model.server").syncStreet();
  await require("../../../models/organisation.model.server").syncOrganisation();
  await require("../../../models/procedures.model.server").syncProcedures();
  await require("../../../models/documentType.model.server").syncDocumentType();
  await require("../../../models/accountType.model.server").syncAccountType();
  // await require('../../../models/accounts.model.server').syncAccounts();
  await require("../../../models/role.model.server").syncRole();
  await require("../../../models/user.model.server").syncUser();
  // await require('../../../models/posting.model.server').syncPosting();
  await require('../../../models/website.model').syncWebsite();
  await require('../../../models/userPreferences.model').syncUserPreferences();

  res.status(200).json("done");
};

module.exports.createDict = async (req, res) => {
  await dictRepo.createDict();
  res.status(200).json({
    message: "done",
  });
};
