// 实现逻辑：
// 通过形如 node todo add/delete something 的命令实现todo demo 小应用

// 获取命令行中的参数，使用process.argv
// 通过命令行传递参数是一个非常基本的编程任务，对于任何一个想要尝试编写命令行接口的人来说都是必要的。在 Node.js 以及和 C 相似的环境中，所有被shell
// 接收的命令行参数都被传递到了一个叫argv的数组中。（即参数值的意思）
// Node.js 以process.argv的形式把每一个运行中程序的该数组暴露出来。

// 程序内数组等形式无法持久保存添加的任务，需要引进文件系统的概念
const fs = require("fs");
// 保证数据库文件永远与当前命令文件处于相同路径
const path = require("path");
// 获取命令行中除前面两项路径外的参数
let argus = process.argv.slice(2);

// 获取命令行的动作
const action = argus[0];
const content = argus[1];
const content1 = argus[2];
const dbPath = path.join(__dirname + "/TodoDb");
let readContent;
let taskList = [];


// 使用fs.stat判断数据文件是否存在
fs.stat(dbPath, function (err, stat) {
  if (err === null) {
    // 存在则获取数据库中的内容
    readContent = fs.readFileSync(dbPath, "utf-8");
    // 用一个数组来保存添加的任务，将字符串数组转为数组
    taskList = JSON.parse(readContent);

    if (action === "add") {
      taskList.push([content, false]);
    }
    if (action === "list") {
      displayData(taskList);
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
    fs.writeFileSync(dbPath, JSON.stringify(taskList));
    if (action !== "list") {
      displayData(taskList);
    }
  } else if (err.code === "ENOENT") {
    // 不存在则新建立数据库
    if (action === "add") {
      taskList.push([content, false]);
      fs.writeFileSync(dbPath, JSON.stringify(taskList));
      // 序列化，变成数组的样子
    }
    displayData(taskList);
  } else {
    console.log("oops, something wrong, please try again");
  }
});

function displayData(list) {
  list.forEach(e => {
    let map = e[1] === true ? "[X]" : "[-]";
    console.log(map + " " + "任务内容：" + e[0]);
  });
}
