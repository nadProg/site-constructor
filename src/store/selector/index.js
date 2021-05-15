import Vue from 'vue';

import { state } from './state';

export const selector = {
  namespaced: true,
  state,
  mutations: {
    setValue(state, value) {
      Vue.set(state, 'value', value);
    },
  },
};
