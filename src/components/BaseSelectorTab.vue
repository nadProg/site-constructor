<template>
  <div class="grid-select__btn-wrapper">
    <input
      :id="inputId"
      class="grid-select__radio ally-hidden"
      type="radio"
      name="grid"
      :value="value"
      :checked="checked"
      @click="$emit('click')"
    >
    <label
      class="grid-select__btn"
      :for="inputId"
    >
      <span>{{ label }}</span>
      <svg
        width="240"
        height="132"
      >
        <use :href="iconId" />
      </svg>
    </label>
  </div>
</template>
<script>
export default {
  name: 'BaseSelectorTab',
  props: {
    value: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconId() {
      return `#icon-${this.value}`;
    },
    inputId() {
      return `grid-${this.value}`;
    },
  },
};
</script>
