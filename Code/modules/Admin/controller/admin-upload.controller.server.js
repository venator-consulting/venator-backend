const excelHelper = require("../../../helpers/excel.helper.server");
const csvStreamHelper = require("../../../helpers/csv.stream.helper.server");
const wMobelTemplate = require("../../../models/templates/sap.wmobel.template");
const cinramTemplate = require("../../../models/templates/sap.cinram.template");
const defaultAccountTemplate = require("../../../models/templates/accounts.default.template");
const Procedure = require('../../../models/procedures.model.server');
const errors = require('../../../models/enums/errors');

const fs = require("fs");


const Exception = require("../../../helpers/errorHandlers/Exception");
const httpStatus = require("../../../models/enums/httpStatus");

module.exports.getTemplateTypes = async function (req, res) {
  const templateTypes = require("../../../models/enums/template.type");
  res.status(200).json(templateTypes);
};

module.exports.headerFile = async function (req, res, next) {
  const file = req.file;
  const filePath = file.path;
  // if (!req.body.data) {
  //   throw new Exception(httpStatus.BAD_REQUEST, errors.no_template_selected);
  // }
  if (!req.file) {
    throw new Exception(httpStatus.BAD_REQUEST, errors.no_file_selected);
  }
  const reqData = JSON.parse(req.body.data);
  const fileType = reqData.fileType;
  const fileClass = reqData.fileClass;
  const local = reqData.local;
  const accountType = reqData.accountType;
  const template = reqData.template;
  let defaultTemplate = {};
  // posting default template
  if (template == 1 && fileClass == 2) {
    defaultTemplate = wMobelTemplate;
  }
  // accounts set template
  else if (template == 1 && fileClass == 1) {
    defaultTemplate = defaultAccountTemplate;
  } else if (template == 2 && fileClass == 2) {
    defaultTemplate = cinramTemplate.posting;
  } else {
    defaultTemplate = {};
  }
  // if file type === 1 then is it an excel file
  if (fileType == 1) {
    // excel file
    excelHelper
      .readHeader(filePath)
      .then((header) => {
        res.status(200).json({
          fileName: filePath,
          orginalName: file.originalname,
          headers: header,
          defaultTemplate: defaultTemplate,
        });
      })
      .catch((er) => {
        res.status(500).json(er);
      });
  } else if (fileType == 2) {
    // it's a csv file
    csvStreamHelper
      .readHeader(filePath)
      .then((header) => {
        res.status(200).json({
          fileName: filePath,
          orginalName: file.originalname,
          headers: header,
          defaultTemplate: defaultTemplate,
        });
      })
      .catch((er) => {
        res.status(500).json(er);
      });
  } else {
    throw new Exception(httpStatus.BAD_REQUEST, 'invalid_file_type');
  }
};

module.exports.importFile = async function (req, res, next) {

  // res.set('Content-Type', 'text/event-stream;charset=utf-8');
  // res.set('Cache-Control', 'no-transform');
  // res.setHeader('X-Accel-Buffering', 'no');
  // res.flushHeaders();

  if (!!req.body.data) {
    // return data form error
  }
  // const reqData = JSON.parse(req.body.data);
  const reqData = req.body.data;
  const filePath = reqData.filePath;
  const fileType = reqData.fileType;
  const fileClass = reqData.fileClass;
  const local = reqData.local == 1 ? "en_US" : "de_DE";
  const accountType = reqData.accountType;
  const template = reqData.template;
  const OrganisationId = reqData.OrganisationId;
  const procedureId = reqData.procedureId;
  // if file type === 1 then is it an excel file
  if (fileType == 1) {
    // excel posting file
    if (fileClass == 2) {
      excelHelper
        .importStreamExcelFile(
          // res,
          filePath,
          OrganisationId,
          procedureId,
          template,
          -1
        )
        .then(async (header) => {
          await Procedure.getProcedures().update({ status: 'IMPORTED' }, {
            where: {
              id: procedureId,
            },
          });
          fs.unlinkSync(filePath);
          res.status(200).json({
            message: "imported successfully",
          });
        })
        .catch((er) => {
          res.status(500).json(er);
        });
      // excel accounts file
    } else if (fileClass == 1) {
      // it's an accounts file
      excelHelper
        .importStreamAccountsExcel(
          filePath,
          OrganisationId,
          procedureId,
          accountType,
          template
        )
        .then((header) => {
          fs.unlinkSync(filePath);
          res.status(200).json({
            message: "imported successfully",
          });
        })
        .catch((er) => {
          res.status(500).json(er);
        });
      // excel head file
    } else if (fileClass == 3) {
      // it's a head file
      res.status(200).json({
        message: "not implemented yet",
      });
    } else {
      throw new Exception(httpStatus.BAD_REQUEST, errors.invalid_file_class);
    }
  } else if (fileType == 2) {
    // accounts file
    if (fileClass == 1) {
      csvStreamHelper
        .importAccountCsvFile(
          filePath,
          OrganisationId,
          procedureId,
          accountType,
          template
        )
        .then((header) => {
          fs.unlinkSync(filePath);
          res.status(200).json({
            message: "imported successfully",
          });
        })
        .catch((er) => {
          res.status(500).json(er);
        });
    } else if (fileClass == 2) {
      // it's a posting file
      csvStreamHelper
        .readCsvStream(
          filePath,
          OrganisationId,
          procedureId,
          template,
          -1,
          local
        )
        .then(async (header) => {
          await Procedure.getProcedures().update({ status: 'IMPORTED' }, {
            where: {
              id: procedureId,
            },
          });
          fs.unlinkSync(filePath);
          res.status(200).json({
            message: "imported successfully",
          });
        })
        .catch((er) => {
          res.status(500).json(er);
        });
    } else if (fileClass == 3) {
      // it's a head file
      res.status(200).json({
        message: "not implemented yet",
      });
    } else {
      // return error file class
      throw new Exception(httpStatus.BAD_REQUEST, errors.invalid_file_class);
    }
  } else {
    throw new Exception(httpStatus.BAD_REQUEST, errors.invalid_file_type);
  }
};

module.exports.deleteFileFromServier = async function (req, res) {
  let message = "file not found";
  if (req.body.nameOnServer) {
    fs.unlinkSync(req.body.nameOnServer);
    message = "the file deleted successfully";
  }
  res.status(200).json(message);
};
