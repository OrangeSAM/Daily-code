<template>
  <div>
    <h1>父组件逻辑</h1>
    <div>{{msg}}</div>
    <button @click="msg += 'ohhh'">click here</button>
  </div>
  <hr>
  <child1></child1>
  <hr>
  <child2 :msg="msg" msg2="真香" @xxx="receiveEvent"></child2>
  <hr>
  <child3></child3>
  <hr>
  <child4></child4>
  <hr>
  <child5></child5>
  <hr>
  <child6></child6>
</template>

<script lang="ts">
// 目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent, ref } from 'vue';
// 引入一个子组件
import child1 from './components/child1.vue';
import child2 from './components/child2.vue';
import child3 from './components/child3.vue';
import child4 from './components/child4.vue';
import child5 from './components/child5.vue';
import child6 from './components/child6.vue';

// 暴露一个定义好的组件
export default defineComponent({
  name: 'App',
  components: {
    child1,
    child2,
    child3,
    child4,
    child5,
    child6,
  },
  beforeCreate() {
    console.log('父组件', '父组件beforecreate执行了')
  },
  setup() {
    console.log('父组件', '父组件setup执行了')
    const msg = ref('玛卡巴卡')
    function receiveEvent(str: string) {
      console.log('父组件', '接收到从子组件抛出来的数据', str)
    }
    return {
      msg,
      receiveEvent
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
