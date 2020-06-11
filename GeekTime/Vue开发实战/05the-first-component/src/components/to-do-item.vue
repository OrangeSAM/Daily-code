<template>
  <li class="item">
    <input type="checkbox" v-model="checked" />
    {{item}}
    <slot name="item" v-bind="{checked}"></slot>
  </li>
  <!-- 这里的checked是怎么传递出去的 -->
  <!-- 绑定在一个具名slot上，那在父组件的对应slot上就可以拿到该值了？ -->
  <!-- 因为渲染的li是一个单独的组件，每个组件都保存着各自的checked值所以不会互相干扰 -->
</template>

<script>
export default {
  name: "todoitem",
  props: {
    item: {
      type: String,
      default: "helloSam"
    }
    // 定义传入props item的初始值和类型
  },
  data() {
    return {
      checked: null
    };
  }
};
</script>


<style scoped>
.item {
  color: lightcoral;
}
</style>