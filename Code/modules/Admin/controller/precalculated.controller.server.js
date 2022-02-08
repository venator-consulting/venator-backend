const precalRepo = require('../../../repositories/precalculated.repo.server');
const DATE_RANGE = require("../../../models/enums/date.ranges");
const linkTransactionsRepo = require('../../../repositories/link-app-doc.repo.server');

module.exports.textAnalysisByWord = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const step = DATE_RANGE.ALL;
    await precalRepo.deletePrevDataTextWord(orgId, prcId);
    // for (const step in DATE_RANGE) {
    const result = await precalRepo.textAnalysisByWord(orgId, prcId, step);
    // }
    res.status(201).json('done');
};

module.exports.textAnalysisByAccount = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    // const step = req.params.step;
    await precalRepo.deletePrevDataTextAccount(orgId, prcId);
    for (const step in DATE_RANGE) {
        const result = await precalRepo.textAnalysisByAccount(orgId, prcId, step);
    }
    res.status(201).json('done');
};

module.exports.amountAnalysis = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    await precalRepo.deletePrevDataAmount(orgId, prcId);
    const result = await precalRepo.storeAmountData(orgId, prcId);
    res.status(201).json('done');
};

module.exports.creditorAnalysis = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    await precalRepo.deletePrevDataCredit(orgId, prcId);
    const result = await precalRepo.storeCreditorAnalysis(orgId, prcId);
    res.status(201).json('done');
};

module.exports.paymentAnalysis = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    await precalRepo.deletePrevDataPayment(orgId, prcId);
    const result = await precalRepo.storePaymentAnalysis(orgId, prcId);
    res.status(201).json('done');
};

module.exports.dueDateAnalysis = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    await precalRepo.deletePrevDataDueDate(orgId, prcId);
    const result = await precalRepo.storeDueDateAnalysis(orgId, prcId);
    res.status(201).json('done');
};

module.exports.emailAnalysisSender = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    await precalRepo.deletePrevDataEmailAnalysisSender(orgId, prcId);
    const result = await precalRepo.storeEmailAnalysisSender(orgId, prcId);
    res.status(201).json('done');
};

module.exports.emailAnalysisWord = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    await precalRepo.deletePrevDataEmailAnalysisWord(orgId, prcId);
    const result = await precalRepo.storeEmailAnalysisWord(orgId, prcId);
    res.status(201).json('done');
};

module.exports.linkTransactions = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    res.set('Content-Type', 'text/event-stream;charset=utf-8');
    // res.set('Cache-Control', 'no-cache'); 
    res.set('Cache-Control', 'no-transform');
    res.setHeader('X-Accel-Buffering', 'no');
    res.flushHeaders();

    const result = await linkTransactionsRepo.linkTransactions(res, orgId, prcId);
    // res.status(201).json('done');
};