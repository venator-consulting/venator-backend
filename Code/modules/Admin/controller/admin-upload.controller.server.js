const excelHelper = require('../../../helpers/excel.helper.server');

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
