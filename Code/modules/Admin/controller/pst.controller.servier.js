const pstHelper = require('../../../helpers/pst.extractor.server');
const errors = require('../../../models/enums/errors');
const fs = require("fs");

const Exception = require("../../../helpers/errorHandlers/Exception");
const httpStatus = require("../../../models/enums/httpStatus");


module.exports.importFile = async function (req, res) {
    const data = JSON.parse(req.body.data);
    const orgId = data.orgId;
    const prcId = data.prcId;
    const file = req.file;
    const filePath = file.path;
    await pstHelper.extract(filePath, orgId, prcId);
    res.status(200).json('Done');
};
