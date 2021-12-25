// 此文件用于简单的项目文件生成，包含一个index.html文件，一个css目录，一个js目录，两目录下各有一个相应的文件
// 命令行使用形如node demosh testDirName，第三个参数是自定义的目录名称，默认是Project。

var fs=require('fs');

var para=process.argv[2] || 'Project';

fs.mkdirSync("./" + para);
process.chdir("./" + para);
fs.mkdirSync('css');
fs.mkdirSync('js');

fs.writeFileSync("./index.html","<!DOCTYPE><title></title><h1>hello sam</h1>");
fs.writeFileSync("css/style.css","h1{color:red};");
fs.writeFileSync("js/main.js","var string='this is the javascript code' alert(string)");

process.exit(0);
