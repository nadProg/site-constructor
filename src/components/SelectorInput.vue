<template>
  <div class="grid-select__btn-wrapper">
    <input class="grid-select__radio ally-hidden" type="radio" name="grid"
     :id="inputId" :value="type" v-model="currentLayout"
     @change="setActiveLayout(currentLayout)">
    <label class="grid-select__btn" :for="inputId">
      <span>{{mapTypeToLabel[type]}}</span>
      <svg width="240" height="132">
        <use :href="iconId" />
      </svg>
    </label>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Selector',
  data: () => ({
    currentLayout: '',
    mapTypeToLabel: {
      blog: 'Blog',
      shop: 'Shop',
      landing: 'Landing',
    }
  }),
  props: {
    type: String
  },
  watch: {
    activeLayout: {
      handler(newVal) {
        this.currentLayout = newVal;
      },
      immediate: true
    }
  },
  computed: {
    ...mapState([
      'activeLayout'
    ]),
    iconId() {
      return `#icon-${this.type}`
    },
    inputId() {
      return `grid-${this.type}`
    },
  },
  methods: {
    ...mapMutations([
      'setActiveLayout'
    ])
  }
}
</script>