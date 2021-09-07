const Exception = require("../helpers/errorHandlers/Exception");
const httpStatus = require("../models/enums/httpStatus");
const Procedure = require("../models/procedures.model.server");

module.exports.fetchAll = async () => {
  const res = await Procedure.getProcedures().findAll({
    where: {
      deleted: false,
    },
  });
  return res;
};

module.exports.getByOrgId = async (id) => {
  const res = await Procedure.getProcedures().findAll({
    where: {
      OrganisationId: id,
      deleted: false,
    },
  });
  return res;
};

module.exports.fetchOne = async (id) => {
  const res = await Procedure.getProcedures().findAll({
    where: {
      deleted: false,
      id: id,
    },
  });
  if (!res || !res.length) {
    throw new Exception(httpStatus.BAD_REQUEST, 'PROCEDURE_NOT_FOUND');
  }
  return res[0];
};

/**
 * @deprecated please use getByOrgId
 * @param {*} managerId
 */
module.exports.getManagerProcedures = async (managerId) => {
  const res = await Procedure.getProcedures().findAll({
    where: {
      deleted: false,
      userId: managerId,
    },
  });
  return res;
};

module.exports.insert = async (model) => {
  model.status = 'NOT_IMPORTED';
  const result = await Procedure.getProcedures().create(model);
  return result;
}; // end of function

module.exports.update = async (model, id) => {
  const result = await Procedure.getProcedures().update(model, {
    where: {
      id: id,
    },
  });
  return result;
}; // end of update

module.exports.delete = async (id) => {
  const result = await Procedure.getProcedures().update(
    {
      deleted: true,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
};

module.exports.resetProcedure = async function (orgId, prcId) {
  const query1 = `DELETE FROM posting_${orgId} WHERE procedureId = ${prcId} `;
  const query2 = `DELETE FROM accounts_${orgId} WHERE procedureId = ${prcId}`;
  const query3 = `DELETE FROM text_analysis_account_${orgId} WHERE procedureId = ${prcId}`;
  const query4 = `DELETE FROM text_analysis_word_${orgId} WHERE procedureId = ${prcId} `;
  const query5 = `DELETE FROM amount_analysis_${orgId} WHERE procedureId = ${prcId} `;
  const query6 = `DELETE FROM creditLines_${orgId} WHERE procedureId = ${prcId}`;
  const connection = require("../config/mysql.config").getConnection();
  await Promise.all([connection.execute(query1),
                      connection.execute(query2), connection.execute(query3), 
                      connection.execute(query4), connection.execute(query5),
                       connection.execute(query6),
                      this.update({status: 'NOT_IMPORTED'}, prcId)]);
  return;
};
