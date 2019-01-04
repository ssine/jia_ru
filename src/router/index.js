import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import Lists from '../views/lists.vue';
import Option from '../views/option.vue';
import Detail from '../views/detail.vue';
import IndexPage from '../views/index.vue';
import Login from '../views/login.vue';
import UserInfo from '../views/user-info.vue';
import Register from '../views/register.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexPage },
  { path: '/login', component: Login },
  { path: '/user', component: UserInfo },
  { path: '/lists', component: Lists },
  { path: '/register', component: Register },
  { path: '/option', component: Option },
  { path: '/detail', component: Detail },
];

const router = new VueRouter({routes});

export default router;
