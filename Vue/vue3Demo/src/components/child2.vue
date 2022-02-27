<template>
  <div>
    <h2>child2子组件</h2>
    <div>{{msg}}</div>
    <div>count: {{count}}</div>
    <button @click="eventTest">外抛事件</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: ['msg'],
  beforeCreate() {
    console.log('child2', '子组件beforeCreate执行了')
  },
  setup(props, {attrs, emit, slots}) {
    // props参数，是一个对象，里面有父组件向子组件传递的数据，并且是在自己组件中使用props接收到的所有的属性
    // 包含props配置声明且传入了的所有属性的对象
    //
    // context参数，是一个对象
    // 里面有attrs对象（获取当前组件标签上的所有的属性的对象，但是该属性是在props中没有声明接收的所有属性的对象）
    // emit方法（分发事件的）
    // slots对象，插槽相关
    console.log('child2', 'setup参数', props, attrs, emit, slots)
    // setup 细节问题
    // setup是在beforecreate生命周期回调之前就执行了，而且就执行一次
    // 由此可以推断出，setup在执行的时候，当前的组件还没有创建出来，也就意味着：组件实例对象this根本就不能用
    // this 是undefined，说明，就不能通过this再去调用data computed methods props中的相关内容了
    // 父组件的setup 和 beforecreate优先于子组件的执行
    console.log('child2', '子组件set up 执行了')
    function eventTest() {
      emit('xxx', 'laosai')
    }
    return {
      eventTest
      // setup中一般都是返回一个对象，对象中的属性和模板都可以直接在html目标中使用
    }
  },
  // setup中的对象内部的属性和data函数中的return对象的属性都可以在html模板中使用
  // setup中的对象内部的属性和data函数中的return对象的属性会合并为组件对象的属性
  // data和setup中的属性不能重复
  // setup中的对象内部的方法和methods对象中的方法会合并为组件对象的方法
  // 在vue3中尽量不要混合的使用data和setup及methods和setup
  // setup不能是一个async函数，因为返回值不再是return的对象，而是promise，这样模板无法获取return对象中的属性和方法
  data() {
    return {
      count: 10
    }
  },
  mounted () {
    console.log('child2 mounted', this)
  }
})
</script>

<style scoped>

</style>
