<template>
  <div></div>
</template>

<script>
  import solarLunar from 'solarlunar'

  export default {
    name: "solarLunar",
    data () {
      return {
        sam: ''
      }
    },
    mounted () {
      console.log(solarLunar.solar2lunar(2020, 11, 9), solarLunar.lunar2solar(2020, 11, 9))
    }
  }
</script>

<style scoped>

</style>