const excelHelper = require('../../../helpers/excel.helper.server');
const csvHelper = require('../../../helpers/csv.helper.server');


module.exports.getHeaderExcel = function (req, res, next) {
    const csvFile = req.file;
    const filePath = csvFile.path;
    excelHelper
        .readHeader(filePath)
        .then(header => {
            res
                .status(200)
                .json({
                    fileName: csvFile.filename,
                    orginalName: csvFile.originalname,
                    headers: header
                });

        });
};

module.exports.getTemplateTypes = function (req, res) {
    const templateTypes = require('../../../models/enums/template.type');
    res
        .status(200)
        .json(templateTypes);
};

module.exports.uploadExcel = function (req, res, next) {
    const excelFile = req.file;
    // first of all check if the file uploaded successfully!

    // to check if the mime ype is valid!
    const mimeType = excelFile.mimeType;
    // get the path to open the stream from the server
    const filePath = excelFile.path;
    console.log('uploaded files: ' + JSON.stringify(req.file, null, 2));
    excelHelper
        .readExcelFile(filePath)
        .then(done => {
            res
                .status(200)
                .json('done');

        });

};


module.exports.getHeaderCsv = function (req, res, next) {
    console.log("csv header requested");
    const csvFile = req.file;
    const filePath = csvFile.path;
    csvHelper
        .readHeader(filePath)
        .then(header => {
            res
                .status(200)
                .json({
                    fileName: csvFile.filename,
                    orginalName: csvFile.originalname,
                    headers: header
                });

        });
};


module.exports.uploadCsv = function (req, res, next) {
    const csvFile = req.file;
    // first of all check if the file uploaded successfully!

    // to check if the mime ype is valid!
    const mimeType = csvFile.mimeType;
    // get the path to open the stream from the server
    const filePath = csvFile.path;
    console.log('uploaded files: ' + JSON.stringify(req.file, null, 2));
    csvHelper
        .readCsvFile(filePath)
        .then(done => {
            if (!!done.error) {
                res
                    .status(500)
                    .json(done.error);
            } else {
                res
                    .status(200)
                    .json('done');
            }
        })
        .catch(er => {
            res
                .status(500)
                .json(er);
        });
};


module.exports.uploadAccountCsv = function (req, res, next) {
    const csvFile = req.file;
    // first of all check if the file uploaded successfully!

    // to check if the mime ype is valid!
    const mimeType = csvFile.mimeType;
    // get the path to open the stream from the server
    const filePath = csvFile.path;
    let accountType = null;
    if (req && req.data)
        accountType = req.accountType;
    else accountType = 1;

    console.log('uploaded files: ' + JSON.stringify(req.file, null, 2));
    csvHelper
        .importAccountCsvFile(filePath, accountType)
        .then(done => {
            if (!!done.error) {
                res
                    .status(500)
                    .json(done.error);
            } else {
                res
                    .status(200)
                    .json('done');
            }
        })
        .catch(er => {
            res
                .status(500)
                .json(er);
        });
};


module.exports.uploadAccountExcel = function (req, res, next) {
    const csvFile = req.file;
    // first of all check if the file uploaded successfully!

    // to check if the mime ype is valid!
    const mimeType = csvFile.mimeType;
    // get the path to open the stream from the server
    const filePath = csvFile.path;
    let accountType = null;
    if (req && req.data)
        accountType = req.accountType;
    else accountType = 1;

    console.log('uploaded files: ' + JSON.stringify(req.file, null, 2));
    excelHelper
        .importAccountExcelFile(filePath, accountType)
        .then(done => {
            res
                .status(200)
                .json('done');

        });
};