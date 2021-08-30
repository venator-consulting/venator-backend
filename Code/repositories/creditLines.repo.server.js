const { Op, fn, col, QueryTypes } = require("sequelize");
const Sequelize = require("../config/sequelize.config");

const sequelize = Sequelize.getSequelize();
const CreditLines = require("../models/creditLines.model.server");

module.exports.getCreditLines = async (orgId, prcId) => {
  let query = `SELECT DISTINCT p.accountNumber, p.accountName, c.procedureId, c.creditLineFromDate , c.id, c.creditLineToDate , c.creditLine FROM 
                        posting_${orgId} p
                        left outer join
                        ( select * from creditLines_${orgId} WHERE procedureId = :procedureId ) c
                        on p.accountNumber = c.accountNumber
                        WHERE p.procedureId = :procedureId 
                        AND UPPER(p.accountTypeNewName) = 'FINANZKONTO'`;

  const result = sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });
  return result;
};

module.exports.getAll = async (orgId, prcId) => {
  let query = `SELECT DISTINCT p.accountNumber, p.accountName, c.procedureId, c.creditLineFromDate , c.id, c.creditLineToDate , c.creditLine FROM 
                        posting_${orgId} p
                        join
                        creditLines_${orgId} c
                        on p.accountNumber = c.accountNumber
                        WHERE p.procedureId = :procedureId 
                        AND UPPER(p.accountTypeNewName) = 'FINANZKONTO'
                        and (c.procedureId = :procedureId OR c.procedureId = :procedureId)`;

  const result = sequelize.query(query, {
    replacements: {
      procedureId: prcId,
    },
    type: QueryTypes.SELECT,
  });
  return result;
};

module.exports.getByAccountNumber = async (orgId, prcId, accountNumber) => {
  return await CreditLines.getCreditLines("creditLines_" + orgId).findAll({
    where: {
      procedureId: prcId,
      accountNumber: accountNumber,
    },
  });
};

module.exports.insert = async (orgId, prcId, creditLine) => {
  if (!creditLine.procedureId) creditLine.procedureId = prcId;

  return await CreditLines.getCreditLines("creditLines_" + orgId).create(
    creditLine
  );
};

module.exports.update = async (orgId, prcId, creditLine) => {
  if (!creditLine.procedureId) creditLine.procedureId = prcId;

  return await CreditLines.getCreditLines("creditLines_" + orgId).update(
    creditLine
  );
};

module.exports.save = async (orgId, prcId, creditLine) => {
  if (!creditLine.procedureId) creditLine.procedureId = prcId;

  return await CreditLines.getCreditLines("creditLines_" + orgId).upsert(
    creditLine
  );
};

module.exports.delete = async (orgId, id) => {
  return await CreditLines.getCreditLines("creditLines_" + orgId).destroy({
    where: {
      id: id,
    },
  });
};
