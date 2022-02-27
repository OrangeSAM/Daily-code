<template>
  <h2>child3子组件</h2>
  <div>变量1{{m1}}</div>
  <div>变量2{{m2}}</div>
  <div>变量3{{m3}}</div>
  <button @click="update">click here</button>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue";

export default defineComponent({
  name: "child3",
  setup() {
    let m1 = ref(1)
    let m2 = reactive({
      name: '小明',
      wife: {
        name: '小花'
      }
    })
    let m3 = ref({
      name: '小明',
      wife: {
        name: '小花'
      }
    })
    // 是vue3的composition api 中最重要的响应式API ref reactive
    // ref用来处理基本类型数据，reactive用来处理对象 递归深度响应式
    // 如果用ref 对象/数组，内部会自动将对象/数组转换为reactive的代理对象
    // ref内部：通过给value属性添加getter / setter 来实现对数据的劫持
    // reactive内部：通过使用proxy来实现对对象内部所有数据的劫持，并通过reflect操作对象内部数据
    // ref的数据操作：在js中要.value，在模板中不需要
    console.log('child3', m1)
    console.log('child3', m2)
    console.log('child3', m3)
    const update = () => {
      console.log('child3', m1)
      console.log('child3', m2)
      console.log('child3', m3)
      m1.value += 111
      m2.wife.name += '333'
      m3.value.wife.name += '444'
    }
    return {
      m1,
      m2,
      m3,
      update
    }
  },
  mounted () {
    console.log('child3 mounted', this)
  }
})
</script>

<style scoped>

</style>
