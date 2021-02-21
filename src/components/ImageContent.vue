<template>
  <div class="image-content">
    <button type="button" class="add-img-btn" @pointerdown="toggleUploadingMode">
      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <use href="#icon-add-img-btn" />
      </svg>
    </button>
    <div class="placeholder placeholder--image">
      <transition name="fade">
        <svg v-if="loadingMode" class="">
          <use href="#loading-placeholder" />
        </svg>
        <svg v-else-if="errorMode" class="">
          <use href="#error-placeholder" />
        </svg>
      </transition>
    </div>
    <transition name="fade">
      <img v-if="content" v-show="!loadingMode && !errorMode" :src="content" @load="imgLoaded" @error="imgErrorLoaded"> </transition>
    <transition name="fade">
      <div v-if="uploadingMode" class="img-upload" @pointerdown.stop>
        <p>Upload image</p>
        <input type="url" placeholder="Insert image URL" ref="inputUrl" v-model="inputUrl" @keydown.enter="updateElement(inputUrl)" @blur="inputUrl=content">
        <button class="img-upload__btn" @click="updateElement(inputUrl)" :disabled="uploadBtnDisabled">Upload</button>
        <button class="img-upload__btn" @click="restoreUrl" :disabled="restoreBtnDisabled">Restore current</button>
        <button class="img-upload__btn" @click="updateElement(null)" :disabled="resetBtnDisabled">Clear content</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'ImgContent',
  data() {
    return {
      inputUrl: '',
      loadingMode: false,
      errorMode: false,
      imgSource: '',
      uploadingMode: false,
    }
  },
  props: {
    elementModel: Object,
  },
  mounted() {
    this.resetUploadingMode = this.resetUploadingMode.bind(this);
  },
  beforeDestroy() {
    window.removeEventListener('pointerdown', this.resetUploadingMode);
  },
  computed: {
    content() {
      return this.elementModel.content;
    },
    uploadBtnDisabled() {
      if (!this.inputUrl) return true;
      return this.inputUrl === this.content;
    },
    restoreBtnDisabled() {
      return this.inputUrl === this.content;
    },
    resetBtnDisabled() {
      return !this.inputUrl;
    }
  },
  watch: {
    content(newVal) {
      this.inputUrl = newVal;
      this.imgSource = newVal;
      this.errorMode = false;
      this.loadingMode = !!newVal;
    },
    uploadingMode(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$refs.inputUrl.focus();
          window.addEventListener('pointerdown', this.resetUploadingMode);
        })
      } else {
        window.removeEventListener('pointerdown', this.resetUploadingMode);
      }
    }
  },
  methods: {
    toggleUploadingMode() {
      this.uploadingMode = !this.uploadingMode;
    },
    resetUploadingMode() {
      this.uploadingMode = false;
    },
    updateElement(newContent) {
      this.$emit('update-element', newContent);
      this.errorMode = false;
      this.loadingMode = false;
      this.uploadingMode = false;
    },
    imgLoaded() {
      this.loadingMode = false;
    },
    imgErrorLoaded() {
      this.loadingMode = false;
      this.errorMode = true;
    },
    restoreUrl() {
      this.inputUrl = this.content;
    },
    clearContent() {
      this.inputUrl = '';
    },
  }
}
</script>