const Excel = require('exceljs');
const Workbook = new Excel.Workbook();
const fs = require("fs");


const options = {
    // map(value, index) {
    //   switch(index) {
    //     case 0:
    //       // column 1 is string
    //       return value;
    //     case 1:
    //       // column 2 is a date
    //       return new Date(value);
    //     case 2:
    //       // column 3 is JSON of a formula value
    //       return JSON.parse(value);
    //     default:
    //       // the rest are numbers
    //       return parseFloat(value);
    //   }
    // },
    dateFormats: ['DD.MM.YYYY'],
    parserOptions: {
        delimiter: ';',
        quote: false,
    },
};


module.exports.readCsvFile = async function (excelFilePath) {

    const stream = fs.createReadStream(excelFilePath);
    console.log('file path is: ' + excelFilePath);
    
    const sheet = await Workbook.csv.read(stream, options);
    console.log(sheet.actualRowCount);
    let col1 = sheet.getRow(1).getCell(1).value;
    //  for (let i = 1; i <= sheet.rowCount; i++) {
    //   console.log(sheet.getRow(i).getCell(1).value);
    //   console.log(sheet.getRow(i).getCell(2).value);
    //  }

}