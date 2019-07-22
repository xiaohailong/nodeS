const fs = require('fs');
module.exports = {
    writeFile: function (filePath, data) {
        fs.writeFile(filePath, JSON.stringify(data), function (err) {
            if (err) {
                return console.error(err);
            } else {
                console.log("数据写入成功！");
            }
        });
    },
    readFile: function (filePath, res) {
        fs.readFile(filePath, (err, data) => {
            // 如果有问题返回 404
            if (err) {
                res.status(404);
                res.send("404 - File is not found!");
                res.end();
                // 没问题返回文件内容
            } else {
                res.status(200);
                res.send(data);
                res.end();
            }
        })
    }
};