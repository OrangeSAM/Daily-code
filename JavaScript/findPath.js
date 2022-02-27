const obj = {
    a: {
        a_1: {
            a_1_1: 'abc',
            a_1_2: 'efg'
        }
    },
    b: {
        b_1: 'xyz',
        b_2: '111'
    },
    c: '000'
}

function sam(obj) {
    let final = ''
    for(let item in obj) {
        if (typeof obj[item] == 'object') {
            sam(obj[item])
        } else {
            return item += final
        }
    }
    return final
}





// 有问题的字符串版本
const obj = {
    a: {
        a_1: {
            a_1_1: 'abc',
            a_1_2: 'efg'
        }
    },
    b: {
        b_1: 'xyz',
        b_2: '111'
    },
    c: '000'
}
let final = ''
function sam(obj) {
    for(let item in obj) {
        console.log('final:', final)
        final = final + item
        console.log('final + item:', final)
        if (typeof obj[item] == 'object') {
            console.log('obj[item]:', obj[item])    
            sam(obj[item])
        } else {
            console.log('else:', final)
            final = final + obj[item]
            console.log('else:', final)
        }
        console.log('--------------------')
    }
    console.log('final:', final)
    return final
}

//

let final = ''
function sam(obj) {
    for(let item in obj) {
        console.log('final:', final)
        final = final + ' ' + item
        if (typeof obj[item] == 'object') {
            console.log('obj[item]:', obj[item])    
            sam(obj[item])
        } else {
            console.log('else:', final)
            final = final + ' '+ obj[item]
            console.log('else:', final)
        }
        console.log('-----------------------------------------------------------')    
        console.log('final:', final)
    }
    console.log('final:', final)
    console.log('**************************************************************')
    return final
}

// 
// 有问题的字符串版本
const obj = {
    a: {
        a_1: {
            a_1_1: 'abc',
            a_1_2: 'efg'
        }
    },
    b: {
        b_1: 'xyz',
        b_2: '111'
    },
    c: '000'
}
let final = ''
let finalObj = {}
function sam(obj) {
    for(let item in obj) {
        console.log('final:', final)
        final = final + ' ' + item
        if (typeof obj[item] == 'object') {
            console.log('obj[item]:', obj[item])    
            sam(obj[item])
        } else {
            console.log('else:', final)
            final = final + ' '+ obj[item]
            finalObj[obj[item]] = final
            console.log('else:', final)
        }
        console.log('-----------------------------------------------------------')    
        console.log('final:', final)
    }
    console.log('final:', final)
    console.log('**************************************************************')
    return final
}

//

// 有问题的字符串版本
const obj = {
    a: {
        a_1: {
            a_1_1: 'abc',
            a_1_2: 'efg'
        }
    },
    b: {
        b_1: 'xyz',
        b_2: '111'
    },
    c: '000'
}
let final = ''
let finalObj = {}
function sam(obj) {
    for(let item in obj) {
        final = final + ' ' + item
        if (typeof obj[item] == 'object') {
            sam(obj[item])
        } else {
            console.log('final one:', final)
            final = final + ' '+ obj[item]
            finalObj[obj[item]] = final
        }
        console.log('-----------------------------------------------------------')    
        console.log('final:', final)
    }
    console.log('final:', final)
    console.log('**************************************************************')
    return final
}

//

// 有问题的字符串版本
const obj = {
    a: {
        a_1: {
            a_1_1: 'abc',
            a_1_2: 'efg'
        }
    },
    b: {
        b_1: 'xyz',
        b_2: '111'
    },
    c: '000'
}
let final = ''
let finalObj = {}
function sam(obj) {
    for(let item in obj) {
        final = final + ' ' + item
        if (typeof obj[item] == 'object') {
            sam(obj[item])
        } else {
            console.log('final one:', final)
            final = final + ' '+ obj[item]
            finalObj[obj[item]] = final
            final = ''
        }
        console.log('-----------------------------------------------------------')    
        console.log('final:', final)
    }
    console.log('final:', final)
    console.log('**************************************************************')
    return final
}

// // 有问题的字符串版本
const obj = {
    a: {
        a_1: {
            a_1_1: 'abc',
            a_1_2: 'efg'
        }
    },
    b: {
        b_1: 'xyz',
        b_2: '111'
    },
    c: '000'
}
let finalObj = {}
function sam(obj) {
    let final = ''
    for(let item in obj) {
        final = final + ' ' + item
        if (typeof obj[item] == 'object') {
            sam(obj[item])
        } else {
            final = final + ' '+ obj[item]
            finalObj[obj[item]] = final
            final = ''
        }
    }
    return finalObj
}

// 
// 有问题的字符串版本
const obj = {
    a: {
        a_1: {
            a_1_1: 'abc',
            a_1_2: 'efg'
        }
    },
    b: {
        b_1: 'xyz',
        b_2: '111'
    },
    c: '000'
}
let finalObj = {}
let final = ''
function sam(obj) {
    for(let item in obj) {
        final = final + item
        if (typeof obj[item] == 'object') {
            sam(obj[item])
        } else {
            final = final + obj[item]
            finalObj[obj[item]] = final
            final = ''
        }
    }
    return finalObj
}