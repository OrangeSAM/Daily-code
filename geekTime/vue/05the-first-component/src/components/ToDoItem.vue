<template>
  <!-- <li class="item">{{item}}</li> -->
  <li class="item">
    <input type="checkbox" name id v-model="checked">
    <slot name="item" v-bind="{checked}"></slot>
  </li>
</template>

<script>
export default {
  name: "todoitem",
  props: {
    item: {
      type: String,
      default: "helloSam"
    }
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