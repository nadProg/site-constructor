<template>
  <div :class="blockClassList" :is="tag(areaModel)">
    <transition name="fade">
      <div class="placeholder placeholder--area" v-if="isAreaEmpty">{{placeholder}}</div>
    </transition>
    <TransitionElements class="elements-list" :class="wrapperClassList">
      <Element v-for="(model, index) of elements" :element-model="model" :area-id="areaModel.id" :element-index="index" :key="model.id" />
    </TransitionElements>
    <button type="button" class="add-btn" @click="chooseElemMode=!chooseElemMode">
      <svg width="40" height="40">
        <use xlink:href="#icon-add-btn" />
      </svg>
    </button>
    <transition name="fade">
      <ChooseElement class="choose-elem" :area-id="areaModel.id" v-if="chooseElemMode" @destroy-choose-element="chooseElemMode=false" />
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import TransitionElements from './TransitionElements';
import ChooseElement from './ChooseElement';
import Element from './Element';

export default {
  name: 'Area',
  components: {
    Element,
    ChooseElement,
    TransitionElements
  },
  props: {
    areaModel: Object,
    areaIndex: Number
  },
  data: () => ({
    blockClass: 'area',
    mapTypeToTag: {
      header: 'header',
      content: 'div',
      footer: 'footer',
    },
    mapTypeToPlaceholder: {
      header: 'Header',
      content: 'Content',
      footer: 'Footer',
    },
    chooseElemMode: false
  }),
  computed: {
    ...mapState([
      'activeArea'
    ]),
    elements() {
      return this.areaModel.elements;
    },
    blockTypeClass() {
      return `${this.blockClass}--${this.areaModel.type}`;
    },
    blockEmptyClass() {
      return `${this.blockClass}--empty`;
    },
    blockClassList() {
      return [this.blockClass, this.blockTypeClass, {
        [this.blockEmptyClass]: this.isAreaEmpty
      }];
    },
    wrapperClass() {
      return `${this.blockClass}__elements-wrapper`;
    },
    wrapperTypeClass() {
      return `${this.blockClass}__elements-wrapper--${this.areaModel.type}`;
    },
    wrapperClassList() {
      return [this.wrapperClass, this.wrapperTypeClass];
    },
    placeholder() {
      return this.mapTypeToPlaceholder[this.areaModel.type];
    },
    isAreaEmpty() {
      return this.elements.length === 0;
    }
  },
  methods: {
    ...mapMutations([
      'setActiveArea',
    ]),
    tag({ type }) {
      return this.mapTypeToTag[type];
    },
    toggleChooseElem() {
      this.chooseElemMode = !this.chooseElemMode;
    }
  }
}
</script>