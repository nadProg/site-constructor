<template>
  <BaseImageContent
    :content="content"
    :loading-mode="loadingMode"
    :error-mode="errorMode"
    :uploading-mode="uploadingMode"
    @upload-success="imgSuccessLoaded"
    @upload-error="imgErrorLoaded"
    @toggle-uploading-mode="uploadingMode=!uploadingMode"
  >
    <template #image-upload>
      <BaseImageUpload
        v-if="uploadingMode"
        :input-url-value="inputUrlValue"
        :upload-btn-disabled="uploadBtnDisabled"
        :restore-btn-disabled="restoreBtnDisabled"
        :reset-btn-disabled="resetBtnDisabled"
        @change="inputUrlValue=$event"
        @upload="updateContent(inputUrlValue)"
        @restore="inputUrlValue=content"
        @reset="updateContent('')"
        @will-destroy="uploadingMode=false"
      />
    </template>
  </BaseImageContent>
</template>
<script>
import BaseImageContent from './BaseImageContent.vue';

export default {
  name: 'WrapperImageContent',
  components: {
    BaseImageContent,
    BaseImageUpload: () => import('./BaseImageUpload.vue'),
  },
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputUrlValue: '',
      loadingMode: false,
      errorMode: false,
      uploadingMode: false,
    };
  },
  computed: {
    uploadBtnDisabled() {
      if (!this.inputUrlValue) return true;
      return this.inputUrlValue === this.content;
    },
    restoreBtnDisabled() {
      return this.inputUrlValue === this.content;
    },
    resetBtnDisabled() {
      return !this.inputUrlValue;
    },
  },
  watch: {
    content: {
      handler(newVal) {
        this.inputUrlValue = newVal;
        this.loadingMode = !!newVal;
      },
      immediate: true,
    },
  },
  methods: {
    updateContent(content) {
      this.$emit('update', content);
      this.errorMode = false;
      this.loadingMode = false;
      this.uploadingMode = false;
    },
    imgSuccessLoaded() {
      this.loadingMode = false;
      this.errorMode = false;
    },
    imgErrorLoaded() {
      this.loadingMode = false;
      this.errorMode = true;
    },
  },
};
</script>
