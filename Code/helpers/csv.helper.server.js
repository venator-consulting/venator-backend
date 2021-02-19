const Excel = require('exceljs');
const Workbook = new Excel.Workbook();
const fs = require("fs");

module.exports.readCsvFile = async function(excelFilePath){
    
const stream = fs.createReadStream(excelFilePath);
console.log('file path is: ' + excelFilePath);
const streamWorkBook = await Workbook.csv.read(stream);
const sheet = streamWorkBook.getWorksheet(1);
console.log(sheet.actualRowCount);
 for (let i = 1; i <= sheet.rowCount; i++) {
  console.log(sheet.getRow(i).getCell(1).value);
  console.log(sheet.getRow(i).getCell(2).value);
 }

}