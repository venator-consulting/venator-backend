const env = require("../../../config/environment");
const orgRepo = require("../../../repositories/organisation.repo.server");

module.exports.fetchAll = async function (req, res, next) {
  const orgs = await orgRepo.fetchAll();
  res.status(200).json(orgs);
};

module.exports.fetchOne = async function (req, res) {
  const org = await orgRepo.fetchOne(req.params.id);
  res.status(200).json(org);
};

module.exports.insert = async function (req, res) {
  const file = req.file;
  const org = JSON.parse(req.body.data);
  if (file) {
    const filePath = file.path;
    org.logo = env.domain + filePath;
  }
  const result = await orgRepo.insert(org);
  res.status(201).json(result);
};

module.exports.update = async function (req, res) {
  const file = req.file;
  const org = JSON.parse(req.body.data);
  if (file) {
    const filePath = file.path;
    org.logo = env.domain + filePath;
  }
  const result = await orgRepo.update(org, req.params.id);
  res.status(201).json(result);
};

module.exports.delete = async function (req, res) {
  const result = await orgRepo.softDelete(req.params.id);
  res.status(204).json(result);
};
