var startTime = new Date().getTime();

var db = connect("company");
var rs = db.randInfo.find({ userName: "g2xrl2svutc" });

rs.forEach(e => {
  printjson(e);
});
var runTime = new Date().getTime() - startTime;
print(runTime);

// 建索引代码
// db.randInfo.ensureIndex({userName: 1})
// 获取现有索引
// db.randInfo.getIndexes()
