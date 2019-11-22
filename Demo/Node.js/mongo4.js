// db.runCommand({ping: 1})
// 监测数据库是否链接成功

// 通过findAndModify 获得来自数据库的响应

var myModify = {
  findAndModify: "workmate",
  query: { name: "JSPang" },
  update: { $set: { age: 30 } },
  new: true
};

var resultMessage = db.runCommand(myModify);
printjson(resultMessage);
