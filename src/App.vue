<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <component
        :is="getHeaderComponent(route)"
        v-if="shouldShowHeader(route)"
      />
      <component :is="Component" />
      <AppFooter v-if="shouldShowFooter(route)" />
    </router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import LoginHeader from '@/components/LoginHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    LoginHeader,
  },
  methods: {
    shouldShowHeader() {
      return true;
    },
    shouldShowFooter(route) {
      const noFooterRoutes = ['/login', '/signin'];
      return !noFooterRoutes.includes(route.path);
    },
    getHeaderComponent(route) {
      const loginHeaderRoutes = ['/login', '/signin'];
      return loginHeaderRoutes.includes(route.path)
        ? 'LoginHeader'
        : 'AppHeader';
    },
  },
};
</script>
