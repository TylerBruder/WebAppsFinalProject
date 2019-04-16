<template>
    <div class="events">
        <table>
            <thead>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <th>Event Type</th>
            </thead>
            <tbody id ="eventBody" ref ="eventBody">
                
            </tbody>
        </table>
    </div>
</template>

<script>
    import firebaseApp from "./firebaseInit";
    import router from "@/router";

    export default {
        name: "events",
        data: function() {
            return {
                date: "",
                time: "",
                name: "", 
                type: ""
            }
        },
        methods: {
            gotData: function gotData(data) {
                let events = data.val();
                let keys = Object.keys(events);
                console.log(keys);
                for (let i = 0; i < keys.length; i++) {
                    let currentKey = keys[i];
                    this.date = events[currentKey].date;
                    this.name = events[currentKey].name;
                    this.time = events[currentKey].time;
                    this.type = events[currentKey].type;
                    this.$refs.eventBody.appendChild('<tr id=' + currentKey + '><td>' + this.name + '</td><td>' 
                                                        + this.date + '</td><td>' 
                                                        + this.time + '</td><td></tr>');
                }
            },
            errData: function errData(err) {
            console.log("error");
            },
            mounted() {
                var ref = firebaseApp.database().ref("Events");
                ref.on("value", this.gotData, this.errData);
            }
        }
    }

    
</script>

<style scoped>


</style>