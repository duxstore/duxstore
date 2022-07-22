<template>
  <div
    :class="[
      'w-full flex flex-col ',
      {
        'justify-center items-center': center,
        'justify-start items-start': !center
      }
    ]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    center: {
      type: Boolean,
      required: false,
      default: true
    }
  }
})
</script>
