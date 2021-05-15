<template>
  <div class="app">
    <div
      class="ally-hidden"
      role="presentation"
    >
      <slot name="sprite" />
    </div>
    <div class="container">
      <h1 class="ally-hidden">
        <slot name="title" />
      </h1>
      <slot name="main" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseApp',
};
</script>
