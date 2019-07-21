// var express = require('express');
// var router = express.Router();




// module.exports = router;
var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');


let dataPath = path.join(process.cwd(), '/data');
console.log(dataPath);
let resData = {}
let fileList = [];
fileList = fs.readdirSync(dataPath);
fileList.forEach((function (item) {
  // console.log(fs.readFileSync(path.join(dataPath, item)).toString(), 111)
  // resData[item] = JSON.stringify(fs.readFileSync(path.join(dataPath, item)));

  resData[item] = JSON.parse(fs.readFileSync(path.join(dataPath, item), 'utf-8'));
  console.log(resData[item], 123)

}));


/* GET home page. */
router.get('/', function (req, res, next) {
  res.type('html');
  console.log(Object.assign({ title: 'Express112' }, resData));
  res.render('index', Object.assign({ title: 'Express112' }, { resData: resData }))
  // next();
});

router.post('/buildApi', function (req, res, next) {

  let data = req.body.data;


  // let filePath = path.join('data', data.name, '.json');
  // console.log(filePath, 1111)
  let path = dataPath + '/' + data.name + '.json'
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
