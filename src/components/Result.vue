<template>
    <div class="result-container">
        <p v-if="categoryName" class="txt-center">{{ posts.length }} résultat{{ posts.length > 1 ? 's' : '' }}</p>
        <p v-else-if="searchQuery" class="nb-result">
            {{ posts.length }} résultat{{ posts.length > 1 ? 's' : '' }} trouvé{{ posts.length > 1 ? 's' : '' }}
            pour "{{ searchQuery }}"
        </p>
        <ul v-if="posts.length">
            <li v-for="post in posts" :key="post.id_post" class="post-item" @click="goToArticle(post)"
                :class="{ 'disabled': post.is_premium && !authToken }">
                <div class="post-thumbnail">
                    <img :src="post.thumbnail" alt="Miniature" @error="handleImageError" />
                </div>
                <div class="post-details">
                    <div class="flex-premium">
                        <div v-if="post.is_premium" class="badge-premium">
                            <p>0.75€</p>
                            <img src="@/assets/article/premium.svg" alt="Picto Premium">
                        </div>
                    </div>
                    <h4 class="font-nunito">{{ post.title }}</h4>
                    <div class="post-counters">
                        <p>
                            <img src="@/assets/article/clock.svg" alt="Temps de lecture" />
                            ~{{ post.readTime }} min
                        </p>
                        <p>
                            <img src="@/assets/article/eye.svg" alt="Vue" /> {{ post.views }}
                        </p>
                        <p>
                            <img src="@/assets/article/hand-thumbs-up.svg" alt="Like" />
                            {{ post.nb_like }}
                        </p>
                        <p>
                            <img src="@/assets/article/dl.svg" alt="Téléchargement" />
                            {{ post.downloads }}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <p v-else>Aucun résultat trouvé.</p>
    </div>
</template>

<script>
export default {
    name: "AppResult",
    props: {
        categoryId: {
            type: [String, Number],
            default: null,
        },
        searchQuery: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            categoryName: "",
            posts: [],
            authToken: localStorage.getItem('authToken') || null,
        };
    },
    methods: {
        async fetchData() {
            try {
                let endpoint = "";
                if (this.categoryId) {
                    endpoint = `${process.env.VUE_APP_API_URL}/category/${this.categoryId}`;
                } else if (this.searchQuery) {
                    endpoint = `${process.env.VUE_APP_API_URL}/post/search?query=${this.searchQuery}`;
                }

                if (!endpoint) return;

                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP ${response.status}`);
                }

                const data = await response.json();

                // Gestion des catégories
                if (this.categoryId) {
                    const translation = data.translations.find((t) => t.id_lang === 1);
                    this.categoryName = translation ? translation.title : "Nom de catégorie indisponible";

                    this.posts = data.posts.map((post) => {
                        const postTranslation = post.translations.find((t) => t.id_lang === 1);
                        return {
                            id_post: post.id_post,
                            title: postTranslation?.title || "Titre indisponible",
                            excerpt: postTranslation?.excerpt || "Résumé indisponible",
                            thumbnail: post.thumbnail || require('../../public/placeholder.jpg'),
                            nb_like: post.nb_like || 0,
                            views: post.views || 0,
                            readTime: Math.floor(Math.random() * 10) + 1,
                            downloads: Math.floor(Math.random() * 100),
                            is_premium: post.is_premium === true
                        };
                    });
                }

                // Gestion des recherches
                else if (this.searchQuery) {
                    this.categoryName = "";

                    this.posts = data.map((post) => {
                        const postTranslation = post.translations.find((t) => t.id_lang === 1);
                        return {
                            id_post: post.id_post,
                            title: postTranslation?.title || "Titre indisponible",
                            excerpt: postTranslation?.excerpt || "Résumé indisponible",
                            thumbnail: post.thumbnail || require('../../public/placeholder.jpg'),
                            nb_like: post.nb_like || 0,
                            views: post.views || 0,
                            readTime: Math.floor(Math.random() * 10) + 1,
                            downloads: Math.floor(Math.random() * 100),
                            is_premium: post.is_premium === true
                        };
                    });
                }
            } catch (err) {
                console.error("Erreur lors de la récupération des données :", err);
            }
        },
        handleImageError(e) {
            e.target.src = require('../../public/placeholder.jpg');
        },
        goToArticle(post) {
            if (post.is_premium) {
                if (!this.authToken) {
                    alert('Vous devez être connecté pour accéder au contenu premium.');
                    return;
                }
            }

            this.$router.push({ name: "ArticleDetails", params: { id: post.id_post } });
        },
    },
    watch: {
        categoryId: "fetchData",
        searchQuery: "fetchData",
    },
    mounted() {
        this.fetchData();
    },
};
</script>


<style scoped>
.result-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li.post-item {
    display: flex;
    gap: 20px;
    background: #f8f8f8;
    margin-bottom: 20px;
    padding: 30px 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #0000001A;
    cursor: pointer;
}

.post-thumbnail img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
}

.post-details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.post-counters {
    display: flex;
    justify-content: space-evenly;

    gap: 15px;
    margin-top: 10px;
}

.post-counters p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
}

.nb-result {
    text-align: center;
    font-size: 14px;
    margin-bottom: 50px;
}

.font-nunito {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: black;
}

.badge-premium {
    background-color: white;
    display: flex;
    width: 100px;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px #0000000F;
    border-radius: 10px;
    padding: 5px 10px;
    margin-bottom: 10px;
}

.post-thumbnail {
    display: flex;
    align-items: flex-end;
}

.badge-premium img {
    width: 30px;
    margin-left: 15px;
}

.badge-premium p {
    font-size: 13px;
    color: #7D7D7E;
}

.flex-premium {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}

.disabled {
    opacity: 0.6;
    pointer-events: none;
    cursor: not-allowed;
}

@media screen and (max-width:760px) {
    li.post-item {
        padding: 10px 20px;
    }

    .result-container h2 {
        font-size: 20px;
    }

    .result-container h4 {
        font-size: 16px;
    }

    .post-thumbnail img {
        width: 75px;
        height: 75px;
    }

    .txt-center {
        text-align: center;
        margin-top: 10px;
    }

    .post-counters {
        justify-content: space-between;
    }

    .badge-premium img {
        width: 25px;
        margin-left: 10px;
    }

    .badge-premium {
        width: 100px;
        padding: 10px 5px;
        align-items: center;
    }

    .badge-premium p {
        margin: unset;
    }
}
</style>