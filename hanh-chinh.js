const XLSX = require('xlsx');
const FS = require('fs');
const PATH = 'hanh-chinh.txt';

let workbook = XLSX.readFile('Dia-Gioi-Hanh-Chinh-VietNam.xls');
let sheetNameList = workbook.SheetNames;
let sheet3 = workbook.Sheets[sheetNameList[2]];

let data = XLSX.utils.sheet_to_json(sheet3, {header: 1, range: 0});
let count = 1;
let header = ['STT', data[0][0], data[0][1]];

FS.writeFileSync(PATH, header, 'utf8');
delete data[0];

data.forEach(function (row) {
  if (row[0] && row[1]) {
    data = '\n' + count++ + '. ' + row[0] + '\t\t' + row[1];
    FS.appendFileSync(PATH, data, 'utf8');
  }
});
