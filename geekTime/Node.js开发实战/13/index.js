const glob = require('glob')

// 同步的方式
// console.time('glob')
// var result = glob.sync(__dirname + '/**/*')
// console.log(result)
// console.timeEnd('glob')

// 异步的方式
console.time('glob')
glob(__dirname + '/**/*', function (err, res) {
    console.log(res)
})
console.timeEnd('glob')