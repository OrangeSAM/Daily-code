// 查询var
workmate1 = {
  name: "JSPang",
  age: 33,
  sex: 1,
  job: "前端",
  skill: {
    skillOne: "HTML+CSS",
    skillTwo: "JavaScript",
    skillThree: "PHP"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate2 = {
  name: "ShengLei",
  age: 31,
  sex: 1,
  job: "JAVA后端",
  skill: {
    skillOne: "HTML+CSS",
    skillTwo: "J2EE",
    skillThree: "PPT"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate3 = {
  name: "MinJie",
  age: 18,
  sex: 0,
  job: "UI",
  skill: {
    skillOne: "PhotoShop",
    skillTwo: "UI",
    skillThree: "PPT"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate4 = {
  name: "XiaoWang",
  age: 25,
  sex: 1,
  job: "UI",
  skill: {
    skillOne: "PhotoShop",
    skillTwo: "UI",
    skillThree: "PPT"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate5 = {
  name: "LiangPeng",
  age: 28,
  sex: 1,
  job: "前端",
  skill: {
    skillOne: "HTML+CSS",
    skillTwo: "JavaScript"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate6 = {
  name: "HouFei",
  age: 25,
  sex: 0,
  job: "前端",
  skill: {
    skillOne: "HTML+CSS",
    skillTwo: "JavaScript"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate7 = {
  name: "LiuYan",
  age: 35,
  sex: 0,
  job: "美工",
  skill: {
    skillOne: "PhotoShop",
    skillTwo: "CAD"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate8 = {
  name: "DingLu",
  age: 20,
  sex: 0,
  job: "美工",
  skill: {
    skillOne: "PhotoShop",
    skillTwo: "CAD"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate9 = {
  name: "JiaPeng",
  age: 29,
  sex: 1,
  job: "前端",
  skill: {
    skillOne: "HTML+CSS",
    skillTwo: "JavaScript",
    skillThree: "PHP"
  },
  regeditTime: new Date(),
  interest: []
};
var workmate10 = {
  name: "LiJia",
  age: 26,
  sex: 0,
  job: "前端",
  skill: {
    skillOne: "HTML+CSS",
    skillTwo: "JavaScript",
    skillThree: "PHP"
  },
  regeditTime: new Date(),
  interest: []
};
var db = connect("company");
var workmateArray = [
  workmate1,
  workmate2,
  workmate3,
  workmate4,
  workmate5,
  workmate6,
  workmate7,
  workmate8,
  workmate9,
  workmate10
];
db.workmate.insert(workmateArray);
print("[SUCCESS]：The data was inserted successfully");

db.workmate.find(
  { "skill.skillOne": "HTML+CSS" },
  { name: 1, "skill.skillOne": 1, _id: 0 }
);
// 查询skillOne为 HTML + CSS的数据
// 显示 name 和 技能, _Id不显示, 1 即为 true

db.workmate.find(
  { age: { $lte: 30, $gte: 25 } },
  { name: 1, "skill.skillOne": 1, age: 1, _id: 0 }
);
// $gt $gte $ne $lt $lte
// 查询年龄大于25小于30的

// $in 一个key 多个value 查询年龄是25 或者30的.
db.workmate.find(
  { age: { $in: [25, 33] } },
  { name: 1, "skill.skillOne": 1, age: 1, _id: 0 }
);

// $or $and
db.workmate.find(
  { $or: [{ age: { $gte: 30 } }, { "skill.skillThree": "php" }] },
  { name: 1, "skill.skillThree": 1, age: 1, _id: 0 }
);

// $not 即补集
db.workmate.find(
  {
    age: {
      $not: {
        $lte: 30,
        $gte: 20
      }
    }
  },
  {
    name: 1,
    age: 1,
    _id: 0
  }
);
