const postngRepo = require("../../../repositories/posting.repo.server");
const errorHandler = require('../../../helpers/error.handler.server').errorHandler;

module.exports.fetch = async (req, res) => {
    try {
        const criteria = req.query;
        const result = await postngRepo.fetch(criteria);
        res
            .status(200)
            .json(result);
    } catch (error) {
        errorHandler('posting data controller: fetch data', error);
        res.status(500).json(error);
    }
};



module.exports.exportAsExcel = async (req, res) => {
    try {
        const fileUrl = await exportHelper.exportFile(req.params.tableName, req.params.OrganisationId, req.params.ProcedureId, (fileUrl) => {
            res
                .status(200)
                .json(fileUrl);
        });

    } catch (error) {
        errorHandler('posting data controller: export as excel', error);
        res.status(500).json(error);
    }
};