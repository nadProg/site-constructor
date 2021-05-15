<template>
  <BaseArea
    :tag="area.tag"
    :type="area.type"
    :is-empty="isAreaEmpty"
  >
    <template #placeholder>
      {{ area.placeholder }}
    </template>
    <template #elements>
      <WrapperElement
        v-for="id of elements"
        :key="id"
        :element-id="id"
        :area-id="areaId"
      />
    </template>
    <template #add-btn>
      <BaseAddBtn
        @click="chooseElemMode=true"
      />
    </template>
    <template #choose-element>
      <WrapperChooseElement
        v-if="chooseElemMode"
        @button-click="addElement({tag: $event, areaId})"
        @destroy="chooseElemMode=false"
      />
    </template>
  </BaseArea>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

import BaseArea from './BaseArea.vue';
import BaseAddBtn from './BaseAddBtn.vue';

export default {
  name: 'WrapperArea',
  components: {
    BaseArea,
    BaseAddBtn,
    WrapperElement: () => import('./WrapperElement.vue'),
    WrapperChooseElement: () => import('./WrapperChooseElement.vue'),
  },
  props: {
    areaId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    chooseElemMode: false,
  }),
  computed: {
    ...mapGetters('areas', ['areaById']),
    area() {
      return this.areaById(this.areaId);
    },
    elements() {
      return this.area.elements.array;
    },
    isAreaEmpty() {
      return this.elements.length === 0;
    },
  },
  methods: {
    ...mapMutations('areas', ['addElement']),
  },
};
</script>
