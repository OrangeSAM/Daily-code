// 读取文件流
var fs = require("fs");

// 读取文件状态
// fs.stat("demo.html", function(err, stat) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(stat.isFile());
//     console.log(stat.isDirectory());
//     if (stat.isFile()) {
//       console.log(stat.size, stat.birthtime);
//     }
//   }
// });

// 读取文件流
var rs = fs.createReadStream("index.html", "utf-8");
rs.on("data", function (chunk) {
  console.log("data", chunk);
});
rs.on("end", function () {
  console.log("end");
});
rs.on("err", function (err) {
  console.log("err", err);
});
