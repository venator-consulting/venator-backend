const excelHelper = require('../../../helpers/excel.helper.server');
const csvHelper = require('../../../helpers/csv.helper.server');
const csvStreamHelper = require('../../../helpers/csv.stream.helper.server');
const wMobelTemplate = require('../../../models/templates/sap.wmobel.template');


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


module.exports.uploadCsvStream = function (req, res, next) {
    const csvFile = req.file;
    // first of all check if the file uploaded successfully!

    // to check if the mime ype is valid!
    const mimeType = csvFile.mimeType;
    // get the path to open the stream from the server
    const filePath = csvFile.path;
    console.log('uploaded files: ' + JSON.stringify(req.file, null, 2));
    csvStreamHelper
        .readCsvStream(filePath)
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


module.exports.headerFile = function (req, res, next) {
    const file = req.file;
    const filePath = file.path;
    if (!!req.data) {
        // return data form error
    }
    if (!!req.file) {
        // return file error
    }
    const reqData = JSON.parse(req.body.data);
    const fileType = reqData.fileType;
    const fileClass = reqData.fileClass;
    const local = reqData.local;
    const accountType = reqData.accountType;
    const template = reqData.template;
    let defaultTemplate = {};
    if(!template || template == 1) {
        defaultTemplate = wMobelTemplate;
    }
    // if file type === 1 then is it an excel file
    if (fileType == 1) {
        // excel accounts file
        // if (fileClass == 1) {
        excelHelper
            .readHeader(filePath)
            .then(header => {
                res
                    .status(200)
                    .json({
                        fileName: filePath,
                        orginalName: file.originalname,
                        headers: header,
                        defaultTemplate: defaultTemplate
                    });

            })
            .catch(er => {
                res
                    .status(500)
                    .json({
                        error: er
                    });
            });
        // } else if (fileClass == 2) {
        //     // it's a posting file
        // } else if (fileClass == 3) {
        //     // it's a head file
        // } else {
        //     // return error file class
        // }

    } else if (fileType == 2) {
        // it's a csv file
        csvStreamHelper
            .readHeader(filePath)
            .then(header => {
                res
                    .status(200)
                    .json({
                        fileName: filePath,
                        orginalName: file.originalname,
                        headers: header,
                        defaultTemplate: defaultTemplate
                    });

            })
            .catch(er => {
                res
                    .status(500)
                    .json({
                        error: er
                    });
            })
        // accounts file
        // if (fileClass == 1) {

        // } else if (fileClass == 2) {
        //     // it's a posting file
        // } else if (fileClass == 3) {
        //     // it's a head file
        // } else {
        //     // return error file class
        // }
    } else {
        // return error file type
        res
            .status(400)
            .json({
                error: 'Please choose a file type: CSV OR Excel',
            });
    }
}


module.exports.importFile = function (req, res, next) {
    if (!!req.body.data) {
        // return data form error
    }
    // const reqData = JSON.parse(req.body.data);
    const reqData = req.body.data;
    const filePath = reqData.filePath;
    const fileType = reqData.fileType;
    const fileClass = reqData.fileClass;
    const local = reqData.local === 2 ? 'de_DE' : 'en_US';
    const accountType = reqData.accountType;
    const template = reqData.template;
    // if file type === 1 then is it an excel file
    if (fileType == 1) {
        // excel posting file
        if (fileClass == 2) {
            excelHelper
                .importStreamExcelFile(filePath, template, -1)
                .then(header => {
                    res
                        .status(200)
                        .json({
                            message: 'imported successfully'
                        });

                })
                .catch(er => {
                    res
                        .status(500)
                        .json({
                            error: er
                        });
                });
                // excel accounts file
        } else if (fileClass == 1) {
            // it's an accounts file
            excelHelper
                .importStreamAccountsExcel(filePath, accountType)
                .then(header => {
                    res
                        .status(200)
                        .json({
                            message: 'imported successfully'
                        });

                })
                .catch(er => {
                    res
                        .status(500)
                        .json({
                            error: er
                        });
                });
                // excel head file
        } else if (fileClass == 3) {
            // it's a head file
            res
                .status(200)
                .json({
                    message: 'not implemented yet',
                });
        } else {
            // return error file class
            res
                .status(400)
                .json({
                    error: 'Please choose a file Class',
                });
        }

    } else if (fileType == 2) {
        // accounts file
        if (fileClass == 1) {
            csvStreamHelper
                .importAccountCsvFile(filePath, accountType, template)
                .then(header => {
                    res
                        .status(200)
                        .json({
                            message: 'imported successfully'
                        });
                })
                .catch(er => {
                    res
                        .status(500)
                        .json({
                            error: er
                        });
                });
        } else if (fileClass == 2) {
            // it's a posting file
            csvStreamHelper
                .readCsvStream(filePath, template, -1, local)
                .then(header => {
                    res
                        .status(200)
                        .json({
                            message: 'imported successfully'
                        });

                })
                .catch(er => {
                    res
                        .status(500)
                        .json({
                            error: er
                        });
                });
        } else if (fileClass == 3) {
            // it's a head file
            res
                .status(200)
                .json({
                    message: 'not implemented yet',
                });
        } else {
            // return error file class
            res
                .status(400)
                .json({
                    error: 'Please choose a file Class',
                });
        }
    } else {
        // return error file type
        res
            .status(400)
            .json({
                error: 'Please choose a file type: CSV OR Excel',
            });
    }
}