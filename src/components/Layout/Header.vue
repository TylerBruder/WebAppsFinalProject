<template>
  <header class="header">
    <h1 class="b">Club Manager App</h1>
    <router-link to="/" class="a">Home</router-link>|
    <router-link to="/about" class="a">About</router-link>|
    <router-link to="/about" class="a">Announcements</router-link>|
    <router-link to="/about" class="a">Events</router-link>|
    <router-link to="/Members" class="a">Members</router-link>|
    <router-link to="/about" class="a">Resources</router-link>
    <br>
    <router-link to="/login" class="c" id="c">Account</router-link>
  </header>
</template>

<script>
import firebaseApp from "../firebaseInit";

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  methods: {
    logout: function() {
      alert("hmm");
      alert(firebaseApp.auth().currentUser.email);
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style scoped>
.header {
  background: #0065a4;
  color: #fff;
  text-align: center;
  padding: 40px;
  line-height: 150%;
  font-size: 20px;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
}
.a {
  color: #fff;
  padding-right: 7px;
  text-decoration: none;
  font-size: 14px;
}
.b {
  padding: 15px;
}
.logout {
  background: none;
  border: none;
  color: white;
  float: right;
}
.c {
  background: none;
  border: none;
  color: white;
  float: right;
  font-size: 14px;
  margin-top: -20px;
}
</style>