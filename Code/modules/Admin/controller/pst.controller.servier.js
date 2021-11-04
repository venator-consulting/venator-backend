const pstHelper = require('../../../helpers/pst.extractor.server');
const errors = require('../../../models/enums/errors');
const fs = require("fs");

const Exception = require("../../../helpers/errorHandlers/Exception");
const httpStatus = require("../../../models/enums/httpStatus");


module.exports.importFile = function (req, res) {
    const data = req.body.data;
    const orgId = data.orgId;
    const prcId = data.prcId;
    const file = req.file;
    const filePath = file.path;
    pstHelper.extract(filePath);
    res.status(200).json('Done');
};
