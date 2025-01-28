<template>
    <section class="reconfort">
        <div class="reconfort-title">
            <h5 class="title-blue">Commence dès maintenant tes 30 jours gratuits</h5>
            <p class="title-blue">Toutes les fonctionnalités Helpizy, sans engagements !</p>
        </div>
        <div><button>Ca m'intérésse !</button></div>
    </section>
</template>

<script>
export default {
    name: 'AppReconfort',
};
</script>

<style scoped>
.reconfort {
    background-color: #B7E9FF2E;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 60px 30px;
}

.reconfort h5 {
    font-size: 36px;
}

.reconfort p {
    font-size: 20px;
}

.reconfort button {
    width: 150px;
    height: 50px;
    cursor: pointer;
}

@media screen and (max-width:1080px) {
    .reconfort {
        flex-direction: column;
    }

    .reconfort-title {
        text-align: center;
    }
}

@media screen and (max-width:760px) {
    .reconfort h5 {
        font-size: 25px;
    }

    .reconfort p {
        font-size: 18px;
    }
}
</style>