const procedureRepo = require('../../../repositories/procedure.repo.server');


module.exports.fetchAll = async function (req, res, next) {
    try {
        const result = await procedureRepo
            .fetchAll();
        res
            .status(200)
            .json(result);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.fetchOne = async (req, res) => {
    try {
        const result = await procedureRepo
            .fetchOne(req.params.id);
        res
            .status(200)
            .json(result);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.getManagerProcedures = async (req, res) => {
    let managerId = req.params.managerId
    
    try {
        const result = await procedureRepo
            .getManagerProcedures(managerId);
        res
            .status(200)
            .json(result);
    } catch (e) {
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.getByUserId = async (req, res) => {
    try {
        const result = await procedureRepo
            .getByUserId(req.params.id);
        res.status(200)
            .json(result);
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
        const procedure = req.body;
        const result = await procedureRepo
            .insert(procedure);
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
        const procedure = req.body;
        const result = await procedureRepo
            .update(procedure, req.params.id);
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
        const result = await procedureRepo
            .delete(req.params.id);
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