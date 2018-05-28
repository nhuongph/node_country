const XLSX = require('xlsx');
const FS = require('fs');

let workbook = XLSX.readFile('countries_of_the_world.xls');
let sheet_name_list = workbook.SheetNames;
let sheet1 = workbook.Sheets[sheet_name_list[0]];

let data = XLSX.utils.sheet_to_json(sheet1, {header: 1, range: 3});
let result = [], $count = 1;
let header = data[0][0];
result.push(header);
delete data[0];

data.forEach(function (row) {
  if (row[0]) {
    result.push($count++ + '. ' + row[0]);
  }
});

FS.writeFile('result.txt', result.join("\n"), 'utf8', function (err) {
  if (err) throw err;
  console.log('Ghi file thanh cong!');
});
