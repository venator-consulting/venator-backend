const docTypeRepo = require("../../../repositories/documentType.repo.server");

module.exports.getAll = async (req, res) => {
  const result = await docTypeRepo.fetchAll();
  res.status(200).json(result);
};

module.exports.createDefault = async (req, res) => {
  const result = await docTypeRepo.createDefault();
  res.status(201).json(result);
};
