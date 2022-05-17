/**
 * Author：Sam
 * Date: 21.6.5
 * Description: 验证引入的是导出的拷贝
 */
// lib.js

let counter = 3;
function incCounter() {
  counter++;
  console.log('inside', counter)
}

module.exports = {
  counter: counter,
  incCounter: incCounter,
};

console.log('module:', module)
console.log('exports:', exports)
console.log('444444444444444444444444444444444444')
