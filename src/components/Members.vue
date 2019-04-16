<template>
<div class="body">
<div>
</div>
<br><br>
    <div>
        <table id="mainTable">
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Bio</th>
                <th>Standing</th>
                <th>Email</th>
                <th>Position</th>
            </tr>
        </table>
    </div>
</div>
 </template>

 <script> 
import router from "@/router";
import firebaseApp from "./firebaseInit";

export default {
    mounted(){
        this.addDBListener();
        this.removeDBListener();
    },
    methods: {
    addDBListener() {
    firebaseApp
        .database()
        .ref()
        .child("Members")
        .on("child_added", recordAdded => {
            var friendTable = document.getElementById("mainTable");
            var newFriend = document.createElement("tr");
            newFriend.id = recordAdded.key;
            var name = recordAdded.child("name").val();
            var phone = recordAdded.child("phone").val();
            var age = recordAdded.child("age").val();
            var bio = recordAdded.child("bio").val();
            var standing = recordAdded.child("class").val();
            var email = recordAdded.child("email").val();
            var position = recordAdded.child("position").val();

            // adds friend to webpage
            newFriend.innerHTML =
                "<td>" + name + "</td><td>" 
                       + phone + "</td><td>" 
                       + age + "</td><td>"
                       + bio + "</td><td>"
                       + standing + "</td><td>"
                       + email + "</td><td>"
                       + position + "</td>"
            friendTable.appendChild(newFriend);
        }); 
    },

    removeDBListener() {
    firebaseApp
        .database()
        .ref()
        .child("Members")
        .on("child_removed", removeRecord => {
            // updating display of main page to remove friend 
            var fbkey = removeRecord.key;
            var friendTable = document.getElementById("mainTable");
            const whichFriend = friendTable.querySelector("tr[id='" + fbkey + "']");
            friendTable.removeChild(whichFriend);

            // removing friend from table on searched friends
            // logic from AO and JP
            var searchTable = document.getElementById("searchResults");
            try {
                const friendWhich = searchTable.querySelector(
                    "tr[id='" + fbkey + "']"
                );
                searchTable.removeChild(friendWhich);
            } catch (err) { }
        });
    }
    } 
};

</script>

<style scoped>
body {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
}
header{
    position:absolute;
    top:0;
    left:0;
    right:0;
    text-align:center;
    z-index:10;
    animation-name:dropHeader;
    animation-iteration-count:1;
    animation-timing-function:ease;
    animation-duration:0.75s
}
header ul{
    display:inline-block;
    background:#fff;
    text-align:center;
    padding:10px;
    margin:0;
    border-bottom-right-radius:4px;
    border-bottom-left-radius:4px
}
header li{
    display:inline-block
}
header a{
    display:block;
    color:#000000;
    padding:10px
}
header a:hover{
    color:#0065a4;
    text-decoration:none;
    background:#eee;
    border-radius:4px
}
header a:focus{
    color:#3498db;
    text-decoration:none
}
header.active{
    display:block
}
header.sticky{
    position:fixed;
    z-index:999
}
#menu.active{
    display:block
}
#lead{
    position:relative;
    height:100vh;
    min-height:100px;
    max-height:200px;
    background-color: #0065a4;
    background-size:cover;
    padding:15px;
    overflow:hidden
}
#lead-content{
    position:absolute;
    z-index:10;
    top:26%;
    left:50%;
    transform:translate(-50%, -50%);
    text-align:center
}
#lead-content h1,#lead-content h2{
    margin:0
}
#lead-content h1{
    color:#black;
    font-weight:900;
    font-size:2em;
    text-transform:uppercase;
    letter-spacing:0.05em;
    line-height:0.9em
}
#lead-content h2{
    color:#a0cfee;
    font-weight:500;
    font-size:2.25em;
    margin-bottom:15px
}
#mainTable {
    border: 2px solid black;
    border-collapse: separate;
    margin-left: 220px;
    margin-right: 220px;
    margin-bottom:120px;
    border-radius: 10px;
    text-align: center;
}
#mainTable td,
th {
    border: 3px solid black;
    width: 200px;
    font-weight: bold;
    border-collapse: collapse;
}

#mainTable th {
    background-color:#0065a4;
    color:white;
    text-decoration: underline;
    font-weight: bold;
    font-size: 25px;
}

#mainTable td {
    font-size: 16px;
}

#mainTable tr:nth-child(even) {
    background-color: white;
}
#mainTable tr:nth-child(odd) {
    background-color: white;
}
#searchResults {
    border: 2px solid black;
    border-collapse: separate;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
}

#searchResults th {
    background-color: #0065a4;
    color: white;
    text-decoration: underline;
    font-weight: bold;
    font-size: 20px;
}

#searchResults td,
th {
    border: 2px solid black;
    width: 250px;
    font-weight: bold;
    text-align: center;
}

#searchResults td {
    font-size: 18px;
}

.btn {
    background-color:green;
    font-weight: bold;
    font-size: 16px;
    border: 3px solid black;
    border-radius: 5px;
}

.btnDelete {
    background-color: red;
    font-weight: bold;
    border: 3px solid black;
    font-size: 16px;
    border-radius: 5px;
}

.removeEverything {
    background-color: red;
    font-weight: bold;
    border: 3px solid black;
    font-size: 20px;
    border-radius: 5px;
}
.lbl {
    font-weight: bold;
    font-size: 20px;
}

.field {
    border: 2px solid black;
    font-weight: bold;
}

</style>