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
