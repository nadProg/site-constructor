<template>
  <div :class="classList">
    <button
      type="button"
      class="delete-btn"
      @click="$emit('delete-element')"
    >
      <svg
        width="24"
        height="24"
      >
        <use xlink:href="#icon-delete-btn" />
      </svg>
      <span class="ally-hidden">Удалить элемент</span>
    </button>
    <slot name="content" />
  </div>
</template>
<script>
export default {
  name: 'BaseElement',
  props: {
    isImage: {
      type: Boolean,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    base: 'element',
  }),
  computed: {
    typeClass() {
      return this.isImage ? `${this.base}--image` : `${this.base}--text`;
    },
    emptyClass() {
      return `${this.base}--empty`;
    },
    classList() {
      return [this.base, this.typeClass, {
        [this.emptyClass]: this.isEmpty,
      }];
    },
  },
};
</script>
