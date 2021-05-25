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
        @click="setValue(input.value)"
      />
    </template>
  </BaseSelector>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import BaseSelector from './BaseSelector.vue';
import BaseSelectorTab from './BaseSelectorTab.vue';

import _ from 'lodash';

export default {
  name: 'TheSelector',
  components: {
    BaseSelector,
    BaseSelectorTab,
  },
  data: () => ({
    debounceTime: 300,
  }),
  computed: {
    ...mapState('selector', ['inputs', 'value']),
  },
  created() {
    this.setValue = _.debounce(this.setValue, this.debounceTime);
  },
  methods: {
    ...mapMutations('selector', ['setValue']),
  },
};
</script>
