<template>
  <div class="app">
    <Sprite class="ally-hidden" role="presentation" />
    <div class="container">
      <h1 class="ally-hidden">Site Constructor</h1>
      <Selector />
      <Layout />
    </div>
  </div>
</template>
<script>
import store from './store/store';

import Sprite from './components/Sprite.vue';
import Layout from './components/Layout.vue';
import Selector from './components/Selector.vue';

export default {
  name: 'Constructor',
  store,
  components: {
    Sprite,
    Layout,
    Selector,
  },
}
</script>