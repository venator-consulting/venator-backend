const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../../../config/environment');


module.exports.loginAuthenticate = function (req, res, next) {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            errorHandler('login controller: login authentication', err);
            return res.status(400).json({
                message: 'Something is not right',
                err: err
            });
        }
        if (!user) {
            return res.status(401).json({
                message: 'Unauthorized',
                user: user
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user, config.jwtSecret);
            return res.status(200).json({ user, token });
        });
    })(req, res);
};