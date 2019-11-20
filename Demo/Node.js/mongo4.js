// db.runCommand({ping: 1})
// 监测数据库是否链接成功

var myModify = {
  findAndModify: "workmate",
  query: { name: "JSPang" },
  update: { $set: { age: 30 } },
  new: true
};

var resultMessage = db.runCommand(myModify);
printjson(resultMessage);
