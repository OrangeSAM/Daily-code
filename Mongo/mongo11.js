// mongo 的管理
// 创建用户
db.createUser({
  user: "samL",
  pwd: "123456",
  customData: {
    name: "sam",
    email: "a@qq.com",
    age: 11
  },
  roles: [
    {
      role: "readWrite",
      db: "company"
    },
    "read"
  ]
});
// 命令行执行

// 删除用户
db.system.users.remove({ user: "samL" });

// 鉴权
db.auth("samL", "123456"); // 账户密码
