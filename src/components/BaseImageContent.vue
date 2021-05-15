<template>
  <div class="image-content">
    <button
      type="button"
      class="add-img-btn"
      aria-label="Add image source"
      @pointerdown="$emit('toggle-uploading-mode')"
    >
      <svg
        width="48"
        height="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use href="#icon-add-img-btn" />
      </svg>
    </button>
    <div class="placeholder placeholder--image">
      <transition name="fade">
        <svg v-if="loadingMode">
          <use href="#loading-placeholder" />
        </svg>
        <svg v-else-if="errorMode">
          <use href="#error-placeholder" />
        </svg>
      </transition>
    </div>
    <transition name="fade">
      <img
        v-if="content"
        v-show="!loadingMode && !errorMode"
        :src="content"
        alt=""
        @load="$emit('upload-success')"
        @error="$emit('upload-error')"
      >
    </transition>
    <transition name="fade">
      <slot name="image-upload" />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'BaseImageContent',
  props: {
    content: {
      type: String,
      required: true,
    },
    loadingMode: {
      type: Boolean,
      default: false,
    },
    errorMode: {
      type: Boolean,
      default: false,
    },
    uploadingMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
