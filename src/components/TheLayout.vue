<template>
  <BaseLayout
    :base="base"
    :type="activeLayout"
  >
    <WrapperArea
      v-for="id of areas"
      :key="id"
      :area-id="id"
      :base="base"
      :class="[areaClass, areaModClass(id)]"
    />
  </BaseLayout>
</template>
<script>
import { mapState } from 'vuex';

import BaseLayout from './BaseLayout.vue';
import WrapperArea from './WrapperArea.vue';

export default {
  name: 'TheLayout',
  components: {
    BaseLayout,
    WrapperArea,
  },
  data: () => ({
    base: 'layout',
  }),
  computed: {
    ...mapState('selector', {
      activeLayout: (state) => state.value,
    }),
    ...mapState('areas', {
      areas: (state) => state.array,
    }),
    areaClass() {
      return `${this.base}__area`;
    },
  },
  methods: {
    areaModClass(id) {
      return `${this.areaClass}--${id}`;
    },
  },
};
</script>
