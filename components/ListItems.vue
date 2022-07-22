<template>
  <div>
    <ul>
      <slot v-for="(item) in items" v-bind="listProps(item)"></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: {
      type: Object || Array,
      required: false,
      default: () => []
    },
  },
  methods: {
    listProps(item: Object): Object {
      return {
        item
      }
    }
  },
})
</script>
