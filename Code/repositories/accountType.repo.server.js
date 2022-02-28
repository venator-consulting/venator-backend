const AccountType = require("../models/accountType.model.server");
// const { Op } = require("sequelize");

module.exports.fetchAll = async () => {
  return await AccountType.getAccountType().findAll();
};

/**
 * @deprecated not used ever
 * @param {Number} procedureId 
 * @returns 
 */
module.exports.getByProcedureId = async (procedureId) => {
  return await AccountType.getAccountType().findAll({
    where: {
      ProcedureId: procedureId,
    },
  });
};

/**
 * @deprecated not used ever
 * @param {any} accountType object 
 * @returns 
 */
module.exports.insert = async (accountType) => {
  return await AccountType.getAccountType().create(accountType);
};

/**
 * @deprecated not used ever
 * @param {any} accountType object 
 * @returns 
 */
module.exports.update = async (accountType) => {
  return await AccountType.getAccountType().update(accountType, {
    where: {
      id: accountType.id,
    },
  });
};

/**
 * @deprecated not used ever
 * @param {Nuber} id account type id 
 * @returns 
 */
module.exports.delete = async (id) => {
  return await AccountType.getAccountType().destroy({
    where: {
      id: id,
    },
  });
};

/**
 * create default data (seeding)
 * @returns void
 */
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
