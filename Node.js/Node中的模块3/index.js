const {name, info} = require('./moduleA')


console.log(name)
// 这行会触发moduleA内部代码的执行？
// console.log('bbb', info)

setTimeout(() => {
    console.log('bbbb', info)
}, 3000)