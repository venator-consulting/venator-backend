const precalRepo = require('../../../repositories/precalculated.repo.server');

module.exports.textAnalysisByWord = async (req, res) =>  {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const step = req.params.step;
    const result = await precalRepo.textAnalysisByWord(orgId, prcId, step);
};