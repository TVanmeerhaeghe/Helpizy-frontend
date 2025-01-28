<template>
    <div>
        <AppResult :categoryId="categoryId" />
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import AppResult from "@/components/Result.vue";

export default {
    name: "CategoryResults",
    components: {
        AppResult,
    },
    data() {
        return {
            categoryId: useRoute().params.id,
        };
    },
};
</script>

<style scoped></style>