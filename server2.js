const XLSX = require('xlsx');
const FS = require('fs');
const PATH = 'result2.txt';

let workbook = XLSX.readFile('countries_of_the_world.xls');
let sheet_name_list = workbook.SheetNames;
let sheet1 = workbook.Sheets[sheet_name_list[0]];

let data = XLSX.utils.sheet_to_json(sheet1, {header: 1, range: 3});
let $count = 1;

let header = data[0][0];
FS.writeFileSync(PATH, header, 'utf8');
delete data[0];

data.forEach(function (row) {
  if (row[0]) {
    data = "\n" + $count++ + '. ' + row[0];
    FS.appendFileSync(PATH, data, 'utf8');
  }
});
