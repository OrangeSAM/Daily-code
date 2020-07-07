// 3. 模块的使用

// 导入核心库
import {init} from 'snabbdom'
import {h} from "h";

// 导入模块
import {styleModule} from 'style'
import {eventListenersModule} from 'eventListener'

// 注册模块
let patch = init([
  eventListenersModule,
  styleModule
])

// 使用h函数的第二个参数传入模块需要的数据（对象 ）
let vnode = h('div', {
  style: {
    backgroundColor: 'red'
  },
  on: {
    click: eventHandler
  }
}, [
  h('h1', 'hello sam'),
  h('p', '这是p标签')
])

function eventHandler () {
  console.log('点人家干嘛')
}

let app = document.querySelector('#app')

patch(app, vnode)