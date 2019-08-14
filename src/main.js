import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'tailwindcss/dist/tailwind.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue-ads-table-tree/dist/vue-ads-table-tree.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
