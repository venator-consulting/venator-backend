const jwt = require('jsonwebtoken');
const config = require('./environment');

module.exports.authorize = function (...allowed) {

    let authorized = false;
    return (req, res, next) => {
        jwt.verify(req.token, config.jwtSecret, function (err, decoded) {
            if (!err) {
                // console.log(decoded);
                req.userinfo = decoded.userinfo;
                for (let i = 0; i < allowed.length; i++) {
                    if (allowed[i] == decoded.userinfo.Role) {
                        authorized = true;
                        next();
                        break;
                    }
                }

                if (!authorized) {
                    console.log('unauthorized!!!');
                    res.status(403).json({
                        message: "Forbidden"
                    });
                }
            } else {
                console.log(err);
                res.status(403).json({
                    message: "Forbidden"
                });
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

module.exports.belongToOrganisation = function () {
    return (req, res, next) => {
        jwt.verify(req.token, config.jwtSecret, function (err, decoded) {
            const userinfo = decoded.userinfo;
            if ((req.params.id && userinfo.OrganisationId != req.params.id) || 
            (req.query.OrganisationId && userinfo.OrganisationId != req.query.OrganisationId)
            && userinfo.Role != "Admin") {
                console.log('unauthorized!!!');
                res.status(403).json({
                    message: "Forbidden"
                });
            } else {
                next();
            }
        });
    };
};