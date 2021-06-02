const procedureRepo = require('../../../repositories/procedure.repo.server');
const errorHandler = require('../../../helpers/error.handler.server').errorHandler;



module.exports.getByOrgId = async (req, res) => {
    try {
        const result = await procedureRepo
            .getByOrgId(req.params.id);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('procedure controller in shared folder: get procedures by organisation id', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};
