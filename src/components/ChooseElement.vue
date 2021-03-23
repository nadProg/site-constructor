<template>
  <div>
    <button v-for="button of buttons" :key="button.tag" type="button" class="choose-elem__btn" @click="addElementToArea(payload(button))">
      {{button.placeholder}}
    </button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ChooseElemBtn',
  data: () => ({
    buttons: [
      { tag: 'h1', placeholder: 'Header H1' },
      { tag: 'h2', placeholder: 'Header H2' },
      { tag: 'h3', placeholder: 'Header H3' },
      { tag: 'p', placeholder: 'Paragraph' },
      { tag: 'img', placeholder: 'Image' }
    ]
  }),
  props: {
    areaId: String
  },
  mounted() {
    this.destroy = this.destroy.bind(this);
    setTimeout(() => window.addEventListener('click', this.destroy));
  },
  beforeDestroy() {
    window.removeEventListener('click', this.destroy);
  },
  methods: {
    ...mapMutations([
      'addElementToArea'
    ]),
    payload(elementOptions) {
      return ({
        options: elementOptions,
        areaId: this.areaId
      })
    },
    destroy() {
      this.$emit('destroy-choose-element');
    }
  }
}
</script>