<template>
  <div id="app">
    <div>{{msg}}</div>
    <img src="./assets/logo.png">
    <div>
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
    </div>
    <!-- <ToDoItem v-for="(item, index) in list" :key="index" :item="item"></ToDoItem> -->
    <!-- 插槽的方式实现 -->
    <!-- 插槽和props对于值传递的方式是不一样的 -->
    <ToDoItem v-for="(item, index) in list" :key="index">
      <!-- 2.5slot语法 -->
      <!-- <span slot="item" style="font-size:20px">{{item}}</span> -->
      <!-- 2.6slot语法 -->
      <template v-slot:item="itemProps">
        <span :style="{fontSize: '20px', color: itemProps.checked ? 'red' : 'blue' }">{{item}}</span>
      </template>
      <!-- 有两个的时候只渲染一个 有点奇怪 -->
    </ToDoItem>

    <!-- 事件demo -->
    <Event></Event>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ToDoItem from "./components/ToDoItem";
import Event from "./components/Event";

export default {
  name: "App",
  components: {
    HelloWorld,
    ToDoItem,
    Event
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
</style>
