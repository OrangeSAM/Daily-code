/**
 * Author：Sam
 * Date: 21.6.6
 * Description: 验证exports 与module.exports的关系
 */
let a  = 123

const getSome = () => {
  console.log('this is get Some')
}
const getNum = () => {
  console.log(a)
}

const bool = module.exports === exports
console.log('bool:', bool) // true


exports.getNum = getNum
// module.exports.getSome = getSome
module.exports = getSome

console.log('module:', module)
console.log('exports:', exports)

// 最终导入当前模块时，只有getSome了
// 当第21行执行时，exports 与 module.exports 的联系就断了，正确的应该是20行
// 而最终导出的是module.exports里的内容，所以也就只有getSome了

const bool1 = module.exports === exports // false
console.log('bool:', bool1)
console.log('555555555555555555555555555555555555')
