<template>
  <div :class="[{'w-4/12': width === 'small', 'w-6/12': width === 'medium', 'w-full': width === 'full', 'w-auto': width === 'auto'}]">
    <button class="bg-brand border-none rounded-xl py-3.5 px-6 text-white font-body text-sm font-medium leading-4">
      {{ title }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  inheritAttrs: true,
  props: {
    title: {
      type: String,
      required: true,
      default: 'Click here'
    },
    width: {
      type: String,
      required: false,
      default: 'small'
    }
  }
})
</script>
