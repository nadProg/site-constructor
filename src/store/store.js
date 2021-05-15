import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { areas } from './areas/';
import { selector } from './selector/';

export default new Vuex.Store({
  modules: {
    areas,
    selector,
  },
});
