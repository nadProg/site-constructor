<template>
  <div :is="tag"
    contenteditable="true"
    @keydown.enter="stopEdit($event.currentTarget)"
    @blur="updateElement($event.currentTarget)"
   >{{content}}</div>
</template>
<script>
export default {
  name: 'TextContent',
  props: {
    elementModel: Object,
    areaId: String
  },
  computed: {
    tag() {
      return this.elementModel.tag;
    },
    content() {
      return this.elementModel.content;
    },
  },
  methods: {
    stopEdit(element) {
      element.blur()
    },
    updateElement({ textContent }) {
      this.$emit('update-element', textContent);
    },
  }
}
</script>