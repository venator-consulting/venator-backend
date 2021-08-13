const httpStatusCode = require("../../models/enums/httpStatus");
const { errorHandler } = require("../error.handler.server");

class Exception extends Error {
  constructor(httpStatus = httpStatusCode.BAD_REQUEST, msg = "Bad Request") {
    super();
    this.isCustom = true;

    this.httpStatus = httpStatus;
    this.msg = msg;
  }

  static requestDefaultHandler(err, req, res, next) {
    errorHandler("Error", err);
    if (err.isCustom !== true) {
      console.error(err);
      err.httpStatus = httpStatusCode.INTERNAL_SERVER_ERROR;
      err.msg = "Server Error";
    }

    if (!res.headersSent) {
      res.status(err.httpStatus).json({ msg: err.msg });
    }
    console.error(err);
  }

  static defaultHandler(err) {
    console.error(err);
    errorHandler("Error", err);
    // process.exit(1);
  }
}

module.exports = Exception;
