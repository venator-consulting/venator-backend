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
        errorHandler('Analysis controller: getByAccountNumber - fetch all records for a specific account', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};


module.exports.amountJustRelevant = async (req, res) => {
    try {
        const result = await postingRepo
            .amountJustRelevant(req.params.orgId, req.params.prcId, req.params.accountNumber);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('Analysis controller: getByAccountNumber - fetch the relevant records for a specific account', e);
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


module.exports.textBulkUpdate = async (req, res) => {
    try {
        const result = await postingRepo.textBulkUpdate(req.params.orgId, req.body);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('Analysis controller: text bulk update - set records as relevant on text analysis.', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};



module.exports.textJustRelevant = async (req, res) => {
    try {
        const result = await postingRepo
            .textJustRelevant(req.params.orgId, req.params.prcId, req.params.accountNumber);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('Analysis controller: getByAccountNumber - fetch the relevant records for a specific account', e);
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
            .paymentDateRange(+req.params.orgId, +req.params.prcId);
        if (dateRange.length < 1) {
            res.status(500)
                .json({
                    messsage: 'Can not get Date range!',
                    dateRange: dateRange
                });
        }
        if (!dateRange[0].mindate || !(dateRange[0].mindate instanceof Date)) {
            res.status(400)
                .json({
                    messsage: 'this procedure has no document date! please re-import it',
                    dateRange: dateRange
                });
        }
        const fromDate = dateRange[0].mindate;
        let toDate = new Date();
        if (!dateRange[0].maxdate || !(dateRange[0].maxdate instanceof Date)) {
            if (!dateRange[0].maxdue || !(dateRange[0].maxdue instanceof Date)) {
                res.status(400)
                    .json({
                        messsage: 'this procedure has no application date nor dueDate! please re-import it',
                        dateRange: dateRange
                    });
            } else {
                toDate = dateRange[0].maxdue;
            }
        } else {
            toDate = dateRange[0].maxdate;
        }
        // let result = {};
        paymentAnalysisRepo.paymentAnalysis(req.params.orgId, req.params.prcId, fromDate, toDate, data => {
            // result = data;
            res.status(200)
                .json({
                    data: data,
                    dateRange: dateRange
                });
        }, err => {
            res.status(500)
                .json({
                    messsage: err,
                    dateRange: dateRange
                });
        });

    } catch (e) {
        errorHandler('Analysis controller: payment analysis - get details', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};