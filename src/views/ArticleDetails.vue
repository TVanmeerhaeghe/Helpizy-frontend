<template>
    <div class="article-details">
        <div v-if="loading">Chargement de l’article…</div>
        <div class="article-content" v-else>
            <p class="article-date" v-if="lastModifiedDate">Dernière mise à jour : {{ lastModifiedDate }}</p>
            <h1>{{ articleTitle }}</h1>
            <img v-if="article.thumbnail" :src="article.thumbnail" alt="Thumbnail" @error="handleImageError" />
            <h4>{{ categoryName }}</h4>
            <div class="article-text">
                <p v-html="articleContent"></p>
            </div>
            <video v-if="article.video_url" :src="article.video_url" controls @error="handleVideoError">
                Votre navigateur ne supporte pas la lecture vidéo.
            </video>
        </div>
        <div class="question">
            <h5>Une question ?</h5>
            <div class="question-button">
                <button id="expert">J'apelle un expert<img src="../assets/article/crown.svg" alt="Icone" /></button>
                <button id="pose-question">Je pose ma question</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleDetails',
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            article: null,
            loading: true,
        };
    },
    async created() {
        await this.fetchArticle(this.id);
    },
    computed: {
        articleTitle() {
            const frenchTranslation = this.article?.translations?.find(
                (t) => t.id_lang === 1
            );
            return frenchTranslation ? frenchTranslation.title : 'Titre inconnu';
        },
        articleContent() {
            const frenchTranslation = this.article?.translations?.find(
                (t) => t.id_lang === 1
            );
            return frenchTranslation ? frenchTranslation.content : 'Contenu non disponible';
        },
        categoryName() {
            return this.article?.categoryName || 'Catégorie inconnue';
        },
        lastModifiedDate() {
            if (!this.article?.updatedAt) return null;
            const dateObj = new Date(this.article.updatedAt);
            return dateObj.toLocaleString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
        },
    },
    methods: {
        async fetchArticle(id) {
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/post/${id}`);
                const data = await response.json();

                if (data.id_category) {
                    try {
                        const catResponse = await fetch(
                            `${process.env.VUE_APP_API_URL}/category/${data.id_category}`
                        );
                        const catData = await catResponse.json();
                        const catTranslation = catData?.translations?.find(
                            (t) => t.id_lang === 1
                        );
                        data.categoryName = catTranslation
                            ? catTranslation.title
                            : 'Catégorie inconnue';
                    } catch (err) {
                        data.categoryName = 'Catégorie inconnue';
                    }
                }

                this.article = data;
            } catch (err) {
                console.error('Erreur lors de la récupération de l’article :', err);
            } finally {
                this.loading = false;
            }
        },
        handleImageError(event) {
            event.target.src = require('../../public/placeholder.jpg');
        },
        handleVideoError(event) {
            event.target.src = require('../../public/video-placeholder.mp4');
        },
    },
};
</script>

<style scoped>
.article-details {
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px;
}

.article-details img:not(.question img) {
    max-width: 1100px;
    display: block;
    margin-bottom: 20px;
    margin-top: 50px;
}

.article-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.article-content h1 {
    font-size: 48px;
    text-align: center;
}

video {
    max-width: 767px;
}

.article-date {
    color: #53B1FD;
}

.question {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 23px 32px;
    background-color: #F9FAFB;
    border-radius: 16px;
    margin-top: 70px;
}

.question h5 {
    font-size: 24px;
}

.question-button {
    margin-top: 15px;
    display: flex;
    gap: 30px
}

.question-button button {
    font-size: 16px;
}

#expert {
    background-color: white;
    border: 1px solid #D0D5DD;
    color: black;
}

#expert img {
    margin-left: 10px;
}

#pose-question {
    background-color: #FFA500;
    border: 1px solid #FFA500;
}
</style>