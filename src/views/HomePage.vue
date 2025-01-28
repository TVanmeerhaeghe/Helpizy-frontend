<template>
  <div class="home-page">
    <HeroBanner />
    <section class="explication">
      <div>
        <img src="../assets/home/meditation-yoga.svg" alt="illustration méditation" />
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
    <section class="explication-two">
      <div class="separator"></div>
      <div class="explication-two-items">
        <div class="explication-two-item">
          <img src="../assets/home/Help.svg" alt="Picto aide" />
          <h3 class="font-20">
            Simplifie tes démarches administratives et quotidiennes.
          </h3>
        </div>
        <div class="explication-two-item">
          <img src="../assets/home/Investing_Hourglass.svg" alt="Picto Sablier" />
          <h3 class="font-20">Gagne du temps précieux</h3>
        </div>
        <div class="explication-two-item">
          <img src="../assets/home/Product_Manual.svg" alt="picto manuel" />
          <h3 class="font-20">Sois serein(e), on te guide à chaque étape</h3>
        </div>
      </div>
      <div class="separator"></div>
    </section>
    <AppCategories />
    <section class="subscription">
      <div class="subscription-txt">
        <p class="title-blue title-bold">Notre abonnement</p>
        <h3 class="title-36">Bénéfice d’encore plus d’ accompagnement</h3>
        <p class="font-20 txt-subscription">
          Opter pour notre version premium, c’est bénéficier d’encore plus
          d’articles illustrés en vidéo, sans aucune publicité !
        </p>
      </div>
      <div class="subscription-content">
        <h5 class="title-36">0.99€ / mois</h5>
        <h5 class="font-20">ou 10€ / an</h5>
        <p class="font-20 margin-b-0">Avec :</p>
        <ul>
          <li class="checked-true">+ 1000 tutoriels supplémentaires</li>
          <li class="checked-true">Accès à des vidéos démonstratives</li>
          <li class="checked-true">Accès à un interlocuteur “expert”</li>
          <li class="checked-false">Publicité</li>
        </ul>
        <button class="button-orange">Je m'abonne maintenant</button>
      </div>
    </section>
    <section class="form">
      <div class="form-txt">
        <img src="../assets/home/Voice.svg" alt="Picto voix" />
        <h4 class="title-36">Ta <span class="title-blue">voix</span> compte</h4>
        <p class="font-20 txt-subscription">
          Contribue à notre communauté en ajoutant tes recommandations sur les
          articles existants et propose de nouvelles idées d'articles via le
          formulaire ci-dessous. Ensemble, rendons Helpizy encore plus utile !
        </p>
      </div>
      <div class="form-number">
        <div>
          <p class="title-number">800</p>
          <p class="number-txt">utilisateurs mensuels</p>
        </div>
        <div class="number-500">
          <p class="title-number">500+</p>
          <p class="number-txt">contributions</p>
        </div>
        <div>
          <p class="title-number">96%</p>
          <p class="number-txt">Prises en comptes</p>
        </div>
      </div>
      <AppForm />
    </section>
    <ArticlesView />
    <FAQView />
  </div>
</template>

<script>
import HeroBanner from '@/features/HeroBanner.vue';
import AppCategories from '@/components/Categories.vue';
import AppForm from '@/components/Form.vue';
import ArticlesView from '@/features/ArticlesView.vue';
import FAQView from '@/features/FAQView.vue';

export default {
  name: 'HomePage',
  components: {
    HeroBanner,
    AppCategories,
    AppForm,
    ArticlesView,
    FAQView
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
  padding: 30px;
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

.explication-two {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

.explication-two-items {
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin: 30px 0;
  padding: 30px;
}

.explication-two-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 460px;
}

.explication-two-item img {
  margin-right: 20px;
}

.subscription {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 100px 0;
  background-image: url('../assets/home/arrow-grey.svg');
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 250px;
  padding: 30px;
}

.subscription-txt {
  text-align: center;
}

.txt-subscription {
  max-width: 750px;
  margin-bottom: 50px;
}

.subscription-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #fff;
  border-radius: 16px;
  box-shadow:
    0px 4px 6px -2px #1018282e,
    0px 12px 16px -4px #10182826;
  border: 1px solid #eaecf0;
  max-width: 767px;
  width: 100%;
  margin-top: 80px;
}

.subscription-content ul li {
  display: flex;
  margin-top: 5px;
}

.subscription-content button {
  width: 500px;
  margin-top: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding: 30px;
}

.form-txt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-txt p {
  text-align: center;
}

.number-txt {
  font-family: 'Shantell Sans', cursive;
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin-top: 0;
  margin-bottom: 0;
}

.title-number {
  margin-top: 0;
}

.form-number {
  display: flex;
  justify-content: space-between;
  max-width: 780px;
  width: 100%;
  margin-top: 0;
}

.form-number div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number-500 {
  padding: 0 50px;
  border-left: 1px solid #eaecf0;
  border-right: 1px solid #eaecf0;
}

@media screen and (max-width: 1350px) {
  .explication {
    max-width: 1100px;
  }

  .faqs {
    max-width: 950px;
  }
}

@media screen and (max-width: 1080px) {

  .explication {
    max-width: 700px;
  }

  .explication-two-items {
    flex-direction: column;
  }

  .subscription-content {
    margin-top: 40px;
  }
}

@media screen and (max-width: 760px) {

  .explication {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    max-width: unset;
    width: unset;
  }

  .subscription-content button {
    width: unset;
  }

  .subscription-content {
    margin-top: unset;
  }

  .form-number {
    flex-direction: column;
    gap: 20px;
  }

  .number-500 {
    border: unset;
  }

  .title-number {
    font-size: 40px;
  }

  .suggestion-form {
    margin-top: 50px;
  }

  .explication img {
    width: 250px;
  }

}
</style>
