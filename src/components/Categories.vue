<template>
  <section class="categories">
    <div class="info-cat">
      <h4 class="title-36">Explore nos <span class="title-blue">tutoriels</span> pratiques</h4>
      <p class="font-20">Notre plateforme vous propose une multitude de guides détaillés et d'informations claires pour
        vous simplifier la vie sur différents thèmes :</p>
    </div>
    <div class="all-cat">
      <div class="block-cat">
        <img src="../assets/home/Documents 1.png" alt="">
        <p class="title-cat">Administration</p>
        <div class="separator"></div>
        <p class="txt-cat">Faire une déclaration d’assurance, remplir un constat, changer de banque, déclarer un
          changement d’adresse,..</p>
      </div>

      <div class="block-cat">
        <img src="../assets/home/Grow Plants Home Garden.png" alt="">
        <p class="title-cat">Tâches quotidiennes</p>
        <div class="separator"></div>
        <p class="txt-cat">Faire une lessive, détartrer une douche, utiliser un fer à repasser, monter un clic-clac,..
        </p>
      </div>

      <div class="block-cat">
        <img src="../assets/home/Car 2.png" alt="">
        <p class="title-cat">Entretien du véhicule</p>
        <div class="separator"></div>
        <p class="txt-cat">Changer une ampoule, des essuies glaces, remplacer l’huile moteur, changer une roue,..</p>
      </div>

      <div class="block-cat">
        <img src="../assets/home/Becoming Rich 9.png" alt="">
        <p class="title-cat">Aides gouvernementales</p>
        <div class="separator">Changer une ampoule, des essuies glaces, remplacer l’huile moteur, changer une roue,..
        </div>
        <p class="txt-cat"></p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AppCategories',
};
</script>

<style>
.categories {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 80px;
}

.all-cat {
  display: flex;
  flex-direction: row;
}

.block-cat {
  width: 45%;
  box-shadow: 0px 4px 16px 0px #00000047;
  border: 1px solid #DEDEDE;
  flex: 1;
}
</style>
