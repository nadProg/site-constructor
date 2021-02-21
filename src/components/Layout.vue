<template>
  <div :class="[blockClass, activeClass]">
    <Area v-for="(area, index) of areas"
     :class="[areaClass, areaModClass(area.id)]"
     :area-model="area"
     :area-index="index"
     :key="area.id" />
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import Area from './Area';

export default {
  name: 'Layout',
  components: {
    Area
  },
  data: () => ({
    blockClass: 'layout'
  }),
  props: {},
  computed: {
    ...mapGetters([
      'areas'
    ]),
    ...mapState([
      'activeLayout'
    ]),
    activeClass() {
      return `${this.blockClass}--${this.activeLayout}`;
    },
    areaClass() {
      return `${this.blockClass}__area`;
    }
  },
  methods: {
    areaModClass(id) {
      return `${this.areaClass}--${id}`
    }
  }
}
</script>