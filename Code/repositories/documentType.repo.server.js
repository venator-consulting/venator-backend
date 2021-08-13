const DocType = require("../models/documentType.model.server");
const { Op } = require("sequelize");

module.exports.fetchAll = async () => {
  return await DocType.getDocumentType().findAll();
};

module.exports.getByProcedureId = async (procedureId) => {
  return await DocType.getDocumentType().findAll({
    where: {
      ProcedureId: procedureId,
    },
  });
};

module.exports.insert = async (docType) => {
  return await DocType.getDocumentType().create(docType);
};

module.exports.update = async (docType) => {
  return await DocType.getDocumentType().update(docType, {
    where: {
      id: docType.id,
    },
  });
};

module.exports.delete = async (id) => {
  return await DocType.getDocumentType().destroy({
    where: {
      id: id,
    },
  });
};

module.exports.createDefault = async () => {
  return await DocType.getDocumentType().bulkCreate([
    {
      documentTypeName: "Rechnung",
    },
    {
      documentTypeName: "Zahlung",
    },
  ]);
};
