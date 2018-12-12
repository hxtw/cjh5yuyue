// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Calendar from 'vue2-datepick';
import axios from  'axios'
import Qs from 'qs'
import layer from '../static/layer.m'
Vue.config.productionTip = false;
import Toast from 'vue-toast-component';
Vue.use(Toast);
Vue.use(layer);
Vue.use(Calendar);
// Vue.use(axios);
Vue.prototype.$axios = axios;
Vue.prototype.qs = Qs;
axios.defaults.headers.common['Authentication'] = '187CDEC552923321BFC9D442ECAF2740624E8A845ECF67D1DF5CB967E0033AC2';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
