<template>
  <div class="m-auto">
    <Nuxt></Nuxt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 mounted() {
  // eslint-disable-next-line no-console
  console.log('Route ', this.$route.fullPath)
  // eslint-disable-next-line no-console
  console.log('Meta ', this.$root.$options.head.title)
  if (process.browser) {
    this.$gtag('config', 'G-MLB16ZFSMB', {
      page_title: this.$meta.title,
      page_path: this.$route.fullPath,
    })
  }
 }
})
</script>
