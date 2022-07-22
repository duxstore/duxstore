<template>
  <div class="flex flex-row min-h-full bg-dark w-full">
    <div class="flex flex-col justify-center w-6/12">
      <div class="p-16 w-full flex flex-row justify-between border-b border-gray-50">
        <DuxLogo theme="white" />
        <TextBody class="w-4/12" theme="light">
          Sell anything online with only a few
clicks. You have a product to sell,
we have the right tools just for that.
        </TextBody>
      </div>
      <div class="w-full flex flex-row justify-start space-x-10 py-16 px-16">
        <div>
          <TextBody text="Company" theme="light" weight="bold"/>
                  <ul>
                    <li><nuxt-link class="text-gray-light" to="/">About us</nuxt-link></li>
                    <li><nuxt-link class="text-gray-light" to="/">Contact us</nuxt-link></li>
                  </ul>
        </div>
        <div>
          <TextBody text="Social" theme="light" weight="bold"/>
                  <ul>
                    <li><a href="" class="text-gray-light" to="/">Facebook</a></li>
                    <li><a href="" class="text-gray-light" to="/">Instagram</a></li>
                    <li><a href="" class="text-gray-light" to="/">Twitter</a></li>
                    <li><a href="" class="text-gray-light" to="/">Telegram</a></li>
                  </ul>
        </div>
      </div>
    </div>
    <div class="p-16 flex flex-col border-l border-gray-50 w-6/12">
<TextHeading text="Request a demo" theme="primary" size="h4" :lineheight="false" class="w-3/12" />
<input type="email" class="rounded-full h-10 p-3 bg-gray-200" placeholder="Enter your email here">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
