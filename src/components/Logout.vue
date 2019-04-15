<template>
  <div class="logout">
    <br>
    <br>
    <p id="name">Name: {{Name}}</p>
    <br>
    <p id="mail">Email: {{email}}</p>
    <br>
    <p id="phn">Phone: {{Phone}}</p>
    <br>
    <p id="adStat">Admin: {{AdStat}}</p>
    <br>
    <p id="memStat">Position: {{MemStat}}</p>
    <br>
    <br>
    <button v-on:click="logout" id="lgout" class="btn">Log out</button>
    <br>
    <br>
  </div>
</template>

<script>
import router from "@/router";
import firebaseApp from "./firebaseInit";

export default {
  name: "logout",
  data: function() {
    return {
      email: "",
      password: "",
      AdStat: "",
      MemStat: "",
      Name: "",
      Phone: ""
    };
  },
  methods: {
    logout: function() {
      alert(firebaseApp.auth().currentUser.email);
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    },
    gotData: function gotData(data) {
      let members = data.val();
      let keys = Object.keys(members);
      console.log(keys);
      for (let i = 0; i < keys.length; i++) {
        let k = keys[i];
        if (members[k].email == firebaseApp.auth().currentUser.email) {
          this.AdStat = members[k].admin;
          this.MemStat = members[k].position;
          console.log(this.AdStat);
          console.log(this.MemStat);
          this.email = members[k].email;
          this.Phone = members[k].phone;
          this.Name = members[k].name;
        }
      }
    },
    errData: function errData(err) {
      console.log("error");
    }
  },
  mounted() {
    var ref = firebaseApp.database().ref("Members");
    ref.on("value", this.gotData, this.errData);
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
#adStat,
#memStat,
#name,
#phn,
#mail {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
</style>