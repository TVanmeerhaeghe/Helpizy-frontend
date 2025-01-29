<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-nav" v-if="!isAuthPage">
        <router-link to="/"><img src="../assets/logo.png" alt="Logo" /></router-link>
        <nav class="desktop-menu">
          <ul>
            <li><router-link to="/#">Thèmes</router-link></li>
            <li><router-link to="/#">S'abonner</router-link></li>
            <li><router-link to="/#">Contribuer</router-link></li>
          </ul>
        </nav>
      </div>

      <div class="header-log desktop-menu">
        <div v-if="isLoggedIn" class="user-info">
          <p>Bonjour {{ user.firstname }} !</p>
        </div>
        <nav v-else>
          <ul>
            <li><router-link to="/login">Se connecter</router-link></li>
            <li><button><router-link to="/signin">S'inscrire</router-link></button></li>
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
            <li><router-link to="/#">Thèmes</router-link></li>
            <li><router-link to="/#">S'abonner</router-link></li>
            <li><router-link to="/#">Contribuer</router-link></li>
          </ul>
          <ul v-if="!isLoggedIn">
            <li><router-link to="/login" @click="closeMenu">Se connecter</router-link></li>
            <li><button><router-link to="/signin" @click="closeMenu">S'inscrire</router-link></button></li>
          </ul>
          <div v-else class="user-info">
            <p>Bonjour {{ user.firstname }} !</p>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
      user: null,
    };
  },
  computed: {
    isAuthPage() {
      const authRoutes = ["/login", "/signin"];
      return authRoutes.includes(this.$route.path);
    },
    isLoggedIn() {
      return !!this.user;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    loadUser() {
      try {
        const authData = JSON.parse(localStorage.getItem("authToken"));
        if (authData && authData.token) {
          const expirationDate = new Date(authData.expiration);
          if (new Date() < expirationDate) {
            const base64Url = authData.token.split(".")[1];
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const jsonPayload = decodeURIComponent(
              atob(base64)
                .split("")
                .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
            );
            this.user = JSON.parse(jsonPayload);
          } else {
            localStorage.removeItem("authToken")
          }
        }
      } catch (err) {
        console.error("Erreur lors du chargement des données utilisateur :", err);
      }
    },
  },
  mounted() {
    this.loadUser();
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

.desktop-menu ul {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
}

.desktop-menu ul:not(.header-log nav ul) {
  gap: 30px;
}

.desktop-menu nav ul li {
  margin-right: 30px;
}

.user-info {
  font-weight: bold;
  font-size: 16px;
  color: #344054;
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

@media screen and (max-width: 760px) {
  .desktop-menu {
    display: none !important;
  }

  .hamburger {
    display: block;
  }

  .mobile-nav ul li {
    font-size: 20px;
  }

  .mobile-nav ul {
    padding-left: unset;
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
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
