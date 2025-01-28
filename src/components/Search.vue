<template>
    <section class="block-search">
        <div class="search">
            <div class="search-bar">
                <i class="search-icon"></i>
                <input type="text" v-model="searchQuery" placeholder="Quel est ton problème ?"
                    @keyup.enter="submitSearch" />
                <i class="mic-icon"></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppSearch",
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        submitSearch() {
            if (this.searchQuery.trim()) {
                this.$router.push({ name: "Search", query: { q: this.searchQuery.trim() } });
            }
        },
    },
};
</script>

<style scoped>
.block-search {
    background-color: #FBFBFB;
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
    background-color: white;
}

.search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
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
</style>