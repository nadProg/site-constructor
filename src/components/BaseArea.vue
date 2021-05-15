<template>
  <div
    :is="tag"
    :class="blockClassList"
  >
    <transition name="fade">
      <div
        v-if="isEmpty"
        class="placeholder placeholder--area"
      >
        <slot name="placeholder" />
      </div>
    </transition>
    <TransitionElements
      class="elements-list"
      :class="wrapperClassList"
    >
      <slot name="elements" />
    </TransitionElements>
    <slot name="add-btn" />
    <transition name="fade">
      <slot name="choose-element" />
    </transition>
  </div>
</template>
<script>
import TransitionElements from './TransitionElements';

export default {
  name: 'BaseArea',
  components: {
    TransitionElements,
  },
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    type: {
      type: String,
      default: 'content',
    },
    isEmpty: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    base: 'area',
  }),
  computed: {
    blockTypeClass() {
      return `${this.base}--${this.type}`;
    },
    blockEmptyClass() {
      return `${this.base}--empty`;
    },
    blockClassList() {
      return [this.base, this.blockTypeClass, {
        [this.blockEmptyClass]: this.isEmpty,
      }];
    },
    wrapperClass() {
      return `${this.base}__elements-wrapper`;
    },
    wrapperTypeClass() {
      return `${this.base}__elements-wrapper--${this.type}`;
    },
    wrapperClassList() {
      return [this.wrapperClass, this.wrapperTypeClass];
    },
  },
};
</script>
