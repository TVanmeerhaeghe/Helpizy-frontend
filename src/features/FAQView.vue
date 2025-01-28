<template>
    <section class="faq-padding">
        <div class="faqs">
            <div class="faq-title">
                <img src="../assets/home/faq.svg" alt="picto faq">
                <div class="faq-title-txt">
                    <p class="title-blue">F.A.Q</p>
                    <h4>Des <span class="title-blue">Questions ?</span></h4>
                </div>
            </div>
            <AppFAQ />
            <button class="go-to-faq"><a href="#">J'accéde à la F.A.Q</a></button>
        </div>
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
.faq-title {
    display: flex;
    align-items: center;
    width: 100%;
}

.faq-title img {
    margin-right: 20px;
}

.faq-title-txt {
    flex: 1;
    text-align: center;
}

.faqs {
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 23px -6px #00000040;
    border-radius: 10px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
}

.faq-padding {
    padding: 30px;
}

.faq-title {
    display: flex;
    justify-content: center;
}

.faq-title-txt {
    text-align: center;
}

.faq-title h4 {
    font-size: 36px;
}

.go-to-faq {
    background-color: #FFA500;
    max-width: 245px;
    margin-top: 10px;
}

@media screen and (max-width: 1350px) {

    .faqs {
        max-width: 950px;
    }
}

@media screen and (max-width: 1080px) {
    .faqs {
        max-width: 600px;
    }
}

@media screen and (max-width: 760px) {
    .faqs {
        max-width: unset;
        align-items: center;
        padding: 30px;
        width: unset;
    }

    .faq-title h4 {
        font-size: 25px;
    }

    .faq-title img {
        width: 50px;
    }
}
</style>