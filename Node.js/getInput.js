// /**
//  * Author：Sam
//  * Date: 22.3.1
//  * Description: 获取命令行输入
//  */
//
// let nameOut = ''
// let ageOut = ''
//
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// readline.question(`你叫什么名字?`, name => {
//   nameOut = name
//   console.log(`你好 ${name}!`)
//   readline.close()
// })
//
// const readline1 = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// readline1.question(`你的年龄是多少?`, age => {
//   ageOut = age
//   console.log(`${nameOut}你好，今年你${age}岁了!`)
// })
//
// const readline2 = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// readline2.question(`你来自哪里?`, country => {
//   countryOut = country
//   console.log(`来自${country}的${nameOut}，你好，今年你${ageOut}岁了!`)
//   readline.close()
// })
//
//


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: 'OHAI> '
// });
//
// rl.prompt();
//
// rl.on('line', (line) => {
//   switch (line.trim()) {
//     case 'hello':
//       console.log('world!');
//       break;
//     default:
//       console.log(`Say what? I might have heard '${line.trim()}'`);
//       break;
//   }
//   rl.prompt();
// }).on('close', () => {
//   console.log('Have a great day!');
//   process.exit(0);
// });

console.log(process.argv)

