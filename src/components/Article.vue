<template>
  <section class="article">
    <div v-for="post in articles" :key="post.id_post" class="post-item">
      <img :src="post.thumbnail" alt="Thumbnail" @error="handleImageError" />
      <h5>Catégorie : {{ post.categoryName }}</h5>
      <p>{{ getLimitedDescription(post) }}</p>
    </div>
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
          try {
            const catResponse = await fetch(
              `${process.env.VUE_APP_API_URL}/category/${post.id_category}`
            );
            const catData = await catResponse.json();
            post.categoryName = catData.title;
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
    handleImageError(event) {
      event.target.src = '../../placeholder.jpg';
    },
  },
};
</script>

<style scoped>
.article {
  height: 500px;
  width: 1000px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
}
.post-item {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 300px;
  box-sizing: border-box;
}
.post-item img {
  max-width: 100%;
  display: block;
}
</style>
