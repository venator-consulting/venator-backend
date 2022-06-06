const pstHelper = require('../../../helpers/pst.extractor.server');
const attachmentsParser = require('../../../helpers/pdf.parser');
const Procedure = require('../../../models/procedures.model.server');
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

module.exports.parseAttacments = async function (req, res) {
    const {orgId, prcId} = req.params;
    res.set('Content-Type', 'text/event-stream;charset=utf-8');
    res.set('Cache-Control', 'no-transform');
    res.setHeader('X-Accel-Buffering', 'no');
    res.flushHeaders();
    await attachmentsParser.parseAttacments(orgId, prcId, res);
    await Procedure.getProcedures().update({ emailAttach: true }, {
        where: { id: prcId, },
      });
};