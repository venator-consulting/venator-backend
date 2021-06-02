const errorHandler = require('../../../helpers/error.handler.server').errorHandler;
const postingRepo = require('../../../repositories/posting.repo.server');

module.exports.amountAnalysis = async (req, res) => {
    try {
        const result = await postingRepo
            .amountAnalysis(req.params.orgId, req.params.prcId, req.params.baseBalance);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('Analysis controller: get Amount analysis', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.getByCreditorNumber = async (req, res) => {
    try {
        const result = await postingRepo
            .getByCreditorNumber(req.params.orgId, req.params.prcId, req.params.creditorNumber);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('Analysis controller: Amount analysis - get details', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};