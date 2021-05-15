<template>
  <BaseTextContent
    :tag="tag"
    @update="$emit('update', $event)"
  >
    {{ content }}
  </BaseTextContent>
</template>
<script>
import BaseTextContent from './BaseTextContent.vue';

export default {
  name: 'WrapperTextContent',
  components: {
    BaseTextContent,
  },
  props: {
    content: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>
