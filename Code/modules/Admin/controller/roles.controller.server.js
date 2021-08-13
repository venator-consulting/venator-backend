const roleRepo = require("../../../repositories/role.repo.server");

module.exports.fetchAll = async function (req, res, next) {
  const roles = await roleRepo.fetchAll();
  res.status(200).json(roles);
};

module.exports.getmanagerRoleId = async function (req, res, next) {
  const result = await roleRepo.getmanagerRoleId();
  res.status(200).json({
    id: result.id,
  });
};

module.exports.insert = async function (req, res) {
  const role = {
    name: req.body.name,
    role_description: req.body.role_description,
  };
  const result = await roleRepo.insert(role);
  res.status(201).json(result);
};

module.exports.update = async function (req, res) {
  const role = {
    name: req.body.name,
    role_description: req.body.role_description,
  };
  const result = await roleRepo.update(role, req.params.id);
  res.status(201).json(result);
};

module.exports.delete = async function (req, res) {
  const result = await roleRepo.delete(req.params.id);
  res.status(204).json(result);
};

module.exports.createDefaultRoles = async function (req, res) {
  const result = await roleRepo.createDefaultRoles();
  res.status(201).json(result);
};
