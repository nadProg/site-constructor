import Vue from 'vue';

import { state } from './state';
import createElement from '@/common/model/createElement';

export const areas = {
  namespaced: true,
  state,
  getters: {
    areaById: (state) => (id) => {
      return state.map[id];
    },
  },
  mutations: {
    addElement(state, { areaId, tag, content }) {
      const element = createElement(tag, content);
      const {id} = element;

      state.map[areaId].elements.array.push(id);
      Vue.set(state.map[areaId].elements.map, id, element);
    },
    updateElement(state, { areaId, elementId, content }) {
      Vue.set(state.map[areaId].elements.map[elementId], 'content', content);
    },
    deleteElement(state, { areaId, elementId }) {
      const index = state.map[areaId].elements.array.findIndex((id) => id === elementId);
      if (!~index) return;

      Vue.delete(state.map[areaId].elements.map, elementId);
      state.map[areaId].elements.array.splice(index, 1);
    },
  },
};
