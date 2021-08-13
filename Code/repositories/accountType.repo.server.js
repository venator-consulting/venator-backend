const AccountType = require("../models/accountType.model.server");
const { Op } = require("sequelize");

module.exports.fetchAll = async () => {
  return await AccountType.getAccountType().findAll();
};

module.exports.getByProcedureId = async (procedureId) => {
  return await AccountType.getAccountType().findAll({
    where: {
      ProcedureId: procedureId,
    },
  });
};

module.exports.insert = async (docType) => {
  return await AccountType.getAccountType().create(docType);
};

module.exports.update = async (docType) => {
  return await AccountType.getAccountType().update(docType, {
    where: {
      id: docType.id,
    },
  });
};

module.exports.delete = async (id) => {
  return await AccountType.getAccountType().destroy({
    where: {
      id: id,
    },
  });
};

module.exports.createDefault = async () => {
  return await AccountType.getAccountType().bulkCreate([
    {
      AccountTypeName: "Debitor",
    },
    {
      AccountTypeName: "Kreditor",
    },
    {
      AccountTypeName: "Sachkonto",
    },
    {
      AccountTypeName: "Finanzkonto",
    },
  ]);
};
