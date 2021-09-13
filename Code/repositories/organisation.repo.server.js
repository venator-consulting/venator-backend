const Posting = require("../models/posting.model.server");
const Accounts = require("../models/accounts.model.server");
const CreditLines = require("../models/creditLines.model.server");
const Organisation = require("../models/organisation.model.server");
const text_analysis_word = require("../models/textWord.model.server");
const text_analysis_account = require("../models/textAccount.model.server");
const amount_analysis = require("../models/amount.model.server");
const creditor_analysis = require("../models/creditorAnalysis.model");
const payment_analysis = require("../models/payment.model.server");
const due_date_analysis = require("../models/dueDate.model.server");
const { Op, QueryTypes } = require("sequelize");
const config = require("../config/environment");

module.exports.fetchAll = async () => {
  const orgs = await Organisation.getOrganisation().findAll({
    where: {
      deleted: false,
    },
  });
  return orgs;
};

module.exports.fetch = async (
  search = "_",
  orderBy = "name",
  order = "DESC",
  limit = 50,
  offset = 0
) => {
  const orgs = await Organisation.getOrganisation().findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          email: {
            [Op.like]: "%" + search + "%",
          },
        },
      ],
    },
    offset: offset,
    limit: limit,
    order: [[orderBy, order]],
  });
  return orgs;
};

module.exports.fetchOne = async (orgId) => {
  return await Organisation.getOrganisation().findAll({
    where: {
      deleted: false,
      id: orgId,
    },
  });
};

module.exports.insert = async (org) => {
  const result = await Organisation.getOrganisation().create(org);

  await Posting.syncPosting("posting_" + result.dataValues.id);
  await Accounts.syncAccounts("accounts_" + result.dataValues.id);
  await CreditLines.syncCreditLines("creditLines_" + result.dataValues.id);
  await text_analysis_word.syncTextWord("text_analysis_word_" + result.dataValues.id);
  await text_analysis_account.syncTextAccount("text_analysis_account_" + result.dataValues.id);
  await amount_analysis.syncAmount("amount_analysis_" + result.dataValues.id);
  await creditor_analysis.syncCreditor("creditor_analysis_" + result.dataValues.id);
  await payment_analysis.syncPayment("payment_analysis_" + result.dataValues.id);
  await due_date_analysis.syncDueDate("due_date_analysis_" + result.dataValues.id);
  const connection = require("../config/mysql.config");
  // partition table after create
  let query = `ALTER  table posting_${result.dataValues.id} PARTITION BY HASH(procedureId) PARTITIONS ${config.partitionCount}`;
  const str = connection
    .getConnection()
    .execute(query, (er, res) => console.log(er));
  return result;
}; // end of create new organisation

/**
 * @param {*} org org object or part of it
 * @param {*} orgId to use in where close
 */
module.exports.update = async (org, orgId) => {
  await Organisation.getOrganisation().update(org, {
    where: {
      id: +orgId,
    },
  });
}; // end of update organisation

module.exports.softDelete = async (orgId) => {
  return await Organisation.getOrganisation().update(
    {
      deleted: true,
    },
    {
      where: {
        id: orgId,
      },
    }
  );
};

// TO-DO prefer to use soft delete
/**
 * @deprecated prefer to use soft delete
 * @param {*} orgId
 */
module.exports.delete = async (orgId) => {
  return await Organisation.getOrganisation().destroy({
    where: {
      id: orgId,
    },
  });
};
