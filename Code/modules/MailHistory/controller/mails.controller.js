const mailHistoryRepo = require('../../../repositories/mails.repo.server');

module.exports.getAll = async (req, res) => {
    const orgId = req.params.orgId;
    const prcId = req.params.prcId;
    const result = await mailHistoryRepo.fetchAll(orgId, prcId);
    res.status(200).json(result);
};