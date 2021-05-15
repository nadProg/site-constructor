<template>
  <BaseElement
    :is-image="isImage"
    :is-empty="isEmpty"
    @delete-element="deleteElement({areaId, elementId})"
  >
    <template #content>
      <component
        :is="contentComponent"
        :content="element.content"
        :tag="element.tag"
        @update="updateElement({areaId, elementId, content: $event})"
      />
    </template>
  </BaseElement>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

import BaseElement from './BaseElement.vue';

export default {
  name: 'WrapperElement',
  components: {
    BaseElement,
    WrapperTextContent: () => import('./WrapperTextContent.vue'),
    WrapperImageContent: () => import('./WrapperImageContent.vue'),
  },
  props: {
    areaId: {
      type: String,
      required:true,
    },
    elementId: {
      type: String,
      required:true,
    },
  },
  computed: {
    ...mapGetters('areas', ['areaById']),
    element() {
      return this.areaById(this.areaId).elements.map[this.elementId];
    },
    isImage() {
      return this.element.tag === 'img';
    },
    isEmpty() {
      return !this.element.content;
    },
    contentComponent() {
      return this.isImage ? 'WrapperImageContent' : 'WrapperTextContent';
    },
  },
  methods: {
    ...mapMutations('areas', [
      'deleteElement',
      'updateElement',
    ]),
  },
};
</script>
