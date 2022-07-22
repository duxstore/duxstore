<template>
  <nuxt-link to="/" class="relative">
    <h2
      :class="[
        {
          'text-brand': theme === 'brand',
          'text-white': theme === 'white',
        }, 'uppercase text-2xl font-body font-semibold'
      ]">
        Duxstore
      </h2>
    <span class="-right-12 -top-2 absolute bg-gray-100 font-body px-2 rounded text-black text-sm">beta</span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    theme: {
      type: String,
      required: false,
      default: 'brand'
    }
  }
})
</script>
