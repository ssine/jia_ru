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
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BaiduMap from 'vue-baidu-map'
// require styles
import 'swiper/dist/css/swiper.css'
import VueJsonp from 'vue-jsonp'
import iviewArea from 'iview-area';
import VueCropper from 'vue-cropper'
import VueSpeech from 'vue-speech'

axios.defaults.withCredentials = true;

Vue.use(VueSpeech)

Vue.use(VueCropper);
Vue.use(VueJsonp);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.prototype.Qs = Qs;
Vue.use(VueAwesomeSwiper);
Vue.use(iviewArea);

Vue.use(BaiduMap, {
    /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
    ak: 'DA137DSpWRBxmO5LktIiHccpAGFi7kY4'
})



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
