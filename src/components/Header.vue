<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-nav">
        <img src="../assets/logo.png" alt="Logo" />
        <nav class="desktop-menu">
          <ul>
            <li><router-link to="/#">Thèmes</router-link></li>
            <li><router-link to="/#">S'abonner</router-link></li>
            <li><router-link to="/#">Contribuer</router-link></li>
          </ul>
        </nav>
      </div>

      <div class="header-log desktop-menu">
        <nav>
          <ul>
            <li><router-link to="/#">Se connecter</router-link></li>
            <li><button>S'inscrire</button></li>
          </ul>
        </nav>
      </div>

      <button class="hamburger" @click="toggleMenu" aria-label="Ouvrir le menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <transition name="slide">
      <div class="mobile-menu" v-if="isMenuOpen">
        <button class="close-button" @click="closeMenu">X</button>

        <nav class="mobile-nav">
          <ul>
            <li><router-link to="/#" @click="closeMenu">Thèmes</router-link></li>
            <li><router-link to="/#" @click="closeMenu">S'abonner</router-link></li>
            <li><router-link to="/#" @click="closeMenu">Contribuer</router-link></li>
          </ul>
          <ul>
            <li><router-link to="/#" @click="closeMenu">Se connecter</router-link></li>
            <li><button @click="closeMenu">S'inscrire</button></li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.app-header {
  background-color: #f9fafb;
  padding: 26px;
  border-bottom: 1px solid #ddd;
  position: relative;
  z-index: 100;
}

.header-content {
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.desktop-menu nav ul {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
}

.desktop-menu nav ul li {
  margin-right: 30px;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 24px;
  padding: 0;
}

.hamburger span {
  display: block;
  height: 3px;
  background-color: #333;
  margin-bottom: 4px;
  border-radius: 2px;
  transition: 0.3s;
  z-index: 5;
}

@media screen and (max-width: 1080px) {
  .header-nav img {
    width: 90px;
    height: 30px;
    margin-right: unset;
  }
}

@media screen and (max-width: 760px) {
  .desktop-menu {
    display: none !important;
  }

  .hamburger {
    display: block;
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  max-width: 300px;
  height: 100vh;
  background-color: #f9fafb;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  padding: 26px;
  display: flex;
  flex-direction: column;
}

.close-button {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 20px;
  color: black;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
}

.mobile-nav ul li {
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 18px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
