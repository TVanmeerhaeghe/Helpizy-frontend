<template>
  <section class="hero-banner">
    <div class="right-img-banner">
      <img src="../assets/home/star.svg" alt="picto etoile" />
    </div>
    <div class="hero-content">
      <h1 class="hero-title">
        Une recherche, des <span class="title-blue">solutions</span>
      </h1>
      <p class="hero-description">
        Helpizy t’accompagne avec
        <span class="title-bold">plus de 1 000 de tutoriels</span> sur des
        tâches de la vie quotidienne.
      </p>
    </div>
    <img src="../assets/home/asking-question.svg" alt="picto question" class="picto-hero asking" />
    <div class="search">
      <div class="search-bar">
        <i class="search-icon"></i>
        <input type="text" placeholder="Quel est ton problème ?" />
        <i class="mic-icon"></i>
      </div>
    </div>
    <div class="picto-bottom">
      <img src="../assets/home/arrow-grey.svg" alt="fleche grise" class="picto-fleche" />
      <img src="../assets/home/motivate-someone.svg" alt="picto motivation" class="picto-motiv" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBanner',
};
</script>

<style scoped>
.hero-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f9fafb;
  flex-direction: column;
  width: 100%;
  padding: 50px 0 0 0;
}

.hero-content {
  max-width: 1440px;
}

.hero-title {
  font-size: 58px;
  color: black;
  margin-top: 20px;
  font-weight: 500;
}

.hero-description {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 2rem;
}

.right-img-banner {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  max-width: 1400px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 13px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  width: 100%;
  max-width: 600px;
}

.search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  margin-top: 70px;
}

.search-bar input {
  border: none;
  background: transparent;
  flex: 1;
  font-size: 16px;
  color: #333;
  outline: none;
  margin-left: 10px;
  margin-right: 10px;
}

.search-bar .search-icon,
.search-bar .mic-icon {
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
}

.search-bar .search-icon {
  background-image: url('../assets/home/search.svg');
}

.search-bar .mic-icon {
  background-image: url('../assets/home/micro.svg');
}

.picto-hero {
  position: absolute;
  left: 150px;
}

.picto-bottom {
  display: flex;
  max-width: 1450px;
  width: 100%;
  justify-content: space-between;
}

.picto-fleche {
  margin-left: 20%;
}

@media screen and (max-width:1350px) {
  .picto-hero {
    width: 200px;
    left: 5%;
  }
}

@media screen and (max-width:1150px) {
  .picto-hero {
    width: 150px;
  }
}

@media screen and (max-width:760px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-banner {
    padding: 30px;
    width: unset;
  }
}
</style>
