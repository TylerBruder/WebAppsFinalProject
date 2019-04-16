 <template>
    <div>
        <div v-bind:key="announcement.id" v-for="announcement in announcements">
            <AnnouncementSubSection v-bind:announcement="announcement">
        </div>
    </div>
</template>

<script>
    import AnnouncementSubSection from './AnnouncementSubSection.vue';

    export default {
        name: "Announcements",
        components: {
            AnnouncementSubSection
        },
        props: ["announcements"]
    }
</script>

<style scoped>

</style>