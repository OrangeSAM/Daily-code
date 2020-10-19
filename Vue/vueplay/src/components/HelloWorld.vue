<template>
  <div class="screenshot">
    <button @click="shot">click me to convert</button>
    <div>below here are something that i want to take them to screenshot</div>
    <div class="wrap" ref="wrap">
      <div>尤雨溪说，看不懂文档你就回家去喂猪吧。IE说，你们都看我干嘛。</div>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "HelloWorld",
  methods: {
    async shot() {
      let ele = this.$refs["wrap"];
      console.log(ele);
      let canvas = await html2canvas(ele);
      var img = canvas.toDataURL("image/png");
      this.debugBase64(img);
      // this.saveImg(canvas);
    },
    debugBase64(base64URL) {
      var win = window.open();
      win.document.write(
        '<iframe src="' +
          base64URL +
          '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  width: 50%;
  margin: 0 auto;
  padding: 50px;
}
</style>
