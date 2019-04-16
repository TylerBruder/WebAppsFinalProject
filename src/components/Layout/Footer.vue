<template>
<div id="wrapper">
  <footer class="footer">
    <p class="txt">Club Manager App Created By: Justin Perticone, Tyler Bruder, and Marshal Brummel</p>
    <p class="txt">Background-image from: http://www.gvsuclubsports.com/</p>
  </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background: #0065a4;
  color: #fff;
  text-align: center;
  padding: 20px;
  line-height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
#wrapper {
  min-height: 100%;
  position: relative;
}
.txt {
  font-weight: 100;
  font-size: 10px;
}
</style>