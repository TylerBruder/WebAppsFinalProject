<template>
    <div class="announcement-sub-section">
        <h2>{{announcement.subject}}</h2>
        <p>{{announcement.message}}</p>
        <p>{{announcement.creator}}</p>
        <p>{{announcement.date}} {{announcement.time}}</p>
    </div>
</template>

<script>
    export default {
        name: "AnnouncementSubSection",
        props: ["announcements"]
    }
</script>

<style scoped>

</style>

