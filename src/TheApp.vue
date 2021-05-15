<template>
  <BaseApp>
    <template #sprite>
      <TheSprite />
    </template>
    <template #title>
      Site Constructor
    </template>
    <template #main>
      <TheSelector />
      <TheLayout />
    </template>
  </BaseApp>
</template>
<script>
import store from './store/store';

import BaseApp from './components/BaseApp.vue';
import TheSprite from './components/TheSprite.vue';
import TheLayout from './components/TheLayout.vue';
import TheSelector from './components/TheSelector.vue';

import mockLayout from './static/mockLayout';

export default {
  name: 'TheApp',
  components: {
    BaseApp,
    TheSprite,
    TheLayout,
    TheSelector,
  },
  mixins: [
    mockLayout,
  ],
  store,
};
</script>
