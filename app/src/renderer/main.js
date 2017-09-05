import Vue from 'vue';
import Electron from 'vue-electron';
import Resource from 'vue-resource';
import Router from 'vue-router';

import App from './App';
import routes from './routes';
import store from './vuex/store';
Vue.use(Electron);
Vue.use(Resource);
Vue.use(Router);

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
  linkActiveClass: 'is-active',
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App,
  created() {
    this.$store.dispatch('init');
  },
}).$mount('#app');
