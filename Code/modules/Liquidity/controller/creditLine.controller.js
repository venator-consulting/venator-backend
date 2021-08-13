const creditLineRepo = require("../../../repositories/creditLines.repo.server");

module.exports.getCreditLines = async (req, res) => {
  const result = await creditLineRepo.getCreditLines(
    req.params.orgId,
    req.params.prcId
  );
  res.status(200).json(result);
};

module.exports.saveCreditLine = async (req, res) => {
  const result = await creditLineRepo.save(
    req.params.orgId,
    req.params.prcId,
    req.body
  );
  res.status(200).json(result);
};

module.exports.deleteCreditLine = async (req, res) => {
  const result = await creditLineRepo.delete(req.params.orgId, req.params.id);
  res.status(200).json(result);
};
