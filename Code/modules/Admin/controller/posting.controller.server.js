const postingRepo = require("../../../repositories/posting.repo.server");

module.exports.getDocTypes = async (req, res) => {
  const result = await postingRepo.getDocTypes(
    req.params.orgId,
    req.params.prcdrId
  );
  res.status(200).json(result);
};

module.exports.updateDoctypes = async (req, res) => {
  const result = await postingRepo.updateDocTypeNew(
    req.params.orgId,
    req.params.prcdrId,
    req.body.documentType,
    req.body.documentTypeNewId,
    req.body.documentTypeNewName
  );
  res.status(201).json(result);
};

//#region Update dueDateNew
module.exports.updateDueDateNew = async (req, res) => {
  const { orgId, prcId, id } = req.params;
  const row = req.body;
  const result = await postingRepo.updateDueDateNew(orgId, prcId, id, row);
  res.status(201).json(result);
}
//#endregion Update dueDateNew
