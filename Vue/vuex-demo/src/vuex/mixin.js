export default function applyMixin(Vue) {
    console.log(Vue);
    Vue.mixin({
      beforeCreate: vuexInit
    });
  }
  
  // 这个生命周期会提前执行 优先于子组件的生命周期
  function vuexInit() {
    const options = this.$options;
    // 根实例
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
  
  