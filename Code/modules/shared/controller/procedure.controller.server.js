const procedureRepo = require("../../../repositories/procedure.repo.server");

module.exports.getByOrgId = async (req, res) => {
  const result = await procedureRepo.getByOrgId(req.params.id);
  res.status(200).json(result);
};

module.exports.getById = async (req, res) => {
  const result = await procedureRepo.fetchOne(req.params.prcId);
  res.status(200).json(result);
};
