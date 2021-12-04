const mailRepo = require('../../../repositories/mails.repo.server');
const keys = require('../../../models/analysis/text.analysis.keywords');
const env = require('../../../config/environment');
const path = require('path');
const precalRepo = require('../../../repositories/precalculated.repo.server');
const accountRepo = require('../../../repositories/accounts.repo.server');

module.exports.getAll = async (req, res) => {
    const orgId = req.params.orgId;
    const prcId = req.params.prcId;
    const criteria = req.query;
    const result = await mailRepo.fetchAll(orgId, prcId, criteria);
    res.status(200).json(result);
};

module.exports.getCreditorsMails = async (req, res) => {
    const orgId = req.params.orgId;
    const prcId = req.params.prcId;
    const result = await accountRepo.getCreditorsMails(orgId, prcId);
    res.status(200).json(result);
};

module.exports.updateMail = async (req, res) => {
    const orgId = req.params.orgId;
    const prcId = req.params.prcId;
    const row = req.body;
    const result = await mailRepo.update(orgId, prcId, row);
    res.status(200).json(result);
};

module.exports.getBySender = async (req, res) => {
    const criteria = req.query;
    const result = await mailRepo.getBySender(req.params.orgId, req.params.prcId, req.params.mail, criteria);
    res.status(200).json(result);
};

module.exports.getBySenderByAccount = async (req, res) => {
    const criteria = req.query;
    const result = await mailRepo.getBySenderByAccount(req.params.orgId, req.params.prcId, req.params.accountNumber, criteria);
    res.status(200).json(result);
};

//#region email analysis
module.exports.getMailAnalysisBySender = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const result = await precalRepo.getMailBySender(orgId, prcId);
    res.status(200).json(result);
};

module.exports.getMailAnalysisByWord = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const result = await precalRepo.getMailByWord(orgId, prcId);
    res.status(200).json(result);
};

module.exports.getMailDetailsAnalysisBySender = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const mail = req.params.mail;
    const result = await mailRepo.mailAnalysisSenderDetails(orgId, prcId, keys, mail);
    res.status(200).json(result);
};

module.exports.getMailDetailsAnalysisBySenderAccount = async (req, res) => {
    const orgId = +req.params.orgId;
    const prcId = +req.params.prcId;
    const accountNumber = req.params.accountNumber;
    const result = await mailRepo.getMailBySenderAccount(orgId, prcId, keys, accountNumber);
    res.status(200).json(result);
};

module.exports.creditorAnalysisDetailsEmailBySender = async (req, res) => {
    const result = await mailRepo.creditorBySender(req.params.orgId, req.params.prcId, req.params.accountNumber);
    res.status(200).json(result);
};

module.exports.creditorAnalysisDetailsEmailByWord = async (req, res) => {
    const result = await mailRepo.creditorByWord(req.params.orgId, req.params.prcId, keys, req.params.accountNumber);
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

module.exports.mailJustRelevantByAccount = async (req, res) => {
    const result = await mailRepo.mailJustRelevantByAccount(req.params.orgId, req.params.prcId, req.params.accountNumber);
    res.status(200).json(result);
};

module.exports.getAttachments = async (req, res) => {
    const result = await mailRepo.getAttachments(req.params.orgId, req.params.prcId, req.params.id);
    res.status(200).json(result);
}

module.exports.downloadAttachment = async (req, res) => {
    let id = req.params.id;
    let orgId = req.params.orgId;
    const attach = await mailRepo.getOneAttachment(orgId, id);
    // let filePath = path.join(__dirname, '../../../', env.uploadPath, fileName);
    let filePath = attach?.pstFilename;
    res.download(filePath);
}
//#endregion email analysis