<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-nav">
        <router-link to="/"><img src="../assets/logo.png" /></router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LoginHeader',
};
</script>

<style scoped>
.app-header {
  background-color: #f9fafb;
  padding: 26px;
  border-bottom: 1px solid #ddd;
}

.header-content {
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.header-nav {
  display: flex;
  align-items: center;
}

.header-nav img {
  width: 150px;
  height: 50px;
  margin-right: 50px;
}
</style>
