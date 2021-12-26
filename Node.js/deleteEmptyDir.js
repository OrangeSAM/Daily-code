const fs = require("fs");

fs.readdir(__dirname, function (err, files) {
  if (err) {
    console.log(err);
  } else {
    // 对执行目录下获得的文件进行遍历处理
    Array.prototype.forEach.call(files, function (item) {
      // 判断每一项的类型
      fs.stat(`${__dirname}/${item}`, function (err, state) {
        if (err) {
          console.log(err);
        } else {
          // 如果是目录
          if (state.isDirectory()) {
            // 读取目录下的内容
            fs.readdir(`${__dirname}/${item}`, function(err, dirs) {
              if (err) {
                console.log(err)
              } else {
                // 判断该目录下是否有内容
                if (dirs.length === 0) {
                  fs.rmdir(`${__dirname}/${item}`, function(err) {
                    if (err) {
                      console.log(err)
                    }
                  })
                }
              }
            })
          }
        }
      });
    });
  }
});
