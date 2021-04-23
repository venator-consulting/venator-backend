const procedureRepo = require('../../../repositories/procedure.repo.server');




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
