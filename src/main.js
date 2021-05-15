import Vue from 'vue';
import 'normalize.css';
import './assets/styles/main.scss';

import TheApp from './TheApp.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(TheApp),
}).$mount('#app');
