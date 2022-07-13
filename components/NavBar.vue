<template>
  <div class="flex flex-row justify-between">
    <div class="brand">
      <nuxt-link to="/" class="relative">
        <h2 class="text-brand uppercase text-2xl font-body font-semibold">Duxstore</h2>
        <span class="-right-12 -top-2 absolute bg-gray-100 font-body px-2 rounded text-black text-sm">beta</span>
      </nuxt-link>
    </div>
    <ul class="flex flex-row items-center justify-evenly w-9/12">
      <li>
        <nuxt-link class="font-body hover:text-black ease-in duration-100 text-gray-400" to="/features">Features</nuxt-link>
      </li>
      <li>
        <nuxt-link class="font-body hover:text-black ease-in duration-100 text-gray-400" to="/pricing">Pricing</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
