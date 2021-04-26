const procedureRepo = require('../../../repositories/procedure.repo.server');




module.exports.getByOrgId = async (req, res) => {
    try {
        const result = await procedureRepo
            .getByOrgId(req.params.id);
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
