const accountTypeRepo = require("../../../repositories/accountType.repo.server");
const postingRepo = require("../../../repositories/posting.repo.server");

module.exports.getAll = async (req, res) => {
  const result = await accountTypeRepo.fetchAll();
  res.status(200).json(result);
};

module.exports.getAccountTypes = async (req, res) => {
  const result = await postingRepo.getAccountTypes(
    req.params.orgId,
    req.params.prcId
  );
  res.status(200).json(result);
};

module.exports.updateAccountTypes = async (req, res) => {
  const result = await postingRepo.updateAccountTypeNew(
    req.params.orgId,
    req.params.prcId,
    req.body.accountNumber,
    req.body.accountTypeNewId,
    req.body.accountTypeNewName
  );
  res.status(201).json(result);
};

module.exports.createDefault = async (req, res) => {
  const result = await accountTypeRepo.createDefault();
  res.status(201).json(result);
};
