<template>
  <BaseChooseElement
    :buttons="buttons"
    @button-click="$emit('button-click', $event)"
  />
</template>
<script>
import BaseChooseElement from './BaseChooseElement.vue';
export default {
  name: 'WrapperChooseElement',
  components: {
    BaseChooseElement,
  },
  data: () => ({
    buttons: [
      { tag: 'h1', content: 'Header H1' },
      { tag: 'h2', content: 'Header H2' },
      { tag: 'h3', content: 'Header H3' },
      { tag: 'p', content: 'Paragraph' },
      { tag: 'img', content: 'Image' },
    ],
  }),
  mounted() {
    this.destroy = this.destroy.bind(this);
    setTimeout(() => window.addEventListener('click', this.destroy));
  },
  beforeDestroy() {
    window.removeEventListener('click', this.destroy);
  },
  methods: {
    destroy() {
      this.$emit('destroy');
    },
  },
};
</script>
