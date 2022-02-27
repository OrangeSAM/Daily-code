<template>
  <h2>子组件4</h2>
  <fieldset>
    <legend>姓名操作</legend>
    名字：<input type="text" v-model="user.firstName"><br>
    姓氏：<input type="text" v-model="user.lastName">
  </fieldset>
  <fieldset>
    <legend>计算属性和监视演示</legend>
    <input type="text" v-model="fullName1">
    <input type="text" v-model="fullName2">
    <input type="text" v-model="fullName3">
  </fieldset>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, watch, watchEffect, ref} from "vue";

export default defineComponent({
  name: "child4",
  setup(){
    const user = reactive({
      firstName: '一笔',
      lastName: '刘'
    })
    const fullName1 = computed(() => {
      return user.lastName + ' ' + user.firstName
    })
    // 计算属性的函数如果只传入一个回调函数，表示get
    const fullName2 = computed({
      get() {
        return user.lastName + ' ' + user.firstName
      },
      set(val: string) {
        const names = val.split(' ')
        user.firstName =names[0]
        user.lastName =names[1]
      }
    })
    const fullName3 = ref('')
    watch(user, ({firstName, lastName}) => {
      fullName3.value= lastName + ' ' + firstName
    }, {immediate: true, deep: true})

    watchEffect(() => {
      // fullName3.value = user.lastName + ' ' + user.firstName
      console.log(222, fullName3.value)
      const names = fullName3.value.split(' ')
      user.firstName = names[1]
      user.lastName = names[0]
    })

    // watch 可以监视多个数据
    watch([user.firstName, user.lastName, fullName3], () => {
      // 这里的代码就没有执行，fullname3是响应式的数据，但前两者不是
      console.log('hey')
    })
    // watch([() => user.firstName, () => user.lastName, fullName3], () => {
    //   // 这里的代码就没有执行，fullname3是响应式的数据，但前两者不是
    //   console.log('hey')
    // })

    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
})
</script>

<style scoped>

</style>
