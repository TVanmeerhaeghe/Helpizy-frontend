import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AppLogin from '@/views/login/LoginForm.vue';
import AppSignIn from '@/views/login/SignInForm.vue';
import ArticleDetails from '@/views/ArticleDetails.vue';
import CategoryResults from '@/views/CategoryResults.vue';
import SearchResults from '@/views/SearchResults.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: AppLogin },
  { path: '/signin', name: 'SignIn', component: AppSignIn },
  {
    path: '/article/:id',
    name: 'ArticleDetails',
    component: ArticleDetails,
    props: true,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: CategoryResults
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchResults
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
