<template>
  <div class="flex flex-row justify-between">
    <div class="brand">
      <DuxLogo />
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
