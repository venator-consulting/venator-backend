const excelHelper = require('../../../helpers/excel.helper.server');
const csvStreamHelper = require('../../../helpers/csv.stream.helper.server');
const wMobelTemplate = require('../../../models/templates/sap.wmobel.template');
const cinramTemplate = require('../../../models/templates/sap.cinram.template');
const defaultAccountTemplate = require('../../../models/templates/accounts.default.template');

const sendMail = require('../../../config/mailer.config').sendMail;
const logger = require('../../../config/logger.config').logger;
const env = require('../../../config/environment');

const fs = require('fs');



module.exports.getTemplateTypes = async function (req, res) {
    try {
        const templateTypes = require('../../../models/enums/template.type');
        res
            .status(200)
            .json(templateTypes);
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> admin upload controller </h3 >
            <p> get template types </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res
            .status(500)
            .json({
                error: error.message,
            });
    }
};


module.exports.headerFile = async function (req, res, next) {
    try {
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
        } else {
            // return error file type
            res
                .status(400)
                .json({
                    error: 'Please choose a file type: CSV OR Excel',
                });
        }
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> admin upload controller </h3 >
            <p> get header file </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res
            .status(500)
            .json({
                error: error.message,
            });
    }
};


module.exports.importFile = async function (req, res, next) {
    try {
        if (!!req.body.data) {
            // return data form error
        }
        // const reqData = JSON.parse(req.body.data);
        const reqData = req.body.data;
        const filePath = reqData.filePath;
        const fileType = reqData.fileType;
        const fileClass = reqData.fileClass;
        const local = reqData.local == 1 ? 'en_US' : 'de_DE';
        const accountType = reqData.accountType;
        const template = reqData.template;
        const OrganisationId = reqData.OrganisationId;
        const procedureId = reqData.procedureId;
        // if file type === 1 then is it an excel file
        if (fileType == 1) {
            // excel posting file
            if (fileClass == 2) {
                excelHelper
                    .importStreamExcelFile(filePath, OrganisationId, procedureId, template, -1)
                    .then(header => {
                        fs.unlinkSync(filePath);
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
                    .importStreamAccountsExcel(filePath, OrganisationId, procedureId, accountType)
                    .then(header => {
                        fs.unlinkSync(filePath);
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
                    .importAccountCsvFile(filePath, OrganisationId, procedureId, accountType, template)
                    .then(header => {
                        fs.unlinkSync(filePath);
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
                    .readCsvStream(filePath, OrganisationId, procedureId, template, -1, local)
                    .then(header => {
                        fs.unlinkSync(filePath);
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
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> admin upload controller </h3 >
            <p> import file </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res
            .status(500)
            .json({
                error: error.message,
            });
    }
};

module.exports.deleteFileFromServier = async function (req, res) {
    try {
        let message = "file not found";
        if (req.body.nameOnServer) {
            fs.unlinkSync(req.body.nameOnServer);
            message = "the file deleted successfully";
        }
        res
            .status(200)
            .json(message);
    } catch (error) {
        await sendMail({
            from: 'Venator, Bug reporting',
            to: env.developerMail,
            subject: 'exception stack trace',
            html: ` 
            <div>
            <h3> admin upload controller </h3 >
            <p> Delete file from the server </p>
            <p> -----------------------------------------------------------------------------------------</p>
            <p> ${error} </p>
            </div>`,
        });
        logger.error(`${new Date()}: ${error}`);
        res
            .status(500)
            .json({
                error: error.message,
            });
    }
}