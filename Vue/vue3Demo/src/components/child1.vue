<template>
  <h2>child1子组件</h2>
  <!--基础类型的数据-->
  <!--<div>{{count}}</div>-->
  <!--<div @click="updateCount">click here</div>-->
  <div>{{user.name}}</div>
  <div>{{user.age}}</div>
  <div>{{user.gender}}</div>
  <div>{{user.wife}}</div>
  <button @click="updateUser">click here</button>
</template>

<script lang="ts">
// 目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent,reactive } from 'vue';
// 引入一个子组件
//import HelloWorld from './components/HelloWorld.vue';

// 暴露一个定义好的组件
export default defineComponent({
  name: 'App',
  components: {
    //HelloWorld
  },
  // vue2
  // data() {
  //   return {
  //     number: 10
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.number ++
  //   }
  // },
  // vue3
  // 基础类型的数据
  // setup() {
  //   let count = ref(0)
  //   function updateCount() {
  //     console.log(111,ref, count)
  //     count.value ++
  //   }
  //   return {
  //     count,
  //     updateCount
  //   }
  // }
  // 对象类型的数据
  setup() {
    const obj: any = {
      name: 'sam',
      age: 18,
      wife: {
        name: 'aurora',
        age: 9,
        cars: ['audi rs7']
      }
    }
    const user = reactive(obj)
    console.log('child1', user)
    const updateUser = () => {
      user.name = 'sam liu'
      user.age += 1
      user.wife.age += 1
      // 为什么上面的代码注释与否，还会影响到下面的执行是否真正会渲染在页面上？
      // user 代理对象 obj 目标对象
      // obj.gender = '男'
      // 这种方式，界面没有更新渲染
      // user.gender = '男'
      // 这种方式，界面可以更新渲染，而且这个数据最终也更新到了obj对象上（得在执行完再观测

      // delete obj.age
      // 界面没有更新渲染，obj中确实没有了age这个属性
      // delete user.age
      // 界面更新渲染了，obj中确实没有age这个属性

      // 总结 如果操作代理对象，目标对象中的数据也会随之发生变化，同时如果想要在操作数据的时候，界面也要跟着重新更新渲染
      // 那么也是操作代理对象

      // 通过当前代理对象，找到该对象中的某个属性，更改/新增该属性中的某个数组的数据
      user.wife.cars[1] = 'benz'
    }
    return {
      user,
      updateUser
    }
  },
  mounted() {
    console.log('child1 mounted', this)
  }
});
</script>

<style>
</style>
