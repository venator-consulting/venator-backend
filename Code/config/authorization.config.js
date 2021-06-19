const jwt = require('jsonwebtoken');
const config = require('./environment');
const errorHandler = require('../helpers/error.handler.server').errorHandler;

module.exports.authorize = function (...allowed) {

    let authorized = false;
    return (req, res, next) => {
        try {
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
                    errorHandler('Authorization config: authorize middle-ware', err);
                    res.status(403).json({
                        message: "Forbidden"
                    });
                }

            });
        } catch (e) {
            errorHandler('Authorization config: authorize middle-ware', e);
        }

    };
};

module.exports.extractUserInfo = function () {
    return (req, res, next) => {
        try {
            jwt.verify(req.token, config.jwtSecret, function (err, decoded) {
                req.userinfo = decoded.userinfo;
            });
            next();
        } catch (e) {
            errorHandler('Authorization: extractUserInfo middle-ware', e);
        }
    };
};

module.exports.belongToOrganisation = function () {
    return (req, res, next) => {
        try {
            jwt.verify(req.token, config.jwtSecret, function (err, decoded) {
                const userinfo = decoded.userinfo;
                if (((req.params.id && userinfo.OrganisationId != req.params.id) ||
                        (req.query.OrganisationId && userinfo.OrganisationId != req.query.OrganisationId)) &&
                    userinfo.Role != "Admin") {
                    console.log('unauthorized!!!');
                    res.status(403).json({
                        message: "Forbidden, the user doesn't belong to this organisation"
                    });
                } else {
                    next();
                }
            });
        } catch (e) {
            errorHandler('Authorization: belongToOrganisation middle-ware', e);
        }
    };
};

/**
 * to display anaysis 
 * 1 the user must belong to the organisation
 * 2 the procedure must has Analysis set to true
 */
module.exports.canDisplayAnalysis = function () {
    return (req, res, next) => {
        try {
            jwt.verify(req.token, config.jwtSecret, async function (err, decoded) {
                const userinfo = decoded.userinfo;
    
                if (!req.params.orgId || !req.params.prcId) {
                    console.log('bad request, there is no Analysis with determine organisation nor procedure!!!');
                    res.status(400).json({
                        message: "Bad request, there is no Analysis with determine organisation nor procedure!!!"
                    });
                } else if (userinfo.OrganisationId != req.params.orgId && userinfo.Role != "Admin") {
                    console.log('unauthorized!!!');
                    res.status(403).json({
                        message: "Forbidden, the user doesn't belong to this organisation"
                    });
                } else {
                    const prcs = await require('../repositories/procedure.repo.server').fetchOne(req.params.prcId);
                    if (prcs.length !== 1 || !prcs[0].analysis) {
                        console.log('unauthorized!!!');
                        res.status(403).json({
                            message: "Bad request, Procedure not found or doesn't have an analysis permission!!"
                        });
                    } else {
                        next();
                    }
    
                }
            });
        } catch (e) {
            errorHandler('Authorization: canDisplayAnalysis middle-ware', e);
        }
    };
};