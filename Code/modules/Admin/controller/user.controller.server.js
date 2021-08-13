const roleRepo = require("../../../repositories/role.repo.server");
const userRepo = require("../../../repositories/user.repo.server");

module.exports.createDefaultAdmin = async (req, res) => {
  const defaultRole = await roleRepo.createDefaultAdminRole();
  const adminUser = await userRepo.createDefaultAdmin(defaultRole);
  res.status(200).json(adminUser);
};

module.exports.register = async (req, res) => {
  const user = await userRepo.insert(req.body);
  res.status(201).json(user);
};

module.exports.edit = async (req, res) => {
  const user = await userRepo.update(req.body, req.body.id);
  res.status(201).json(user);
};

module.exports.resetPass = async (req, res) => {
  const user = await userRepo.resetPassword(req.body);
  res.status(201).json(user);
};

module.exports.changePassword = async (req, res) => {
  const result = await userRepo.changePassword(
    req.userinfo.email,
    req.body.password
  );
  res.status(201).json(result);
};

module.exports.fetchAllManagers = async function (req, res) {
  const managers = await userRepo.fetchAllManagers();
  res.status(200).json(managers);
};

module.exports.getUsersByOrganisationId = async function (req, res, next) {
  organisationId = req.params.id;
  const users = await userRepo.getUsersByOrganisationId(organisationId);
  res.status(200).json(users);
};
