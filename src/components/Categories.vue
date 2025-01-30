<template>
  <section class="categories">
    <div class="info-cat">
      <h4 class="title-36">
        Explore nos <span class="title-blue">tutoriels</span> pratiques
      </h4>
      <p class="font-20">
        Notre plateforme vous propose une multitude de guides détaillés et
        d'informations claires pour vous simplifier la vie sur différents thèmes
        :
      </p>
    </div>

    <div class="all-cat">
      <div
        class="block-cat"
        v-for="cat in categories"
        :key="cat.id"
        @click="goToCategory(cat.id)"
      >
        <img :src="cat.imgSrc" alt="" />
        <p class="title-cat">{{ cat.title }}</p>
        <div class="separator"></div>
        <p class="txt-cat">{{ cat.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppCategories',
  data() {
    return {
      categories: [
        {
          id: 1,
          imgSrc: require('@/assets/home/Grow Plants Home Garden.png'),
          title: 'Tâches quotidiennes',
          description:
            'Faire une lessive, détartrer une douche, utiliser un fer à repasser, monter un clic-clac,..',
        },
        {
          id: 2,
          imgSrc: require('@/assets/home/Documents 1.png'),
          title: 'Administration',
          description:
            'Faire une déclaration d’assurance, remplir un constat, changer de banque, déclarer un changement d’adresse,..',
        },
        {
          id: 3,
          imgSrc: require('@/assets/home/Car 2.png'),
          title: 'Entretien du véhicule',
          description:
            'Changer une ampoule, des essuies glaces, remplacer l’huile moteur, changer une roue,..',
        },
        {
          id: 4,
          imgSrc: require('@/assets/home/Becoming Rich 9.png'),
          title: 'Aides gouvernementales',
          description:
            'Prime d’activité, aide au transport, aides locales pour le logement social, chèque énergie,..',
        },
      ],
    };
  },
  methods: {
    goToCategory(id) {
      this.$router.push(`/category/${id}`);
    },
  },
};
</script>

<style scoped>
.categories {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 80px;
  padding: 30px;
}

.info-cat {
  margin-bottom: 30px;
}

.title-36 {
  font-size: 36px;
  margin-bottom: 15px;
}

.title-blue {
  color: #2779ff;
}

.font-20 {
  font-size: 20px;
}

.all-cat {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.block-cat {
  width: 48%;
  margin-bottom: 40px;
  box-shadow: 0px 4px 16px 0px #00000047;
  border: 1px solid #dedede;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  cursor: pointer;
}

.block-cat img {
  width: 250px;
}

.txt-cat {
  max-width: 450px;
  text-align: center;
  color: black;
  font-size: 18px;
}

.title-cat {
  font-family: 'Shantell Sans', cursive;
  font-weight: 600;
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
}

@media screen and (max-width: 1080px) {
  .block-cat {
    width: 100%;
  }
}

@media screen and (max-width: 760px) {
  .txt-cat {
    font-size: 16px;
  }

  .title-cat {
    font-size: 25px;
  }

  .block-cat img {
    width: 150px;
  }

  .categories {
    margin-bottom: 40px;
  }
}
</style>
