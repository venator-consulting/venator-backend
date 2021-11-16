const mailHistoryRepo = require('../../../repositories/mails.repo.server');
const mailRepo = require('../../../repositories/mails.repo.server');
const keys = require('../../../models/analysis/text.analysis.keywords');

module.exports.getAll = async (req, res) => {
    const orgId = req.params.orgId;
    const prcId = req.params.prcId;
    const result = await mailHistoryRepo.fetchAll(orgId, prcId);
    res.status(200).json(result);
};

//#region email analysis
module.exports.getMailAnalysis = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const result = await mailRepo.mailAnalysisByWord(orgId, prcId, keys);
    res.status(200).json(result);
};

module.exports.getMailDetailsAnalysis = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const word = req.params.word;
    const result = await mailRepo.mailAnalysisWordDetails(orgId, prcId, word);
    res.status(200).json(result);
};
//#endregion email analysis