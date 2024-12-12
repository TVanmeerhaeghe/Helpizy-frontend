import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AppLogin from '@/views/login/LoginForm.vue';
import AppSignIn from '@/views/login/SignInForm.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: AppLogin },
  { path: '/signin', name: 'SignIn', component: AppSignIn },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
