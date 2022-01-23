/**
 * Author：Sam
 * Date: 21.12.26
 * Description: 移动文件的位置，用于将某文件夹下的所有子文件移至统一目录级别
 */

// 思路
// 获取当前目录下的所有文件夹目录，挨个遍历获得的目录路径，改变该目录下文件的路径，上移一层。

const fs = require('fs')

function getDirContent(dir, callback) {
  fs.readdir(dir, function (err, tar) {
    if (err) {
      console.log(err)
    } else {
      // 这里由于cb还需要用到原始的dir数据，故包装一层
      let obj = {
        originalPath: dir,
        detail: tar
      }
      callback(obj)
    }
  })
}

// 获取第一层目录的内容，执行的入口
getDirContent(__dirname, handleDir)

// 遍历当前第一层目录
function handleDir(obj) {
  Array.prototype.forEach.call(obj.detail, function (item) {
    intoDir(item)
  })
}

// 对每一个目录进行处理
function intoDir (dirName) {
  fs.stat(`${__dirname}/${dirName}`, function (err, state) {
    if (err) {
      console.log(err)
    } else {
      if (state.isDirectory()) {
        console.log(`${__dirname}/${dirName}`)
        handleSecondDir(`${__dirname}/${dirName}`)
      }
    }
  })
}

// 处理第二层级下的目录内容
function handleSecondDir(dir) {
  getDirContent(dir, updateFileDir)
}

function updateFileDir(obj) {
  Array.prototype.forEach.call(obj.detail, function (a) {
    // return
    fs.rename(`${obj.originalPath}/${a}`, `${__dirname}/${a}`, function (err) {
      console.log(err)
    })
    console.log(a)
  })
}
