const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../../../config/environment");
const Exception = require("../../../helpers/errorHandlers/Exception");
const httpStatus = require("../../../models/enums/httpStatus");
const preferencesRepo = require('../../../repositories/userPreferences.repo.server');

module.exports.loginAuthenticate = function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      next(
        new Exception(httpStatus.UNAUTHORIZED, "incorrect_username_or_password")
      );
    }
    if (!user) {
      next(new Exception(httpStatus.UNAUTHORIZED, "incorrect_username_or_password"));
    }
    req.login(user, { session: false }, async (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(user, config.jwtSecret);
      const preferences = await preferencesRepo.getByUser(user?.userinfo?.id);
      return res.status(200).json({ user, token, preferences });
    });
  })(req, res);
};
