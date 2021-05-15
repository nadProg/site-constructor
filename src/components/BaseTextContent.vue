<template>
  <div
    :is="tag"
    contenteditable="true"
    @keydown.enter="$event.currentTarget.blur()"
    @blur="$emit('update', $event.currentTarget.textContent)"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BaseTextContent',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>
