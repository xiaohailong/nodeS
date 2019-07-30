const fs = require('fs');
const path = require('path');

let apiPath = path.join(process.cwd(), '/api');
console.log(apiPath);
let resapi = {}
let fileList = [];
fileList = fs.readdirSync(apiPath);
fileList.forEach((function (item) {
  // console.log(fs.readFileSync(path.join(apiPath, item)).toString(), 111)
  // resapi[item] = JSON.stringify(fs.readFileSync(path.join(apiPath, item)));

  resapi[item] = JSON.parse(fs.readFileSync(path.join(apiPath, item), 'utf-8'));
  console.log(resapi[item], 123)

}));

module.exports = resapi;