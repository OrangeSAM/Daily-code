exports.name = 'sam'

let info = {
    age: 19,
    gender: 'man',
}
exports.info = info

console.log(39, module)

setTimeout(() => {
    info.age += 2
    console.log('aaa', info.age)
}, 2000)
