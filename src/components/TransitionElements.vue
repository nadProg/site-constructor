<template>
  <transition-group
    appear
    name="elements-list"
    tag="div"
    @before-enter="beforeTransition"
    @enter="transition"
    @after-enter="afterTransition"
    @before-leave="beforeTransition"
    @leave="transition"
    @after-leave="afterTransition"
  >
    <slot />
  </transition-group>
</template>
<script>

export default {
  name: 'TransitionElements',
  created() {
    this.postAfterTransition = this.postAfterTransition.bind(this);
  },
  methods: {
    beforeTransition() {
      this.$el.children.forEach((el) => el.style.height = `${el.scrollHeight}px`);
      this.setScrollHeight();
    },
    transition() {
      this.setScrollHeight();
    },
    afterTransition() {
      this.setScrollHeight();
      setTimeout(() => this.postAfterTransition(), 1000);
    },
    postAfterTransition() {
      this.$el.style.height = '';
      this.$el.children.forEach((el) => el.style.height = '');
    },
    setScrollHeight() {
      this.$el.style.maxHeight = 0;
      this.$el.style.height = `${this.$el.scrollHeight}px`;
      this.$el.style.maxHeight = '';
    },
  },
};
</script>
<style>
.elements-list-move {
  transition: transform 1s;
}

.elements-list-enter {
  opacity: 0;
}

.elements-list-leave,
.elements-list-leave-active,
.elements-list-leave-to {
  display: none;
}
</style>
