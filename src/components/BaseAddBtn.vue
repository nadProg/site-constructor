<template>
  <button
    type="button"
    class="add-btn"
    aria-label="Add element"
    @click="$emit('click')"
  >
    <svg
      width="40"
      height="40"
    >
      <use xlink:href="#icon-add-btn" />
    </svg>
  </button>
</template>
<script>
export default {
  name: 'BaseAddBtn',
};
</script>
