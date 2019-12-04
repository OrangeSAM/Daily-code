var startTime = new Date().getTime();

var db = connect("company");
// var rs = db.randInfo.find({ userName: "btbzpht", random0: 979625 });
var rs = db.randInfo
  .find({ userName: "btbzpht", randNum0: 979625 })
  .hint({ randNum0: 1 });
// 先使用randNum0 数字索引, 提速

rs.forEach(e => {
  printjson(e);
});
var runTime = new Date().getTime() - startTime;
print(runTime);

// 建索引代码
// db.randInfo.ensureIndex({userName: 1})
// 获取现有索引
// db.randInfo.getIndexes()

// 复合索引
// 即多加哥键值对;

// 删除索引 参数应为name, 而不是key
// db.randInfo.dropIndex('userName_1')
