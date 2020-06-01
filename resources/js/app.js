import Vue from 'vue';
import router from './router'
require('./bootstrap');
import store from "./store";
import Antd from 'ant-design-vue';
// import {carousel} from '../../node_modules/vue-owl-carousel/dist/vue-owl-carousel'
import 'ant-design-vue/dist/antd.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faBiking,faShoppingCart,faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);
Vue.use(store);
library.add(faUserSecret,faBiking,faShoppingCart,faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('admin', require('./components/Admin/Main.vue').default);
Vue.config.productionTip = false
window.Vue = require('vue');

Vue.config.productionTip = false;

Vue.use(Antd);






const app = new Vue({
    el: '#app',
    router,
    store,

});
