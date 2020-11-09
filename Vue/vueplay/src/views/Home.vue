<template>
  <div class="home">
    <Html2Canvas msg="Welcome to Your Vue.js App"/>
    <solar-lunar></solar-lunar>
  </div>
</template>

<script>
// @ is an alias to /src
import Html2Canvas from '@/components/html2Canvas.vue'
import SolarLunar from '@/components/solarLunar.vue'

export default {
  name: 'Home',
  components: {
    Html2Canvas,
    SolarLunar
  }
}
</script>
