const jwt = require('jsonwebtoken');
const config = require('./environment');

module.exports.authorize = function (...allowed) {

    let authorized = false;
    return (req, res, next) => {
        jwt.verify(req.token, config.jwtSecret, function (err, decoded) {
            if (!err) {
                // console.log(decoded);
                req.userinfo = decoded.userinfo;
                const isAllowed = role => !!decoded.roles[role];
                for (let i = 0; i < allowed.length; i++) {
                    console.log(allowed[i]);
                    console.log(isAllowed(allowed[i]));
                    if (isAllowed(allowed[i])) {
                        authorized = true;
                        next();
                        break;
                    }
                }
                
                if (!authorized) {
                    console.log('unauthorized!!!');
                    res.status(403).json({ message: "Forbidden" });
                }
            } else {
                console.log(err);
                res.status(403).json({ message: "Forbidden" });
            }

        });
    };
};

module.exports.extractUserInfo = function () {
    return (req, res, next) => {
        jwt.verify(req.token, config.jwtSecret, function (err, decoded) {
            req.userinfo = decoded.userinfo;
        });
        next();
    };
};