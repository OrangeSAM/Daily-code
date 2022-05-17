export const name = 'sam'

export const info = {
    age: 19,
    gender: 'man'
}

setTimeout(() => {
    info.age +=2
    console.log('aaa', info.age)
}, 2000)

//  commonjs 和esm都会触发moduleA中的settimeout