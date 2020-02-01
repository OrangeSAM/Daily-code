// 数组查询

var db = connect("company");

db.workmate.find(
  { interest: ["画画"] },
  { name: 1, interest: 1, age: 1, _id: 0 }
);
// 有[] 即完全匹配, 去掉即模糊搜索

// $all 都满足 既看电影又看书
db.workmate.find(
  { interest: { $all: ["看电影", "看书"] } },
  { name: 1, interest: 1, age: 1, _id: 0 }
);

// $in 看电影 或者 看书
db.workmate.find(
  { interest: { $in: ["看电影", "看书"] } },
  { name: 1, interest: 1, age: 1, _id: 0 }
);

// $size 长度(个数)为5
db.workmate.find(
  { interest: { $size: 5 } },
  { name: 1, interest: 1, age: 1, _id: 0 }
);

// $slice 数组切片显示
db.workmate.find(
  { interest: { $size: 5 } },
  { name: 1, interest: { $slice: 1 }, age: 1, _id: 0 }
);

// 分页 年龄升序
db.workmate
  .find({}, { name: true, age: true, _id: 0 })
  .limit(2)
  .skip(0)
  .sort({ age: 1 });

// $where
db.workmate.find({ $where: "this.age>30" }, { name: true, age: true, _id: 0 });
