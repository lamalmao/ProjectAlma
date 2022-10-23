const XLSX = require('xlsx');
const path = require('path');

function parseExcelFile(file) {
  let p = path.join(process.cwd(), 'public', 'schedule', file);
  console.log(p);
  let workbook = XLSX.readFile(p),
    sheet_name_list = workbook.SheetNames,
    xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  return xlData;
}

module.exports = parseExcelFile;