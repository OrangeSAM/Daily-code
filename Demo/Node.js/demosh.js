var fs=require('fs');

var para=process.argv[2];

fs.mkdirSync("./" + para);
process.chdir("./" + para);
fs.mkdirSync('css');
fs.mkdirSync('js');

fs.writeFileSync("./index.html","<!DOCTYPE><title></title><h1>hello sam</h1>");
fs.writeFileSync("css/style.css","h1{color:red};");
fs.writeFileSync("js/main.js","var string='this is the javascript code' alert(string)");

process.exit(0);