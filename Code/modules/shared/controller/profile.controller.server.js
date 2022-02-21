// const bcrypt = require("bcryptjs");
// const Exception = require("../../../helpers/errorHandlers/Exception");
// const httpStatus = require("../../../models/enums/httpStatus");
// const UsersRepo = require("../../../repositories/user.repo.server");
// const errors = require('../../../models/enums/errors');

const UserPreferencesRepo = require('../../../repositories/userPreferences.repo.server');

// module.exports.changePassword = async function (req, res, next) {
//   const userID = req.user.id;
//   const password = req.body.password;
//   const newPassword = req.body.newPassword;
//   const rows = await UsersRepo.existUser(userID);
//   if (rows.length != 1 || !bcrypt.compareSync(password, rows[0].password)) {
//     throw new Exception(httpStatus.UNAUTHORIZED, errors.passwordsMatch);
//   } else {
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(newPassword, salt);
//     let r = await UsersRepo.update({ password: hashedPassword }, userID);
//     res.status(201).json({
//       message: "Password changed",
//     });
//   }
// };


module.exports.savePreferences = async (req, res) => {
  const { id } = req.user.userinfo;
  const preferences = req.body;
  preferences.userId = id;
  await UserPreferencesRepo.save(preferences);
  res.status(201).json({ message: "Preferences Saved!" });
};

module.exports.getUserPreferences = async (req, res) => {
  const { id } = req.user;
  const result = await UserPreferencesRepo.getByUser(id);
  res.status(200).json(result);
}
