<template>
  <div class="m-auto">
    <Nuxt></Nuxt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
      return {
        title: "Duxstore - Smart Stores for Businesses",
      }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.browser) {
      this.$gtag('config', 'G-MLB16ZFSMB', {
        page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath,
      })

      // Dispatch an event
      this.$gtag('event', 'view_item', {
        currency: "NGN",
          value: 90000,
          items: [
            {
              item_id: "SKU_12345",
              item_name: "Air Force 1",
              affiliation: "NIKE Merchandise Store",
              coupon: "SUMMER_FUN",
              currency: "NGN",
              discount: 23000,
              index: 0,
              item_brand: "Nike",
              item_category: "Apparel",
              item_category2: "Adult",
              item_category3: "Shirts",
              item_category4: "Crew",
              item_category5: "Short sleeve",
              item_list_id: "related_products",
              item_list_name: "Related Products",
              item_variant: "green",
              location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
              price: 90000,
              quantity: 2
            }
          ]
      })
    }
  },
})
</script>
