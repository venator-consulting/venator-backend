const postngRepo = require("../../../repositories/posting.repo.server");
const errorHandler = require('../../../helpers/error.handler.server').errorHandler;
const exportHelper = require('../../../helpers/export.helper');

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


module.exports.susaDateRange = async (req, res) => {
    try {
        const result = await postngRepo
            .susaDateRange(req.params.orgId, req.params.prcId);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('posting data controller: Susa analysis - get date range', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};


module.exports.susaAnalysis = async (req, res) => {
    try {
        if (!req.params.fromDate || !req.params.toDate) {
            const dateRange = await postngRepo
                .susaDateRange(req.params.orgId, req.params.prcId);
            req.params.fromDate = req.params.fromDate? req.params.fromDate : dateRange[0].mindate;
            req.params.toDate = req.params.toDate ? req.params.toDate : dateRange[0].maxdate;
        }
        const criteria = req.query;
        const result = await postngRepo
            .susaAnalysis(req.params.orgId, req.params.prcId, req.params.fromDate, req.params.toDate, criteria);
        res.status(200)
            .json(result);
    } catch (e) {
        errorHandler('posting data controller: Susa analysis - get Analysis', e);
        res
            .status(500)
            .json({
                error: e
            });
    }
};