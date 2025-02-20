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
    beforeEnter: async (to, from, next) => {
      const articleId = to.params.id;
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/post/${articleId}`);
        const article = await response.json();

        if (article.is_premium) {
          const token = localStorage.getItem('authToken');
          if (!token) {
            return next({ name: 'Login' });
          }
        }

        next();
      } catch (error) {
        console.error(error);
        next({ name: 'NotFound' });
      }
    }
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
