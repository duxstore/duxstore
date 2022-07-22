<template>
  <li>
    <BaseIcon v-if="item.icon && item.icon !== ''" :icon="item.icon" />
    {{ item?.value }}
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object || Array,
      required: false,
      default: () => []
    },
  }
})
</script>
