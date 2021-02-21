import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Layout from './../model/Layout';
import ElementFactory from './../model/ElementFactory';

export default new Vuex.Store({
  state: {
    layoutModel: new Layout(),
    layoutTypes: ['landing', 'blog', 'shop'],
    activeLayout: 'shop',
  },
  getters: {
    areas: state => state.layoutModel.areas,
  },
  mutations: {
    setActiveLayout(state, type) {
      Vue.set(state, 'activeLayout', type);
    },
    addElementToArea(state, { areaIndex, options }) {
      state.layoutModel.areas[areaIndex].elements.push(new ElementFactory(options));
    },
    updateElementContent(state, { areaIndex, elementIndex, newContent }) {
      Vue.set(state.layoutModel.areas[areaIndex].elements[elementIndex], 'content', newContent);
    },
    deleteElementFromArea(state, { areaIndex, elementIndex }) {
      state.layoutModel.areas[areaIndex].elements.splice(elementIndex, 1);
    }
  }
});