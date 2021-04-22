const orgRepo = require('../../../repositories/organisation.repo.server');


module.exports.fetchAll = async function (req, res, next) {
    try {
        const orgs = await orgRepo
            .fetchAll();
        res
            .status(200)
            .json(orgs);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};


module.exports.fetchOne = async function (req, res) {
    try {
        const org = await orgRepo
            .fetchOne(req.params.id);
        res
            .status(200)
            .json(org);
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
        const org = req.body;

        const result = await orgRepo
            .insert(org);
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
        const org = req.body;
        const result = await orgRepo
            .update(org, req.params.id);
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
        const result = await orgRepo
            .softDelete(req.params.id);
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