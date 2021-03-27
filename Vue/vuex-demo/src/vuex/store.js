import applyMixin from "./mixin";
import { ModuleCollecton, installModule } from "./util";
export let Vue;

class Store {
  constructor(options) {
    const state = options.state;
    this._vm = new Vue({
      data: {
        state
      }
    });

    // 处理getter
    this.getters = {};
    // forEachValue(options.getters || {}, (fn, key) => {
    //   Object.defineProperty(this.getters, key, {
    //     get: () => { console.log('我变了'); return fn(this.state);}
    //   });
    // });

    // 处理mutation
    this.mutations = {};
    // forEachValue(options.mutations || {}, (fn, key) => {
    //   this.mutations[key] = (payload) => {
    //     fn(this.state, payload)
    //   }
    // })

    // 处理actions
    // 最后会做一个监控 看看是不是异步方法都在action更新 不是在mutation执行的
    this.actions = {};
    // forEachValue(options.actions || {}, (fn, key) => {
    //   this.actions[key] = (payload) => {
    //     fn(this, payload)
    //   }
    // })
    // ------------------------------------------------------------------

    // 想成为这种格式
    // let root = {
    //   _row: rootModule,
    //   state: rootModule.state,
    //   _children: {
    //     a: {
    //       _row: aModule,
    //       state: aModule.state,
    //       _children: {},
    //     },
    //     b: {
    //       _row: bModule,
    //       state: bModule.state,
    //       _children: {
    //         c: {
    //           _row: cModule,
    //           state: cModule.state,
    //           _children: {}
    //         }
    //       }
    //     }
    //   }
    // }

    // 格式化
    this.modules = new ModuleCollecton(options)
    console.log(this.modules);

    // 递归的安装模块 比如action mutation getters
    // 对该vue实例state 进行安装
    // 把上面的变为
    // 数据拍平
    // this.getters = {
    //   a: (stateA) => {},
    //   b: (stateB) => {},
    //   c: (stateC) => {},
    // };
    // 数据拍平
    // this.mutations = {
    //   a: [(stateA) => {}, (stateAa) => {}],
    //   b: [(stateB) => {}, (stateBa) => {}],
    //   c: [(stateC) => {}, (stateCc) => {}],
    // };
    // 形成属性结构 注意这里必须使用$set方式 否则无法响应数据
    // state = {
    //   a: {
    //     age: '123',
    //     b: {
    //       age: '345'
    //     }
    //   }
    // }
    installModule(this, this.state, [], this.modules.root)
  }
  // 处理state
  get state() {
    return this._vm.state;
  }
  // 处理commit
  commit = (mutationName, payload) => { // this指向
    this.mutations[mutationName].forEach(fn => {
      fn(payload)
    });
  }
  // 处理dispatch
  dispatch = (actionName, payload) => {
    this.actions[actionName].forEach(fn => {
      fn(payload)
    })
  }
  // 动态注册
  registerModule = (moduleName, module) => {
    if (!Array.isArray(moduleName)) {
      moduleName = [moduleName]
    }
    this.modules.register(moduleName, module) // 只进行了数据格式化
    console.log(this.modules);
    installModule(this, this.state, moduleName, this.modules.root)
  }
}

// vue的构造函数
export function install(_vue) {
  Vue = _vue;
  applyMixin(Vue);
}

export {Store}

