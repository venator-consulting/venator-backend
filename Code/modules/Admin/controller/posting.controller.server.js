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
