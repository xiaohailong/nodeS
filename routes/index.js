// var express = require('express');
// var router = express.Router();




// module.exports = router;
var express = require('express');
var router = express.Router();
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


/* GET home page. */
router.get('/', function (req, res, next) {
  res.type('html');
  console.log(Object.assign({ title: 'Express112' }, resapi));
  res.render('index', Object.assign({ title: 'Express112' }, { resapi: resapi }))
  // next();
});

router.post('/buildApi', function (req, res, next) {

  let data = req.body.data;


  // let filePath = path.join('data', data.name, '.json');
  // console.log(filePath, 1111)
  let path = apiPath + '/' + data.name + '.json'
  console.log(data, 2222);
  console.log(path, 1111)
  // fs.writeFileSync(path, JSON.stringify(data));
  fs.writeFile(path, JSON.stringify(data.data), function (err) {
    console.log(55555)
    if (err) {
      return console.error(err);
    } else {
      console.log("数据写入成功！");
      // res.send('success')
      // return next();
    }
  });
  return res.send('ssss')
  // return next();
})

module.exports = router;
