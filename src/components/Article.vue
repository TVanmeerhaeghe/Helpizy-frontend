<template>
  <section class="article">
    <router-link v-for="post in articles" :key="post.id_post" :to="`/article/${post.id_post}`" class="post-item"
      style="text-decoration: none; color: inherit">
      <img :src="post.thumbnail" alt="Thumbnail" @error="handleImageError" class="img-home-article" />
      <h5>{{ post.categoryName }}</h5>
      <div class="title-content">
        <h3>{{ post.postTitle }}</h3>
        <img src="../assets/global/arrow-up-right.svg" alt="" />
      </div>
      <p>{{ truncate(post.excerpt, 150) }}</p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'AppArticle',
  data() {
    return {
      articles: [],
    };
  },
  async created() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/posts`);
        const data = await response.json();

        for (const post of data) {
          const frenchTranslation = post.translations?.find(
            (t) => t.id_lang === 1
          );
          post.postTitle = frenchTranslation
            ? frenchTranslation.title
            : 'Titre inconnu';

          post.excerpt = frenchTranslation
            ? frenchTranslation.excerpt
            : 'Résumé inconnu';

          try {
            const catResponse = await fetch(
              `${process.env.VUE_APP_API_URL}/category/${post.id_category}`
            );
            const catData = await catResponse.json();
            const catTranslation = catData.translations?.find(
              (t) => t.id_lang === 1
            );
            post.categoryName = catTranslation
              ? catTranslation.title
              : 'Catégorie inconnue';
          } catch (err) {
            post.categoryName = 'Catégorie inconnue';
          }
        }

        this.articles = data.slice(-3);
      } catch (error) {
        console.error('Erreur lors de la récupération des posts :', error);
      }
    },
    getLimitedDescription(post) {
      const translationFr = post.translations?.find((t) => t.id_lang === 1);
      if (!translationFr) return '';
      const fullContent = translationFr.content || '';
      const words = fullContent.split(/\s+/);
      const shortDescription = words.slice(0, 20).join(' ');
      return words.length > 20 ? shortDescription + '...' : shortDescription;
    },
    truncate(text, maxLength) {
      if (!text) return '';
      const stripped = text.replace(/<[^>]*>?/gm, '');
      return stripped.length > maxLength ? stripped.slice(0, maxLength) + '…' : stripped;
    },
    handleImageError(event) {
      event.target.src = '../../placeholder.jpg';
    },
  },
};
</script>

<style scoped>
.article {
  height: 600px;
  width: 1000px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
}

.post-item {
  margin: 10px;
  padding: 24px;
  width: 300px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0px 12px 16px -4px #10182814;
  height: 100%;
}

.post-item img {
  max-width: 100%;
  display: block;
}

.img-home-article {
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.title-content {
  display: flex;
  align-items: flex-start;
}

.title-content img {
  margin-left: 20px;
  margin-top: 10px;
}

.post-item h5 {
  color: #53b1fd;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-top: 35px;
}

.post-item h3 {
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
}

.post-item p {
  font-weight: 400;
  font-size: 16px;
  color: #667085;
}

@media screen and (max-width: 1080px) {
  .article {
    flex-direction: column;
    width: unset;
    height: unset;
  }
}

@media screen and (max-width: 760px) {
  .article {
    margin-top: 30px;
  }

  .post-item h3 {
    font-size: 18px;
  }
}
</style>
