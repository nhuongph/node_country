const XLSX = require('xlsx');
const FS = require('fs');
const PATH = 'city.txt';

let workbook = XLSX.readFile('global-city-population-estimates.xls');
let sheetNameList = workbook.SheetNames;
let sheet2 = workbook.Sheets[sheetNameList[1]];

let data = XLSX.utils.sheet_to_json(sheet2, {header: 1, range: 0});
let count = 1;
let header = ['STT', data[0][0], data[0][1]];

FS.writeFileSync(PATH, header, 'utf8');
delete data[0];

data.forEach(function (row) {
  if (row[0] && row[1]) {
    data = '\n' + count++ + '. \t' + row[0] + '\t\t' + row[1];
    FS.appendFileSync(PATH, data, 'utf8');
  }
});
