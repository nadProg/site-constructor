<template>
  <form class="grid-select">
    <h2 class="grid-select__header">Choose layout type</h2>
    <div class="grid-select__row">
      <SelectorInput
        v-for="type in layoutTypes"
        :type="type"
        :key="type"
      />
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';
import SelectorInput from './SelectorInput.vue';

export default {
  name: 'Selector',
  components: {
    SelectorInput
  },
  computed: {
    ...mapState([
      'layoutTypes'
    ])
  }
}
</script>