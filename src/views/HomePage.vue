<template>
  <div class="home-page">
    <HeroBanner />
    <section class="explication">
      <div>
        <img
          src="../assets/home/meditation-yoga.svg"
          alt="illustration méditation"
        />
      </div>
      <div class="texte-explication">
        <p class="title-blue title-bold">Simplifiez votre vie quotidienne</p>
        <h2 class="title-36">
          Fini le stress administratif, vis
          <span class="title-blue">sereinement !</span>
        </h2>
        <p class="font-20 txt-explication">
          Helpizy te guide et t’accompagne dans toutes tes démarches
          administratives et quotidiennes. Découvre des guides détaillés, des
          informations claires et des aides gouvernementales pour te simplifier
          la vie.
        </p>
        <button class="button-orange txt-button">Dite m'en plus !</button>
      </div>
    </section>
  </div>
</template>

<script>
import HeroBanner from '@/features/HeroBanner.vue';

export default {
  name: 'HomePage',
  components: {
    HeroBanner,
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

.explication {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  gap: 90px;
}

.texte-explication {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.txt-explication {
  margin: 40px 0;
}

.txt-button {
  width: 180px;
}
</style>
