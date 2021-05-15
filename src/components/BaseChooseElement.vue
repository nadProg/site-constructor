<template>
  <div class="choose-elem">
    <button
      v-for="button of buttons"
      :key="button.tag"
      type="button"
      class="choose-elem__btn"
      @click="$emit('button-click', button.tag)"
    >
      {{ button.content }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'BaseChooseElement',
  props: {
    buttons: {
      type: Array,
      required: true,
    },
  },
};
</script>
