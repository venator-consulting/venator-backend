const procedureRepo = require("../../../repositories/procedure.repo.server");

module.exports.getByOrgId = async (req, res) => {
  const result = await procedureRepo.getByOrgId(req.params.id);
  res.status(200).json(result);
};

module.exports.getById = async (req, res) => {
  const result = await procedureRepo.fetchOne(req.params.prcId);
  res.status(200).json(result);
};

module.exports.getComment = async (req, res) => {
  const result = await procedureRepo.getProcedureComment(req.params.prcId);
  res.status(200).json(result);
};

module.exports.updateComment = async (req, res) => {
  const result = await procedureRepo.updateProcedureComment(req.params.prcId, req.body);
  res.status(201).json(result);
};
