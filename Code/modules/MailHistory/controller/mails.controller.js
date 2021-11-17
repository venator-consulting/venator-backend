const mailRepo = require('../../../repositories/mails.repo.server');
const keys = require('../../../models/analysis/text.analysis.keywords');

module.exports.getAll = async (req, res) => {
    const orgId = req.params.orgId;
    const prcId = req.params.prcId;
    const result = await mailRepo.fetchAll(orgId, prcId);
    res.status(200).json(result);
};

module.exports.getBySender = async (req, res) => {
    const criteria = req.query;
    const result = await mailRepo.getBySender(req.params.orgId, req.params.prcId, req.params.mail, criteria);
    res.status(200).json(result);
};

//#region email analysis
module.exports.getMailAnalysisBySender = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const result = await mailRepo.mailAnalysisBySender(orgId, prcId, keys);
    res.status(200).json(result);
};

module.exports.getMailAnalysisByWord = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const result = await mailRepo.mailAnalysisByWord(orgId, prcId, keys);
    res.status(200).json(result);
};

module.exports.getMailDetailsAnalysisBySender = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const mail = req.params.mail;
    const result = await mailRepo.mailAnalysisSenderDetails(orgId, prcId, keys, mail);
    res.status(200).json(result);
};

module.exports.getMailDetailsAnalysisByWoed = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const word = req.params.word;
    const result = await mailRepo.mailAnalysisWordDetails(orgId, prcId, word);
    res.status(200).json(result);
};

module.exports.mailBulkUpdate = async (req, res) => {
    const result = await mailRepo.mailBulkUpdate(req.params.orgId, req.body);
    res.status(200).json(result);
};

module.exports.mailJustRelevant = async (req, res) => {
    const result = await mailRepo.mailJustRelevant(req.params.orgId, req.params.prcId, req.params.mail);
    res.status(200).json(result);
};
//#endregion email analysis