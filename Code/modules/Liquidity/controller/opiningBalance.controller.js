const postingRepo = require('../../../repositories/posting.repo.server');
const errorHandler = require('../../../helpers/error.handler.server').errorHandler;



module.exports.getStartingBalance = async (req, res) => {
    try {
        const result = await postingRepo
            .getStartingBalance(req.params.orgId, req.params.prcId);
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

module.exports.updateStartingBalance = async (req, res) => {
    try {
        const result = await postingRepo
            .updateStartBalance(req.params.orgId, req.params.prcId, req.body.accountNumber, req.body.StartingBalance, req.body.StartingBalanceDate);
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