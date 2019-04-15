<template>
  <div id="app">
    <div id="nav">
      <Header/>
    </div>
    <router-view/>
    <div id="foot">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
img {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
