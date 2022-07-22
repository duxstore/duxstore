<template>
  <div class="bg-white pl-11 pb-20">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    const message: string = 'This is a message'

    return {
      message
    }
  },
})
</script>
