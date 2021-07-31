const creditLineRepo = require('../../../repositories/creditLines.repo.server');
const errorHandler = require('../../../helpers/error.handler.server').errorHandler;



module.exports.getCreditLines = async (req, res) => {
    try {
        const result = await creditLineRepo
            .getCreditLines(req.params.orgId, req.params.prcId);
        res.status(200).json(result);
    } catch (e) {
        errorHandler('Credit Lines controller: get', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.saveCreditLine = async (req, res) => {
    try {
        const result = await creditLineRepo
            .save(req.params.orgId, req.params.prcId, req.body);
        res.status(200).json(result);
    } catch (e) {
        errorHandler('opining balance controller: get', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};


module.exports.deleteCreditLine = async (req, res) => {
    try {
        const result = await creditLineRepo
            .delete(req.params.orgId, req.params.id);
        res.status(200).json(result);
    } catch (e) {
        errorHandler('opining balance controller: get', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};