<template>
  <div
    class="img-upload"
    @pointerdown.stop
  >
    <p>Upload image</p>
    <input
      ref="inputUrl"
      v-model="inputUrlModel"
      type="url"
      placeholder="Insert image URL"
      @keydown.enter="$emit('upload')"
    >
    <button
      class="img-upload__btn"
      :disabled="uploadBtnDisabled"
      @click="$emit('upload')"
    >
      Upload
    </button>
    <button
      class="img-upload__btn"
      :disabled="restoreBtnDisabled"
      @click="$emit('restore')"
    >
      Restore current
    </button>
    <button
      class="img-upload__btn"
      :disabled="resetBtnDisabled"
      @click="$emit('reset')"
    >
      Clear content
    </button>
  </div>
</template>
<script>
export default {
  name: 'BaseImageUpload',
  props: {
    inputUrlValue: {
      type: String,
      required: true,
    },
    uploadBtnDisabled: {
      type: Boolean,
      default: true,
    },
    restoreBtnDisabled:  {
      type: Boolean,
      default: true,
    },
    resetBtnDisabled:  {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    inputUrlModel: {
      get() {
        return this.inputUrlValue;
      },
      set(value) {
        this.$emit('change', value);
      },
    },
  },
  mounted() {
    this.willDestroy = this.willDestroy.bind(this);
    setTimeout(() => {
      this.$refs.inputUrl.focus();
      window.addEventListener('pointerdown', this.willDestroy);
    });
  },
  beforeDestroy() {
    window.removeEventListener('pointerdown', this.willDestroy);
  },
  methods: {
    willDestroy() {
      this.$emit('will-destroy');
    },
  },
};
</script>
