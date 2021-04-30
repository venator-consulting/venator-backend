const postngRepo = require("../../../repositories/posting.repo.server");
const exportHelper = require('../../../helpers/export.helper');
const env = require('../../../config/environment');


module.exports.fetch = async (req, res) => {
    try {
        const criteria = req.query;
        const result = await postngRepo.fetch(criteria);
        res
            .status(200)
            .json(result);
    } catch (er) {
        res
            .status(500)
            .json(er.message);
    }
};



module.exports.exportAsExcel = async (req, res) => {
    try {
        const fileUrl = await exportHelper.exportFile(req.params.tableName, req.params.OrganisationId, req.params.ProcedureId, (fileUrl) => {
            res
                .status(200)
                .json(fileUrl);
        });

    } catch (er) {
        res
            .status(500)
            .json(er);
    }
};