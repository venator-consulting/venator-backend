const precalRepo = require('../../../repositories/precalculated.repo.server');
const DATE_RANGE = require("../../../models/enums/date.ranges");

module.exports.textAnalysisByWord = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    // const step = req.params.step;
    await precalRepo.deletePrevData(orgId, prcId);
    for (const step in DATE_RANGE) {
        const result = await precalRepo.textAnalysisByWord(orgId, prcId, step);
    }
    res.status(201).json('done');
};
