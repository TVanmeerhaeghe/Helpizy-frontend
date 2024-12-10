<template>
    <section class="faqs">
        <div class="faq-title">
            <img src="../assets/home/faq.svg" alt="picto faq">
            <p class="title-blue">F.A.Q</p>
            <h4>Des <span class="title-blue">Questions ?</span></h4>
        </div>
        <AppFAQ />
    </section>
</template>

<script>
import AppFAQ from '@/components/FAQ.vue';

export default {
    name: 'ArticleView',
    components: {
        AppFAQ
    },
};
</script>

<style scoped>
.faqs {
    width: 1150px;
    margin: 0 auto;
    box-shadow: 0px 0px 23px -6px #00000040;
    border-radius: 10px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 50px;
}

.faq-title h4 {
    font-size: 36px;
}
</style>