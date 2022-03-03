const DocType = require("../models/documentType.model.server");
const { Op } = require("sequelize");

/**
 * get all document types
 * @returns 
 */
module.exports.fetchAll = async () => {
  return await DocType.getDocumentType().findAll();
};

/**
 * Not used yet
 * @param {*} procedureId 
 * @returns 
 */
module.exports.getByProcedureId = async (procedureId) => {
  return await DocType.getDocumentType().findAll({
    where: {
      ProcedureId: procedureId,
    },
  });
};

/**
 * Not used yet
 * @param {*} docType 
 * @returns 
 */
module.exports.insert = async (docType) => {
  return await DocType.getDocumentType().create(docType);
};

/**
 * Not used yet
 * @param {*} docType 
 * @returns 
 */
module.exports.update = async (docType) => {
  return await DocType.getDocumentType().update(docType, {
    where: {
      id: docType.id,
    },
  });
};

/**
 * Not used yet
 * @param {*} id 
 * @returns 
 */
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
