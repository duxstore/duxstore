<template>
  <div
    :class="['bg-opacity-40', 'h-16', 'w-16 flex items-center justify-center',
      {
        [bgColor]: bgColor !== '',
        'rounded-xl': rounded,
      }
    ]"
  >
    <component class="transform transition-transform hover:animate-bounce" :is="svg"></component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    bgColor: {
      type: String,
      required: false,
      default: ''
    },
    rounded: {
      type: Boolean,
      required: false,
      default: true
    },
    icon: {
      type: String,
      required: true,
      default: 'package'
    },
  },
  computed: {
    svg () {
      return require(`~/assets/images/` + this.icon + `.svg?inline`)
    }
  }
})
</script>
