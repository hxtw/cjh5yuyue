// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Calendar from 'vue2-datepick';
import axios from  'axios'
import Qs from 'qs'

Vue.config.productionTip = false;
import Toast from 'vue-toast-component';
Vue.use(Toast);
Vue.use(layer);
Vue.use(Calendar);
// Vue.use(axios);
Vue.prototype.$axios = axios;
Vue.prototype.qs = Qs;


import layer from '../static/layer.m'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
