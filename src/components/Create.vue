<template>
  <div class="create">
    <br>
    <br>
    <input
      type="text"
      v-model="fullName"
      name="n"
      placeholder="Full name..."
      class="cred"
      id="flName"
    >
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
    <input
      type="text"
      v-model="phone"
      name="ph"
      placeholder="Phone..."
      class="cred"
      id="phone"
      maxlength="10"
    >
    <br>
    <textarea
      v-model="bio"
      name="b"
      cols="30"
      rows="5"
      class="cred"
      id="bio"
      placeholder="Tell us about yourself!"
    ></textarea>
    <br>
    <br>
    <button v-on:click="create" class="btn">Create Account</button>
  </div>
</template>

<script>
import firebaseApp from "./firebaseInit";
import router from "@/router";

export default {
  name: "create",
  data: function() {
    return {
      fullName: "",
      email: "",
      password: "",
      phone: "",
      bio: "",
      position: ""
    };
  },

  methods: {
    create: function(e) {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            var newMember = {
              name: this.fullName,
              email: this.email,
              phone: this.phone,
              bio: this.bio,
              admin: false,
              position: "member"
            };
            firebaseApp
              .database()
              .ref()
              .child("Members")
              .push()
              .set(newMember);
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
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
#bio {
  height: 100px;
  font-size: 14px;
}
</style>