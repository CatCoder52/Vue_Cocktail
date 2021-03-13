import Vue from 'vue';
import VueRouter from 'vue-router';
import EmptyLayout from '../layouts/empty.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: EmptyLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/home.vue'),
      },
    ],
  },
  {
    path: '/cocktails',
    component: EmptyLayout,
    children: [
      {
        path: '',
        name: 'CocktailList',
        component: () => import('../views/cocktail.vue'),
      },
      {
        path: ':id',
        name: 'CocktailDetail',
        component: () => import('../views/cocktail-detail.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
