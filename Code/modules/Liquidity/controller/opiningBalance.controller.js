const postingRepo = require("../../../repositories/posting.repo.server");

module.exports.getStartingBalance = async (req, res) => {
  const result = await postingRepo.getStartingBalance(
    req.params.orgId,
    req.params.prcId
  );
  res.status(200).json(result);
};

module.exports.updateStartingBalance = async (req, res) => {
  const result = await postingRepo.updateStartBalance(
    req.params.orgId,
    req.params.prcId,
    req.body.accountNumber,
    req.body.StartingBalance,
    req.body.StartingBalanceDate
  );
  res.status(200).json(result);
};
