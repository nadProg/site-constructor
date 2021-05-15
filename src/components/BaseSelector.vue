<template>
  <form class="grid-select">
    <h2 class="grid-select__header">
      <slot name="title" />
    </h2>
    <div class="grid-select__row">
      <slot name="tabs" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'BaseSelector',
};
</script>
