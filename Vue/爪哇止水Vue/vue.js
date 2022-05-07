/**
 * Author：
 * Date: 22.5.7
 * Description:
 */
const utils = {
  getValue(expr, vm) {
    return vm.$data[expr].trim()
  },
  setValue(expr, vm, newValue) {
    vm.$data[expr] = newValue
  },
  model(node, value, vm) {
    const initialValue = this.getValue(value, vm)

    new Watcher(value, vm, (newValue) => {
      this.modelUpdater(node, newValue)
    })

    node.addEventListener('input', e => {
      const newValue = e.target.value
      this.setValue(value, vm, newValue)
    })

    this.modelUpdater(node, initialValue)
  },
  text(node, value, vm) {
    let result
    if (value.includes('{{')) {
      // {{ xxx }}
      result = value.replace(/\{\{(.+?)\}\}/g, (...args) => {
        const expr = args[1]
        new Watcher(expr, vm, (newVal) => {
          this.textUpdater(node, newVal)
        })
        return this.getValue(args[1], vm)
      })
    } else {
      // v-text='xxx'
      result = this.getValue(value,vm)
    }
    this.textUpdater(node, result)
  },
  on(node, value, vm, eventName) {

  },
  textUpdater(node, value) {
    node.textContent = value
  },
  modelUpdater(node, value) {
    node.value = value
  }
}

// 收集DOM的依赖，data和哪些dom有关系
class Watcher {
  constructor (expr, vm , cb) {
    this.expr = expr
    this.vm = vm
    this.cb = cb
    // 通过getter 对数据进行绑定 标记当前的watcher
    this.oldValue = this.getOldValue()
  }

  getOldValue() {
    Dep.target = this
    const oldValue = utils.getValue(this.expr, this.vm)
    Dep.target = null
    return oldValue
  }

  update() {
    const newValue = utils.getValue(this.expr, this.vm)
    if (newValue !== this.oldValue) {
      this.cb(newValue)
    }

  }
}

// 有哪些watcher, 一个数据和多个watcher绑定
class Dep {
  constructor () {
    this.collect = []
  }

  addWatcher(watcher) {
    this.collect.push(watcher)
  }

  notify() {
    this.collect.forEach(w => w.update())
  }
}

class Compiler {
  constructor (el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm

    const fragment = this.compileFragment(this.el)

    this.compile(fragment)
    this.el.appendChild(fragment)
  }

  compile(fragment) {
    const childNodes = Array.from(fragment.childNodes)
    childNodes.forEach(childNode => {
      if (this.isElementNode(childNode)) {
        this.compileElement(childNode)
      }
      if (this.isTextNode(childNode)) {
        this.compileText(childNode)
      }

      // DFS 深度优先遍历
      if (childNode.childNodes && childNode.childNodes.length) {
        this.compile(childNode)
      }
    })
  }

  compileText(node) {
    // {{msg}}
    const content = node.textContent
    if (/\{\{(.+)\}\}/.test(content)) {
      utils['text'](node, content, this.vm)
    }
  }

  compileElement(node) {
    // v-model v-text v-on:click
    const attributes = Array.from(node.attributes)
    attributes.forEach(attr => {
      const {name, value} = attr
      if (this.isDirector(name)) {
        // 只匹配第二部分
        const [, directive] = name.split('-')
        const [compileKey, eventName] = directive.split(':')
        utils[compileKey](node, value, this.vm, eventName)
      }
    })
  }

  isDirector(name) {
    return name.startsWith('v-')
  }

  compileFragment(el) {
    const f = document.createDocumentFragment()
    let firstChild
    while (firstChild = el.firstChild) {
      // appendChild会删掉里面的内容
      f.appendChild(firstChild)
    }
    return f
  }

  // 是否为文本节点
  isTextNode(el) {
    return el.nodeType === 3
  }

  // 是否为元素节点
  isElementNode(el) {
    return el.nodeType === 1
  }

}

class Observer {
  constructor (data) {
    this.observe(data);
  }

  observe (data) {
    if (data && typeof data === "object") {
      Object.keys(data).forEach((key) => {
        this.defineReactive(data, key, data[key]);
      });
    }
  }

  defineReactive (obj, key, value) {
    this.observe(value);
    // 处理每一个数据的dom依赖
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      get () {
        const target = Dep.target
        target && dep.addWatcher(target)

        return value;
      },
      set: (newVal) => {
        if (value === newVal) return;
        this.observe(newVal);
        value = newVal;
        dep.notify()
      },
    });
  }
}

class Vue {
  constructor (options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options.data;

    // 触发 this.$data.xx 和模板的绑定
    new Observer(this.$data);

    // 处理模板部分，将模板中使用的data部分的变量和模板绑定起来
    new Compiler(this.$el, this)

    // 将data上的数据代理到this上，以供后续通过this直接操控data里面的数据
    this.proxyData(this.$data);
  }

  // 可以通过this.xx 更改 this.$data.xx的结果
  proxyData (data) {
    Object.keys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        get () {
          return data[key];
        },
        set (newVal) {
          data[key] = newVal;
        },
      });
    });
  }
}
