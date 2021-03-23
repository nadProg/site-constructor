import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Layout from './../model/Layout';
import Element from './../model/Element';

const layoutConfig = ['header', {type: 'content', amount: 3}, 'footer'];

export default new Vuex.Store({
  state: {
    layoutModel: new Layout(layoutConfig),
    layoutTypes: ['landing', 'blog', 'shop'],
    activeLayout: 'shop',
  },
  getters: {
    areas: state => state.layoutModel.areas,
    areaByID: state => areaId => {
      return state.layoutModel[`_area-${areaId}`];
    }
  },
  mutations: {
    setActiveLayout(state, type) {
      Vue.set(state, 'activeLayout', type);
    },
    addElementToArea(state, { areaId, options }) {
      this.getters.areaByID(areaId).elements.push(new Element(options))
    },
    updateElementContent(state, { areaId, elementIndex, newContent }) {
      Vue.set(this.getters.areaByID(areaId).elements[elementIndex], 'content', newContent);
    },
    deleteElementFromArea(state, { areaId, elementIndex }) {
       this.getters.areaByID(areaId).elements.splice(elementIndex, 1);
    }
  }
});