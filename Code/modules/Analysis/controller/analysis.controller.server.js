const errorHandler = require('../../../helpers/error.handler.server').errorHandler;
const postingRepo = require('../../../repositories/posting.repo.server');
const nlpHelper = require('../../../helpers/nlp.helper.server');
const keywords = require('../../../models/analysis/text.analysis.keywords');
const paymentAnalysisRepo = require('../../../repositories/payment.analysis.repo');

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

module.exports.amountAnalysisDetails = async (req, res) => {
    try {
        const result = await postingRepo
            .amountAnalysisDetails(req.params.orgId, req.params.prcId, req.params.baseBalance, req.params.accountNumber);
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


module.exports.getByAccountNumber = async (req, res) => {
    try {
        const result = await postingRepo
            .getByAccountNumber(req.params.orgId, req.params.prcId, req.params.accountNumber);
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

module.exports.textAnalysis = async (req, res) => {
    try {
        let fileKeywords = await nlpHelper.getsynonyms(keywords);
        const result = await postingRepo
            .textAnalysis(req.params.orgId, req.params.prcId, fileKeywords);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('Analysis controller: Amount analysis', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};

module.exports.textAnalysisDetails = async (req, res) => {
    try {
        let fileKeywords = await nlpHelper.getsynonyms(keywords);
        const result = await postingRepo
            .textAnalysisDetails(req.params.orgId, req.params.prcId, fileKeywords, req.params.accountNumber);
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


module.exports.paymentAnalysisDateRange = async (req, res) => {
    try {
        const result = await paymentAnalysisRepo.paymentDateRange(req.params.orgId, req.params.prcId);
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

module.exports.paymentAnalysis = async (req, res) => {
    try {
        const dateRange = await paymentAnalysisRepo
            .paymentDateRange(req.params.orgId, req.params.prcId);
        // let result = {};
        paymentAnalysisRepo.paymentAnalysis(req.params.orgId, req.params.prcId, dateRange[0].mindate, dateRange[0].mindate, data => {
            // result = data;
            res.status(200)
            .json({
                data: data,
                dateRange: dateRange
            });
        })
        
    } catch (e) {
        errorHandler('Analysis controller: Amount analysis - get details', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};