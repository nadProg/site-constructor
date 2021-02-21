<template>
    <div :class="classList">
      <button type="button" class="delete-btn" @click="deleteElement">
        <svg width="24" height="24">
          <use xlink:href="#icon-delete-btn" />
        </svg>
        <span class="ally-hidden">Удалить элемент</span>
      </button>
      <component :is="contentType" :element-model="elementModel" @update-element="updateElement" />
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

import TextContent from './TextContent';
import ImageContent from './ImageContent';

export default {
  name: 'Element',
  data: () => ({
    blockClass: 'element',
  }),
  components: {
    TextContent,
    ImageContent
  },
  props: {
    elementModel: Object,
    areaIndex: Number,
    elementIndex: Number
  },
  computed: {
    tag() {
      return this.elementModel.tag;
    },
    isImage() {
      return this.tag === 'img';
    },
    isEmpty() {
      return !this.elementModel.content;
    },
    contentType() {
      return this.isImage ? 'ImageContent' : 'TextContent';
    },
    typeClass() {
      return this.isImage ? `${this.blockClass}--image` : `${this.blockClass}--text`;
    },
    emptyClass() {
      return `${this.blockClass}--empty`;
    },
    classList() {
      return [this.blockClass, this.typeClass, {
        [this.emptyClass]: this.isEmpty
      }];
    },
    payload() {
      return ({
        areaIndex: this.areaIndex,
        elementIndex: this.elementIndex,
      })
    }
  },
  methods: {
    ...mapMutations([
      'deleteElementFromArea',
      'updateElementContent'
    ]),
    deleteElement() {
      this.deleteElementFromArea(this.payload);
    },
    updateElement(newContent) {
      this.updateElementContent({ ...this.payload, newContent });
    }
  }
}
</script>