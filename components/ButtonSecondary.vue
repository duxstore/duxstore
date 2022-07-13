<template>
  <div :class="[{'w-4/12': width === 'small', 'w-6/12': width === 'medium', 'w-full': width === 'full', 'w-auto': width === 'auto'}]">
    <button v-if="type === 'button'" :class="styling">
      {{ title }}
    </button>
    <nuxt-link v-else :to="to" :class="styling">{{ title }}</nuxt-link>
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
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    to: {
      type: String || Object,
      required: false,
      default: '/'
    }
  },
  computed: {
    styling() {
      return "block bg-brand border-none rounded-xl py-3.5 px-6 text-white font-body text-sm font-medium leading-4"
    }
  },
})
</script>
