// 获取命令行中除前面两项路径外的参数
let fs = require("fs");
let argus = process.argv.slice(2);

// 获取命令行输入的动作和内容
const action = argus[0];
const content = argus[1];
const content1 = argus[2];

let readContent = fs.readFileSync("F:\\Code\\Daily-code\\Demo\\todoDb");

console.log(readContent);
let taskList = [];
if (action === "add") {
  taskList.push([content, false]);
}
if (action === "list") {
  console.log(taskList);
}
if (action === "delete") {
  taskList.splice(content - 1, 1);
}
if (action === "done") {
  taskList[content - 1][1] = true;
}
if (action === "edit") {
  taskList[content - 1][0] = content1;
}
console.log(taskList);
