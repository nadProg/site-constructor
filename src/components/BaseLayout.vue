<template>
  <div :class="classList">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BaseLayout',
  props: {
    base: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    typeClass() {
      return `${this.base}--${this.type}`;
    },
    classList() {
      return [this.base, this.typeClass];
    },
  },
};
</script>
