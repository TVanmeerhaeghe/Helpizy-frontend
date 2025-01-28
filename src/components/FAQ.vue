<template>
    <section class="faq">
        <div v-for="(question, index) in questions" :key="question.id_question" class="faq-item">
            <div class="faq-header" @click="toggleAccordion(index)">
                <h5>{{ getTranslatedTitle(question) }}</h5>
                <button>
                    <span v-if="expandedIndex === index">-</span>
                    <span v-else>+</span>
                </button>
            </div>
            <div v-if="expandedIndex === index" class="faq-content">
                <p>{{ getTranslatedContent(question) }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppFAQ',
    data() {
        return {
            questions: [],
            expandedIndex: null
        }
    },
    async created() {
        await this.fetchQuestions()
    },
    methods: {
        async fetchQuestions() {
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/questions`)
                const data = await response.json()
                const spotlightQuestions = data.filter(q => q.isSpotlight === true)
                this.questions = spotlightQuestions.slice(-3)
            } catch (err) {
                console.error('Erreur lors de la récupération des questions :', err)
            }
        },
        getTranslatedTitle(question) {
            const fr = question.translations?.find(t => t.id_lang === 1)
            return fr ? fr.title : 'Titre inconnu'
        },
        getTranslatedContent(question) {
            const fr = question.translations?.find(t => t.id_lang === 1)
            return fr ? fr.content : 'Contenu inconnu'
        },
        toggleAccordion(index) {
            if (this.expandedIndex === index) {
                this.expandedIndex = null
            } else {
                this.expandedIndex = index
            }
        }
    }
}
</script>

<style scoped>
.faq {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
}

.faq-item {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #fff;
}

.faq-item:not(:last-child) {
    border-bottom: 1px solid #919191;
}

.faq-header {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.faq-header button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 4px;
    background-color: #53B1FD99;
    font-size: 30px;
    cursor: pointer;
}

.faq-header h5 {
    font-size: 18px;
    margin: 0;
}

.faq-content {
    margin-top: 10px;
}
</style>