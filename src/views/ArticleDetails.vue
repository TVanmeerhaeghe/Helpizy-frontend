<template>
    <div class="article-details">
        <div v-if="loading">Chargement de l’article…</div>
        <div class="article-content" v-else>
            <p class="article-date" v-if="lastModifiedDate">
                Mis à jour le {{ lastModifiedDate }}
            </p>
            <h1>{{ articleTitle }}</h1>
            <img v-if="article.thumbnail" :src="article.thumbnail" alt="Thumbnail" @error="handleImageError" />
            <h4>{{ categoryName }}</h4>
            <div class="article-text">
                <p v-html="articleContent"></p>
            </div>
            <iframe v-if="
                article.video_url.includes('youtube') ||
                article.video_url.includes('youtu.be')
            " :src="`https://www.youtube.com/embed/${article.video_url.split('v=')[1]?.split('&')[0] || article.video_url.split('/').pop()}`"
                frameborder="0" allowfullscreen></iframe>
            <video v-else :src="article.video_url" controls></video>
            <div v-if="articleAdditionalContent" class="article-additional-content">
                <p v-html="articleAdditionalContent"></p>
            </div>
        </div>

        <div class="question">
            <h5>Une question ?</h5>
            <div class="question-button">
                <button id="expert">
                    J'apelle un expert<img src="../assets/article/crown.svg" alt="Icone" />
                </button>
                <button id="pose-question">Je pose ma question</button>
            </div>
        </div>

        <div v-if="author" class="author-info">
            <div class="author">
                <img :src="author.profile_picture
                    ? getAuthorPicture(author.profile_picture)
                    : require('../../public/profile.jpg')
                    " alt="Photo de l'auteur" @error="handleAuthorImageError" />
                <p>
                    <span class="bold">{{ author.firstname }}</span> <br />
                    {{ author.email }}
                </p>
            </div>
            <div class="counters">
                <p><img src="../assets/article/eye.svg" alt="Pico Vue" />{{ views }}</p>
                <p @click="incrementLike" class="like">
                    <img src="../assets/article/hand-thumbs-up.svg" alt="Picto like" />{{
                        article.nb_like
                    }}
                </p>
                <p>
                    <img src="../assets/article/dl.svg" alt="picto téléchargement" />
                </p>
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
            author: null,
            views: 0,
            loading: true,
        };
    },
    async created() {
        await this.fetchArticle(this.id);
        this.views += 1;
    },
    computed: {
        articleTitle() {
            const t = this.article?.translations?.find((x) => x.id_lang === 1);
            return t ? t.title : 'Titre inconnu';
        },
        articleContent() {
            const t = this.article?.translations?.find((x) => x.id_lang === 1);
            return t ? t.content : 'Contenu non disponible';
        },
        articleAdditionalContent() {
            const t = this.article?.translations?.find((x) => x.id_lang === 1);
            return t ? t.additionnal_content : null;
        },
        categoryName() {
            return this.article?.categoryName || 'Catégorie inconnue';
        },
        lastModifiedDate() {
            if (!this.article?.updatedAt) return null;
            const d = new Date(this.article.updatedAt);
            return d.toLocaleString('fr-FR', {
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
                const r = await fetch(`${process.env.VUE_APP_API_URL}/post/${id}`);
                const data = await r.json();
                if (data.id_category) {
                    try {
                        const r2 = await fetch(
                            `${process.env.VUE_APP_API_URL}/category/${data.id_category}`
                        );
                        const d2 = await r2.json();
                        const c = d2?.translations?.find((x) => x.id_lang === 1);
                        data.categoryName = c ? c.title : 'Catégorie inconnue';
                    } catch (err) {
                        console.error(
                            'Erreur lors de la récupération de la catégorie :',
                            err
                        );
                    }
                }
                this.article = data;
                if (data.id_author) {
                    try {
                        const r3 = await fetch(
                            `${process.env.VUE_APP_API_URL}/author/${data.id_author}`
                        );
                        const aData = await r3.json();
                        this.author = aData;
                    } catch (err) {
                        console.error("Erreur lors de la récupération de l'auteur :", err);
                    }
                }
            } catch (err) {
                console.error("Erreur lors de la récupération de l'article :", err);
            } finally {
                this.loading = false;
            }
        },
        getAuthorPicture(n) {
            if (!n) return require('../../public/profile.jpg');
            return `${process.env.VUE_APP_API_URL}/uploads/authors/${n}`;
        },
        handleImageError(e) {
            e.target.src = require('../../public/placeholder.jpg');
        },
        handleVideoError(e) {
            e.target.src = require('../../public/video-placeholder.mp4');
        },
        handleAuthorImageError(e) {
            e.target.src = require('../../public/profile.jpg');
        },
        async incrementLike() {
            if (!this.article) return;
            const newLikes = this.article.nb_like + 1;
            try {
                await fetch(
                    `${process.env.VUE_APP_API_URL}/post/${this.article.id_post}`,
                    {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ nb_like: newLikes }),
                    }
                );
                this.article.nb_like = newLikes;
            } catch (err) {
                console.error("Erreur lors de l'incrémentation du like :", err);
            }
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

.article-details img:not(.question img):not(.author img):not(.counters img) {
    max-width: 1100px;
    display: block;
    margin-bottom: 20px;
    margin-top: 50px;
    max-height: 500px;
}

.article-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.article-content h1 {
    font-size: 48px;
    text-align: center;
    max-width: 960px;
}

video,
iframe {
    max-width: 767px;
}

.article-date {
    color: #53b1fd;
}

.article-text {
    max-width: 720px;
}

.article-additional-content {
    margin-top: 50px;
    max-width: 720px;
    width: 720px;
    background-color: #f9fafb;
    padding: 32px;
    border-radius: 16px;
}

.question {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 23px 32px;
    background-color: #f9fafb;
    border-radius: 16px;
    margin-top: 50px;
}

.question h5 {
    font-size: 24px;
}

.question-button {
    margin-top: 15px;
    display: flex;
    gap: 30px;
}

.question-button button {
    font-size: 16px;
    cursor: pointer;
}

#expert {
    background-color: white;
    border: 1px solid #d0d5dd;
    color: black;
}

#expert img {
    margin-left: 10px;
}

#pose-question {
    background-color: #ffa500;
    border: 1px solid #ffa500;
}

.author-info {
    max-width: 720px;
    border-top: 1px solid #eaecf0;
    padding-top: 25px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}

.author {
    align-items: center;
    display: flex;
}

.author p {
    margin: unset;
    margin-left: 10px;
}

.author img {
    width: 56px;
    height: 56px;
    border-radius: 200px;
}

.counters {
    display: flex;
    gap: 10px;
}

.counters p {
    margin: unset;
    border: 1px solid #d0d5dd;
    padding: 10px 16px;
    border-radius: 8px;
    max-height: 20px;
    display: flex;
    box-shadow: 0px 1px 2px 0px #1018280d;
}

.counters p img {
    margin-right: 10px;
}

.counters .like {
    cursor: pointer;
}

iframe {
    width: 760px;
    height: 400px;
}

@media screen and (max-width: 1080px) {
    .article-details {
        max-width: 760px;
    }

    .article-content h1 {
        font-size: 36px;
        max-width: 560px;
    }

    video,
    iframe {
        max-width: 560px;
    }

    .article-additional-content {
        max-width: 560px;
    }

    .question {
        max-width: 560px;
    }

    .author-info {
        max-width: 560px;
    }

    .article-details img:not(.question img):not(.author img):not(.counters img) {
        max-width: 560px;
    }

    iframe {
        width: 560px;
        height: 280px;
    }
}

@media screen and (max-width: 760px) {
    .article-details img:not(.question img):not(.author img):not(.counters img) {
        max-width: unset;
        width: 100%;
    }

    video,
    .author-info {
        max-width: unset;
        width: 100%;
    }

    .article-content h1 {
        font-size: 25px;
        max-width: unset;
        width: 100%;
    }

    .author-info {
        flex-direction: column;
        align-items: center;
    }

    .question {
        max-width: unset;
    }

    .article-additional-content {
        max-width: unset;
        width: 100%;
        padding: 20px;
    }

    .counters {
        margin-top: 30px;
    }

    .question-button {
        flex-direction: column;
    }

    iframe {
        max-width: 100%;
        width: 100%;
    }
}
</style>
