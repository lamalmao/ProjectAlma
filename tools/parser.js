const XLSX = require('xlsx');
const path = require('path');

function = parseExcelFile(file) {
  if (path.extname(pathToFile) !== 'xlsx') return false;
  let filedata = fs.readFileSync(pathToFile),
    workbook = XLSX.readFile(filedata.path),
    sheet_name_list = workbook.SheetNames,
    xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  return xlData;
}