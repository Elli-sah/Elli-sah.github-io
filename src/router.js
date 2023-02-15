import { createRouter, createWebHashHistory } from 'vue-router';

import ProductsView from './views/ProductsView.vue';
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ProductsView,
      path: '/products',
    },
    {
      component: HomeView,
      path: '/',
    },
    {
      component: LoginView,
      path: '/login',
    },
  ],
});
// TODO
//  path: '/login:id' adressparameter
