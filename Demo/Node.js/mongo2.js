// mongo 修改器

var db = connect("company");

// var workmate = {
//   name: "JSPang",
//   age: 33,
//   sex: 1,
//   job: "前端",
//   skill: {
//     skillOne: "HTML+CSS",
//     SkillTwo: "JavaScript",
//     SkillThree: "PHP"
//   },
//   regeditTime: new Date()
// };
// Set 修改器
// db.workmate.update({ name: "JSPang" }, { $set: { sex: 0, age: 22 } });
// 嵌套的修改
// db.workmate.update(
//   { name: "JSPang" },
//   { $set: { "skill.skillOne": "heihei" } }
// );

// $unset 修改器
// db.workmate.update({ name: "JSPang" }, { $unset: { age: "" } });

// 添加回来
// db.workmate.update({ name: "JSPang" }, { $set: { age: 20 } });

// $inc
// db.workmate.update({ name: "JSPang" }, { $inc: { age: -2 } });

// 给所有数据添加一个字段
// db.workmate.update({}, { $set: { interest: [] } }); // 这样只能加上一个
// 使用multi
// db.workmate.update({}, { $set: { interest: [] } }, { multi: true });

// upsert 如果没查到则加上
// db.workmate.update({ name: "sam" }, { $set: { age: 20 } }, { upsert: true });

// ep 8
// $push
// db.workmate.update({ name: "sam" }, { $push: { interest: "draw" } }); 数组形式
// db.workmate.update(
//   { name: "JSPang" },
//   { $push: { "skill.SkillFour": "ssss" } }
// );

// $ne  interest 里头没有playGame, 则插入game
// db.workmate.update(
//   { name: "sam", interest: { $ne: "playGame" } },
//   { $push: { interest: "game" } }
// );

// $addToSet
// db.workmate.update({ name: "JSPang" }, { $addToSet: { interest: "readBook" } });

// $each
// var newInterest = ["sing", "dance", "run"];
// db.workmate.update(
//   { name: "JSPang" },
//   { $addToSet: { interest: { $each: newInterest } } }
// );

// $pop 从末端进行删除 1   从开始位置删除-1
// db.workmate.update({ name: "JSPang" }, { $pop: { interest: 1 } });

// 数组定位修改
db.workmate.update({ name: "JSPang" }, { $set: { "interest.1": "code" } });

print("update successful");
// 为什么需要用load
