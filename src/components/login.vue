<template>
  <div class="login">
    <br>
    <br>
    <br>
    <input type="text" v-model="email" name="e" placeholder="Email..." class="cred" id="email">
    <br>
    <input
      type="password"
      v-model="password"
      name="p"
      placeholder="Password..."
      class="cred"
      id="pass"
    >
    <br>
    <button v-on:click="login" id="lgin" class="btn">Log in</button>
    <br>
    <br>
    <p class="info">New member?</p>
    <form @submit="create">
      <input type="submit" value="Create an Account" class="btn">
    </form>
  </div>
</template>

<script>
import router from "@/router";
import firebaseApp from "./firebaseInit";

export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    create() {
      this.$router.push("/create");
    },
    login: function(e) {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
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
.btn {
  background: #0065a4;
  color: white;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-weight: bold;
  font-size: 16px;
}
.btn:hover {
  font-size: 18px;
}
.cred {
  padding-right: 10px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.info {
  text-align: center;
  padding-bottom: 10px;
  font-style: italic;
  font-size: 20px;
  font-weight: bold;
}
.hide {
  display: none;
}
</style>