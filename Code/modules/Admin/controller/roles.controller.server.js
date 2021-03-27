const roleRepo = require('../../../repositories/role.repo.server');


module.exports.fetchAll = async function (req, res, next) {
    try {
        const roles = await roleRepo
            .fetchAll();
        res
            .status(200)
            .json(roles);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};


module.exports.insert = async function (req, res) {
    try {
        const role = {
            name: req.body.name,
            role_description: req.body.role_description
        };
        const result = await roleRepo
            .insert(role);
        res.status(201)
            .json(result);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.update = async function (req, res) {
    try {
        const role = {
            name: req.body.name,
            role_description: req.body.role_description
        };
        const result = await roleRepo
            .update(role, req.params.id);
        res.status(201)
            .json(result);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.delete = async function (req, res) {
    try {
        const result = await roleRepo
            .update(req.params.id);
        res.status(204)
            .json(result);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};