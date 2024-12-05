<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-nav">
        <img src="../assets/logo.png" />
        <nav>
          <ul>
            <li><router-link to="/#">Thémes</router-link></li>
            <li><router-link to="/#">S'abonner</router-link></li>
            <li><router-link to="/#">Contribuer</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="header-log">
        <nav>
          <ul>
            <li><router-link to="/#">Se connecter</router-link></li>
            <li><button>S'inscrire</button></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
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

.header-content nav ul {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
}

.header-content nav ul li {
  margin-right: 30px;
}
</style>
