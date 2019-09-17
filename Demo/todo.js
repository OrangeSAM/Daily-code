// 实现逻辑：
// 通过形如 node todo add/delete something 的命令实现todo demo 小应用

// 获取命令行中的参数，使用process.argv
// 通过命令行传递参数是一个非常基本的编程任务，对于任何一个想要尝试编写命令行接口的人来说都是必要的。在 Node.js 以及和 C 相似的环境中，所有被shell
// 接收的命令行参数都被传递到了一个叫argv的数组中。（即参数值的意思）
// Node.js 以process.argv的形式把每一个运行中程序的该数组暴露出来。

// 程序内数组等形式无法持久保存添加的任务，需要引进文件系统的概念
let fs = require("fs");
let argus = process.argv.slice(2);

let readContent = fs.readFileSync("F:\\Code\\Daily-code\\Demo\\todoDb");
console.log(readContent.toString());
// 用一个数组来保存添加的任务
let taskList = [];
if (argus[0] === "add") {
  taskList.push(argus[1]);
  // 直接存入貌似会有编码上的问题
  // fs.writeFileSync("F:\\Code\\Daily-code\\Demo\\todoDb", argus[1]);
  fs.writeFileSync("F:\\Code\\Daily-code\\Demo\\todoDb", taskList);
}
if (argus[0] === "delete") {
}
if (argus[0] !== "add" && argus[0] !== "delete") {
  console.log("oops, it seems the action is wrong");
}
console.log(taskList);
