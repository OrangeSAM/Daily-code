<template>
  <div id="app">
    <div>{{msg}}</div>
    <img src="./assets/logo.png" />
    <div>
      <input type="text" v-model="info" @keyup.enter="handleClick" />
      <!-- <button @keyup.enter="handleClick">添加</button> -->
    </div>
    <!-- <ToDoItemLi v-for="(item, index) in list" :key="index" :item="item"></ToDoItemLi> -->
    <!-- 插槽的方式实现 -->
    <!-- 插槽和props对于值传递的方式是不一样的 -->
    <!-- 插槽里面的作用域仍然是子组件 -->
    <to-do-item-li v-for="(item, index) in list" :key="index">
      <!-- 如果没有对应的slot是不是就不渲染了，那不具名插槽呢 -->
      <!-- 不管父级这边还是组件里头没有对应的slot都不会显示 -->
      <!-- 2.5slot语法 -->
      <span slot="item" style="font-size:20px">{{item + '2.5'}}</span>

      <!-- 2.6slot语法 -->
      <!-- itemProps是什么意思 -->
      <!-- itemProps对应组件中传递出的bind值 -->

      <!-- 如果插槽中渲染组件的值，组件内也渲染组件的值，那组件内的值显示默认值，如果有的话 -->
      <template v-slot:item="itemProps">
        <span
          :style="{fontSize: '20px', color: itemProps.checked ? 'red' : 'blue' }"
        >{{item + '3.5'}}</span>
      </template>
      <!-- 有两个插槽的时候只渲染一个，后面的会覆盖之前的 -->
    </to-do-item-li>

    <!-- 事件demo -->
    <Event class="event-compo"></Event>
    <test></test>
  </div>
</template>

<script>
import ToDoItemLi from "./components/to-do-item";
import Event from "./components/Event";
import Test from "./components/test";

export default {
  name: "App",
  components: {
    ToDoItemLi,
    Event,
    Test
  },
  data() {
    return {
      msg: "hello sam",
      info: "",
      list: []
    };
  },
  methods: {
    handleClick() {
      this.list.push(this.info);
      this.info = "";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.event-compo {
  margin: 20px;
}
</style>
