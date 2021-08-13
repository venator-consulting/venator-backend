const postngRepo = require("../../../repositories/posting.repo.server");
const exportHelper = require("../../../helpers/export.helper");

module.exports.fetch = async (req, res) => {
  const criteria = req.query;
  const result = await postngRepo.fetch(criteria);
  res.status(200).json(result);
};

module.exports.exportAsExcel = async (req, res) => {
  const fileUrl = await exportHelper.exportFile(
    req.params.tableName,
    req.params.OrganisationId,
    req.params.ProcedureId,
    req.query,
    (fileUrl) => {
      res.status(200).json(fileUrl);
    }
  );
};

module.exports.susaDateRange = async (req, res) => {
  const result = await postngRepo.susaDateRange(
    req.params.orgId,
    req.params.prcId
  );
  res.status(200).json(result);
};

module.exports.susaAnalysis = async (req, res) => {
  if (!req.params.fromDate || !req.params.toDate) {
    const dateRange = await postngRepo.susaDateRange(
      req.params.orgId,
      req.params.prcId
    );
    req.params.fromDate = req.params.fromDate
      ? req.params.fromDate
      : dateRange[0].mindate;
    req.params.toDate = req.params.toDate
      ? req.params.toDate
      : dateRange[0].maxdate;
  }
  const criteria = req.query;
  const result = await postngRepo.susaAnalysis(
    req.params.orgId,
    req.params.prcId,
    req.params.fromDate,
    req.params.toDate,
    criteria
  );
  res.status(200).json(result);
};
