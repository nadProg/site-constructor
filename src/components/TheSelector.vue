<template>
  <BaseSelector>
    <template #title>
      Choose layout type
    </template>
    <template #tabs>
      <BaseSelectorTab
        v-for="input in inputs"
        :key="input.value"
        :value="input.value"
        :label="input.label"
        :checked="input.value === value"
        @change="setValue(input.value)"
      />
    </template>
  </BaseSelector>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import BaseSelector from './BaseSelector.vue';
import BaseSelectorTab from './BaseSelectorTab.vue';

export default {
  name: 'TheSelector',
  components: {
    BaseSelector,
    BaseSelectorTab,
  },
  computed: {
    ...mapState('selector', ['inputs', 'value']),
  },
  methods: {
    ...mapMutations('selector', ['setValue']),
  },
};
</script>
