const procedureRepo = require("../../../repositories/procedure.repo.server");

module.exports.fetchAll = async function (req, res, next) {
  const result = await procedureRepo.fetchAll();
  res.status(200).json(result);
};

module.exports.fetchOne = async (req, res) => {
  const result = await procedureRepo.fetchOne(req.params.id);
  res.status(200).json(result);
};

module.exports.getByOrgId = async (req, res) => {
  const result = await procedureRepo.getByOrgId(req.params.id);
  res.status(200).json(result);
};

module.exports.insert = async function (req, res) {
  const procedure = req.body;
  const result = await procedureRepo.insert(procedure);
  res.status(201).json(result);
};

module.exports.update = async function (req, res) {
  const procedure = req.body;
  const result = await procedureRepo.update(procedure, req.body.id);
  res.status(201).json(result);
};

module.exports.delete = async function (req, res) {
  const result = await procedureRepo.delete(req.params.id);
  res.status(204).json(result);
};

module.exports.reset = async function(req, res) {
  await procedureRepo.resetProcedure(req.params.orgId, req.params.prcId);
  res.status(204).json('done');
};
