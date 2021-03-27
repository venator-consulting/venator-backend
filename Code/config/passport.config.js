const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportjwt = require('passport-jwt');
const JWTStrategy = passportjwt.Strategy;
const ExtractJWT = passportjwt.ExtractJwt;
const bcrypt = require('bcryptjs');
const config = require('./environment');
const userRepo = require('../repositories/user.repo.server');


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
    function (username, password, cb) {
        data = {};
        userRepo.existUser(username)
            .then(rows => {
                if (!rows || !bcrypt.compareSync(password, rows.password)) {
                    return cb(null, false, {
                        message: 'Incorrect username or password.'
                    });
                }
                rows.password = 'deleted for security purpose';
                //get roles then return th object
                // Users.getRoles(username)
                //     .then(roles => {
                        data.userinfo = rows;
                        data.userinfo.Role = (rows.Role && rows.Role.dataValues)? rows.Role.dataValues.name : null;
                        return cb(null, data, {
                            message: 'Logged In Successfully'
                        });
                //     })
                //     .catch(er => cb(er));
            })
            .catch(err => cb(err));
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
},
    function (jwtPayload, cb) {
        return cb(null, jwtPayload);
    }
));