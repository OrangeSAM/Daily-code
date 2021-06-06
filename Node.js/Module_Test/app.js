/**
 * Author：Sam
 * Date: 21.6.5
 * Description:
 */
// app.js文件
// 引入第三方库，应该放置在最前面
let uniq = require('uniq')
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')
let module4 = require('./modules/module4')
let module5 = require('./modules/module5')

console.log('----------------')
console.log('module1:', module1)
console.log('----------------')

console.log('----------------')
console.log('module2:', module2)
console.log('----------------')


console.log('----------------')
console.log('module3:', module3)
console.log('----------------')

console.log('----------------')
console.log('module4:', module4)
console.log('----------------')

console.log('----------------')
console.log('module5:', module5)
console.log('----------------')


console.log(module4.counter)
module4.incCounter()
module4.incCounter()
console.log(module4.counter)


module1.foo() //module1
module2() //module2
module3.foo() //foo() module3
console.log(uniq(module3.arr)) //[ 1, 2, 3 ]

let module11 = require('./modules/module1')
let module22 = require('./modules/module2')
let module33 = require('./modules/module3')
let module44 = require('./modules/module4')

console.log(module11)
console.log(module22)
console.log(module33)
// '模块可以多次加载，但是只会在第一次加载时运行一次，
//  然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。
//  要想让模块再次运行，必须清除缓存。'
// 现在打印出的是6，应该这就是所说的缓存
module44.incCounter()
console.log(module44)
