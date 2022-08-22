/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import VPagination from 'vue3-pagination';
// import paginate from 'VuejsPaginate'
// import VuePaginateScroll from "vue-paginate-scroll";
// import Paginate from 'v-scroll-paginate';
  
// Vue.component('v-scroll-paginate', Paginate);

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

// import InfiniteScroll from '@jfm/vue-infinite-scroll'
// vue.use(InfiniteScroll)

import { store } from './store'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
// Vue.component('paginate', VuejsPaginate)
// Vue.use(VPagination);
// import VuePaginationTw from "vue-pagination-tw";
// Vue.component("VuePaginationTw", VuePaginationTw);

new Vue({
  router,
  store,
  components: { App },
  render: (h) => h(App),
}).$mount("#app");
