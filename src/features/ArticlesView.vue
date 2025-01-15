<template>
    <section class="articles">
        <div class="articles-title">
            <img src="../assets/home/work-in-progress-2--work-work-in-progress.svg" alt="picto work in progress">
            <h4>Nos <span class="title-blue">articles</span> du moment</h4>
        </div>
        <AppArticle />
    </section>
</template>

<script>
import AppArticle from '@/components/Article.vue';

export default {
    name: 'ArticleView',
    components: {
        AppArticle
    },
};
</script>

<style scoped>
.articles {
    background-color: #f9fafb;
    margin-top: 60px;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.articles h4 {
    font-size: 36px;
    font-weight: 500;
}

.articles-title img {
    position: absolute;
    left: 100px;
}
</style>