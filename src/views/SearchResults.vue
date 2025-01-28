<template>
    <div class="search-results">
        <AppResult :searchQuery="searchQuery" />
    </div>
</template>

<script>
import AppResult from "@/components/Result.vue";
import { useRoute } from "vue-router";

export default {
    name: "SearchResults",
    components: {
        AppResult,
    },
    computed: {
        searchQuery() {
            return useRoute().query.q || "";
        },
    },
};
</script>

<style scoped>
.search-results {
    padding: 20px;
}
</style>