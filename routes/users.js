var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const fs = require('fs');
const path = require('path');
const fileHandler = require('../js/fileHandler.js');


router.get('/', function (req, res, next) {
  console.log('url', req.originalUrl)
  let filePath = path.join(process.cwd(), '/data', req.originalUrl + '.json');
  console.log(filePath)
  // let respondCon = fileHandler.readFile(filePath, res);
  // fileHandler.readFile(filePath, res);
  res.send('users');
  // fs.readFile(filePath, (err, data) => {
  //   // 如果有问题返回 404
  //   if (err) {
  //     res.status(404);
  //     res.send("404 - File is not found!");
  //     res.end();
  //     // 没问题返回文件内容
  //   } else {
  //     res.status(200);
  //     res.send(data);
  //     res.end();
  //   }
  // })
});

module.exports = router;
