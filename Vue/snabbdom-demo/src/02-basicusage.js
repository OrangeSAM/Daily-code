// 2. div中放置子元素 h1，p
import {init} from 'snabbdom'
import {h} from "h";

let patch = init([])

let vnode = h('div#container', [
  h('h1', 'hello snabbdom'),
  h('p', '这是一个P标签')
])

let app = document.querySelector('#app')

let oldVnode = patch(app, vnode)

setTimeout(() => {
  vnode = h('div#container', [
    h('h1', 'hello snabbdom'),
    h('p', 'hello p')
  ])
  patch(oldVnode, vnode)

  // 清空页面元素
  // patch(oldVnode, null) 第二个参数这样写是错的
  patch(oldVnode, h('!'))
}, 2000)