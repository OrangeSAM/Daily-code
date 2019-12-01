var fs = require('fs');

var path = './迅雷下载'

// 思路
// 遍历当前文件夹所有文件或者文件夹中的文件, 判断是否是文件,
// 如果是再判断是不是种子文件, 是不是Gif, 文件名是不是带有裸聊 是则删除.
function deleteFile()