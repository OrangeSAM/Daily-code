/**
 * Author：Sam
 * Date: 21.6.5
 * Description: 使用module.exports导出包含字符串和方法的内容
 */
//module1.js
module.exports = {
  msg: 'module1',
  foo() {
    console.log(this.msg)
  }
}
console.log('module:', module)
console.log('exports:', exports)
console.log('111111111111111111111111111111111111')
