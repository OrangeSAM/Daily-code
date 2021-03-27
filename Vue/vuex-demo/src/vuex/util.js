import {Vue} from './store'
export const forEachValue = (obj, callback) => {
  Object.keys(obj).forEach(key => callback(obj[key], key));
};

export class ModuleCollecton {
  constructor(options) {
    // 深度遍历 进行模块集合
    this.register([], options)
  }
  register(path, rootModule) {
    let rowModule = {
      _row: rootModule,
      state: rootModule.state,
      _children: {}
    }
    if (!this.root) {
      this.root = rowModule
    } else {
      let parentModule = path.slice(0, -1).reduce((pre, cur) => {
        return pre._children[cur]
      }, this.root)

      parentModule._children[path[path.length - 1]] = rowModule
    }
    if (rootModule.modules) {
      forEachValue(rootModule.modules, (moduleVal, moduleName) => {
        this.register(path.concat(moduleName), moduleVal)
      })
    }
  }
}

export function installModule(store, rootState, path, rowModule) { // _row, _children, state
  let getters = rowModule._row.getters
  if(getters) {
    // installmodule第二次会重复 但是这个方法不可以
    forEachValue(getters, (val, getterName) => {
      if (!getters[getterName]) {
        Object.defineProperty(store.getters, getterName, {
          get: () => {
            return val(rowModule.state) // 模块中的状态
          }
        })
      }
    })
  }

  let mutations = rowModule._row.mutations
  if(mutations) {
    forEachValue(mutations, (val, mutationName) => {
      let arr = store.mutations[mutationName] || (store.mutations[mutationName] = [])
      arr.push((payload) => {
        val(rowModule.state, payload)
      })
    })
  }

  let actions = rowModule._row.actions
  if(actions) {
    forEachValue(actions, (val, actionName) => {
      let arr = store.actions[actionName] || (store.actions[actionName] = [])
      arr.push((payload) => {
        val(store, payload)
      })
    })
  }

  let state = rowModule._row.state
  if (state) {
    if(path.length > 0) { // 有子模块
      // Vue的响应式原理 不能增加不存在的属性
      let parentState = path.slice(0, -1).reduce((pre, cur) => {
        return pre[cur]
      }, rootState)
      
      Vue.set(parentState, path[path.length - 1], rowModule.state)
    }
  }

  forEachValue(rowModule._children, (module, moduleName) => {
    installModule(store, rootState, path.concat(moduleName), module)
  })
}
