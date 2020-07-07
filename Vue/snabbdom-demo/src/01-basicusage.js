import {init} from 'snabbdom'
import {h} from "h";

// 1. hello world
// 参数：数组、模块
// 返回值 patch函数、作用对比两个vnode的差异更新到真实DOM
let patch = init([])
// 第一个参数：标签+选择器
// 第二个参数：如果是字符串的话就是标签中的内容
let vnode = h('div#container.cls', 'hello world')

let app = document.querySelector('#app')

// 第一个参数：可以是DOM元素，内部会把DOM元素转换成Vnode
// 第二个参数：Vnode
// 返回值：Vnode
let oldVal = patch(app, vnode)

// 假设的数据更新时刻
vnode = h('div', 'hello snabbdom')

patch(oldVal, vnode)
