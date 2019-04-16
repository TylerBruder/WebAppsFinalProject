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
                <!-- <th>Bio</th> -->
                <th>Standing</th>
                <th>Email</th>
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
           // var bio = recordAdded.child("bio").val();
            var standing = recordAdded.child("standing").val();
            var email = recordAdded.child("email").val();
            if (phone.length == 7) {
                phone = phone.substring(0, 3) + "-" + phone.substring(3, 7);
            } else if (phone.length == 10) {
                phone =
                    "(" +
                    phone.substring(0, 3) +
                    ")" +
                    phone.substring(3, 6) +
                    "-" +
                    phone.substring(6, 10);
            }

            // adds friend to webpage
            newFriend.innerHTML =
                "<td>" + name + "</td><td>" 
                       + phone + "</td><td>" 
                //       + bio + "</td><td>"
                       + standing + "</td><td>"
                       + email + "</td>"
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
#mainTable {
    border: 2px solid black;
    border-collapse: separate;
    margin-left: 315px;
    margin-bottom:120px;
    border-radius: 10px;
    text-align: center;
    background-color:#0065a4;
    color:white;
}
td,th {
    border: 3px solid black;
    width: 200px;
    font-weight: bold;
    border-collapse: collapse;
}

#mainTable th {
    background-color:black;
    color:white;
    text-decoration: underline;
    font-weight: bold;
    font-size: 25px;
}

#mainTable td {
    font-size: 16px;
}
</style>