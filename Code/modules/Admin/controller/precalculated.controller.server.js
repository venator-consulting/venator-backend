const precalRepo = require('../../../repositories/precalculated.repo.server');
const DATE_RANGE = require("../../../models/enums/date.ranges");

module.exports.textAnalysisByWord = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    // const step = req.params.step;
    await precalRepo.deletePrevDataTextWord(orgId, prcId);
    for (const step in DATE_RANGE) {
        const result = await precalRepo.textAnalysisByWord(orgId, prcId, step);
    }
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