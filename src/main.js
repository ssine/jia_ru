import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import Vuex from 'vuex';
import axios from 'axios';
import Qs from 'qs';
import VueAxios from 'vue-axios'

import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
//Vue.prototype.axios = axios;
//Vue.prototype.qs = Qs;

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
