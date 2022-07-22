<template>
  <div>
    <TheHeader class="flex flex-row justify-between">
      <HeaderLeftHandSide class="w-full sm:w-7/12"></HeaderLeftHandSide>
      <HeaderRightHandSide class="w-full sm:w-5/12"></HeaderRightHandSide>
    </TheHeader>

    <div class="lg:ml-12 ml-5 2xl:ml-20 sm:mr-24 lg:mr-28 2xl:mr-40">
      <SectionFullWidth>
        <text-heading text="Integration with the apps you already love" size="h5" :capitalize="false"></text-heading>
        <div class="flex flex-row sm:space-x-20 2xl:space-x-28">
          <img src="~assets/images/paystack.png" class="h-5 hover:grayscale-0 filter grayscale" alt="">
          <img src="~assets/images/flutterwave.png" class="-top-2 filter grayscale h-9 hover:grayscale-0 leading-none relative" alt="">
        </div>
      </SectionFullWidth>

      <!--Stay ahead of competetion section-->
      <SectionHalfWidth class="mt-40 mb-10">
        <div class="w-6/12 relative">
          <div class="absolute pl-20 py-8 w-full">
            <text-heading class="whitespace-nowrap" text="Stay ahead of the competition with the right tools" size="h4" :capitalize="false" :spacing="false"></text-heading>
            <p class="text-body font-body text-lg">
              Duxstore enables your business to compete in the digital world by providing the tools you need to sell successfully online.
            </p>
          </div>
          <div class="2xl:-top-16 2xl:right-14 sm:-top-1/4 absolute bg-primary block h-16 sm:right-4 w-20"></div>
          <div class="w-11/12 h-60 bg-primary block sm:-ml-12 2xl:-ml-20"></div>

          <div class="flex flex-row justify-between pl-20 sm:space-x-6 py-24">
            <div>
              <div class="h-16 w-16 rounded-full border border-brand border-dashed">cirlce</div>
              <text-heading class="whitespace-nowrap" text="Transparent pricing" size="h6" :capitalize="false" :spacing="false" :lightweight="true"></text-heading>
              <p class="text-body font-body text-sm">Duxstore has no hidden fees, checkout our pricing page to learn about our plans.</p>
            </div>
            <div>
              <div class="h-16 w-16 rounded-full border border-brand border-dashed">cirlce</div>
              <text-heading class="whitespace-nowrap" text="24/7 customer support" size="h6" :capitalize="false" :spacing="false" :lightweight="true"></text-heading>
              <p class="text-body font-body text-sm">Duxstore has no hidden fees, checkout our pricing page to learn about our plans.</p>
            </div>
          </div>
        </div>
        <div class="w-6/12">
          <div class="2xl:-mr-40 flex flex-row justify-end sm:-mr-28">
            <img class="h-100" src="~assets/images/woman-working (1).png" alt="">
          </div>
        </div>
      </SectionHalfWidth>

      <!--Features section-->
      <SectionFullWidth :center="false" class="m-auto container pl-20 py-10">
        <text-heading text="Features built for your business needs" size="h4" :capitalize="false" :spacing="false"></text-heading>
        <p class="text-body font-body text-sm w-6/12">
          With the success of your business at the top of our mind, we have added these special features to make each store created on Duxstore a leading store.
        </p>
        <SectionHalfWidth class="space-x-2 mt-10 mb-10">
          <div class="w-full sm:w-6/12">
            <div>
              <BaseIcon icon="checkout" bg-color="bg-gray-100" />
            </div>
            <div>
              <text-heading text="Self checkout" size="h6" :capitalize="false" :spacing="false"></text-heading>
              <p class="text-body font-body text-sm">
                Take a break from responding to DMs and let your customers checkout by themselves. Configure your preferred shipping and payments partner to start.
              </p>
            </div>
          </div>
          <div class="w-full sm:w-6/12">
            <div>
              <BaseIcon icon="package" bg-color="bg-green-100" />
            </div>
            <div>
              <text-heading text="Order tracking" size="h6" :capitalize="false" :spacing="false"></text-heading>
              <p class="text-body font-body text-sm">
                Duxstore keeps your customers informed on the location of their package in real time. Select one of our listed courier partners to get started.
              </p>
            </div>
          </div>
        </SectionHalfWidth>
        <SectionHalfWidth class="space-x-2 mt-10 mb-10">
          <div class="w-full sm:w-6/12">
            <div>
              <BaseIcon icon="channels" bg-color="bg-gray-100" />
            </div>
            <div>
              <text-heading text="Multiple sales channels" size="h6" :capitalize="false" :spacing="false"></text-heading>
              <p class="text-body font-body text-sm">
                Connect your store to your social media accounts and other marketing tools to convert your audience into paying customers.
              </p>
            </div>
          </div>
          <div class="w-full sm:w-6/12">
            <div>
              <BaseIcon icon="analytics" bg-color="bg-green-100" />
            </div>
            <div>
              <text-heading text="Analytics" size="h6" :capitalize="false" :spacing="false"></text-heading>
              <p class="text-body font-body text-sm">
                Learn how your customers behave with in-depth analytics built into your store, measure
              </p>
            </div>
          </div>
        </SectionHalfWidth>
      </SectionFullWidth>

      <!--Pricinng section-->
      <SectionFullWidth class="m-auto container pl-20 py-10">
        <text-heading text="Plans & Pricing" size="h4" :capitalize="false" :spacing="false"></text-heading>
        <text-body text="Select a plan that suits your business needs."></text-body>
        <div class="transform -rotate-3 mt-2 relative -left-10">
          <span class="text-white bg-brand px-1 py-0.5">Start your free 14 day trial</span>
          <text-body class="absolute -right-20" text="no credit card required." theme="black"></text-body>
        </div>
        <!-- Available plans -->
        <SectionHalfWidth class="my-24 space-x-4">
          <div class="bg-primary rounded-xl sm:w-5/12 w-full 2xl:w-4/12 p-7">
            <text-heading :spacing="false" :capitalize="false" text="Essential" size="h4"></text-heading>
            <text-body
              text="Our essential plan offers useful tools for small business owners to sell successfully online.">
            </text-body>

            <div class="my-5 relative">
              <text-body text="Website monthly visitors:"></text-body>
              <div class="bg-dark px-3 h-14 my-2 w-full flex rounded-xl items-center flex-row justify-between">
                <text-body text="Up to" theme="primary" size="small"></text-body>
                <text-heading text="5000" size="h5" theme="primary"></text-heading>
              </div>
              <text-heading class="absolute right-0" text="+ 0.5% of every transaction" size="h7" :capitalize="false" :spacing="false" :lineheight="false"></text-heading>
            </div>

            <div class="flex flex-row mt-20 mb-5 items-end">
              <text-heading text="₦5,000" size="h3" :capitalize="false" :lineheight="false" :spacing="false"></text-heading>
              <text-heading text="/mo" size="h6" :capitalize="false" :lineheight="false" :spacing="false"></text-heading>
            </div>

            <button-secondary title="Get started" width="full" class="w-full" rounded="full" icon="caret-right-white"></button-secondary>
          </div>
          <div class="bg-brand rounded-xl sm:w-5/12 w-full 2xl:w-4/12 p-7">
            <div class="flex flex-row items-center justify-between">
              <text-heading :spacing="false" :capitalize="false" text="Duxstore plus" theme="primary" size="h4"></text-heading>
              <span class="bg-light-green font-heading rounded-md font-bold text-sm px-5 py-1">Recommended</span>
            </div>
            <text-body
              theme="primary"
              text="Our essential plan offers useful tools for small business owners to sell successfully online.">
            </text-body>

            <div class="my-5 relative">
              <ul class="space-y-1">
                <li class="flex flex-row items-center space-x-3 text-white">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3073 10.5L9.43577 12.6285L13.6927 8.37153M6.06747 2.7279C6.83085 2.66697 7.55556 2.36681 8.13846 1.87013C8.79713 1.3085 9.6344 1 10.5 1C11.3656 1 12.2029 1.3085 12.8615 1.87013C13.4444 2.36681 14.1692 2.66697 14.9325 2.7279C15.7954 2.79654 16.6055 3.17043 17.2175 3.78247C17.8296 4.39451 18.2035 5.20464 18.2721 6.06747C18.333 6.83085 18.6332 7.55556 19.1299 8.13846C19.6915 8.79713 20 9.6344 20 10.5C20 11.3656 19.6915 12.2029 19.1299 12.8615C18.6332 13.4444 18.333 14.1692 18.2721 14.9325C18.2035 15.7954 17.8296 16.6055 17.2175 17.2175C16.6055 17.8296 15.7954 18.2035 14.9325 18.2721C14.1692 18.333 13.4444 18.6332 12.8615 19.1299C12.2029 19.6915 11.3656 20 10.5 20C9.6344 20 8.79713 19.6915 8.13846 19.1299C7.55556 18.6332 6.83085 18.333 6.06747 18.2721C5.20464 18.2035 4.39451 17.8296 3.78247 17.2175C3.17043 16.6055 2.79654 15.7954 2.7279 14.9325C2.66697 14.1692 2.36681 13.4444 1.87013 12.8615C1.3085 12.2029 1 11.3656 1 10.5C1 9.6344 1.3085 8.79713 1.87013 8.13846C2.36681 7.55556 2.66697 6.83085 2.7279 6.06747C2.79654 5.20464 3.17043 4.39451 3.78247 3.78247C4.39451 3.17043 5.20464 2.79654 6.06747 2.7279Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Unlimited monthly visitors</span>
                </li>
                <li class="flex flex-row items-center space-x-3 text-white">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3073 10.5L9.43577 12.6285L13.6927 8.37153M6.06747 2.7279C6.83085 2.66697 7.55556 2.36681 8.13846 1.87013C8.79713 1.3085 9.6344 1 10.5 1C11.3656 1 12.2029 1.3085 12.8615 1.87013C13.4444 2.36681 14.1692 2.66697 14.9325 2.7279C15.7954 2.79654 16.6055 3.17043 17.2175 3.78247C17.8296 4.39451 18.2035 5.20464 18.2721 6.06747C18.333 6.83085 18.6332 7.55556 19.1299 8.13846C19.6915 8.79713 20 9.6344 20 10.5C20 11.3656 19.6915 12.2029 19.1299 12.8615C18.6332 13.4444 18.333 14.1692 18.2721 14.9325C18.2035 15.7954 17.8296 16.6055 17.2175 17.2175C16.6055 17.8296 15.7954 18.2035 14.9325 18.2721C14.1692 18.333 13.4444 18.6332 12.8615 19.1299C12.2029 19.6915 11.3656 20 10.5 20C9.6344 20 8.79713 19.6915 8.13846 19.1299C7.55556 18.6332 6.83085 18.333 6.06747 18.2721C5.20464 18.2035 4.39451 17.8296 3.78247 17.2175C3.17043 16.6055 2.79654 15.7954 2.7279 14.9325C2.66697 14.1692 2.36681 13.4444 1.87013 12.8615C1.3085 12.2029 1 11.3656 1 10.5C1 9.6344 1.3085 8.79713 1.87013 8.13846C2.36681 7.55556 2.66697 6.83085 2.7279 6.06747C2.79654 5.20464 3.17043 4.39451 3.78247 3.78247C4.39451 3.17043 5.20464 2.79654 6.06747 2.7279Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Choose from 50+ tailored templates</span>
                </li>
                <li class="flex flex-row items-center space-x-3 text-white">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3073 10.5L9.43577 12.6285L13.6927 8.37153M6.06747 2.7279C6.83085 2.66697 7.55556 2.36681 8.13846 1.87013C8.79713 1.3085 9.6344 1 10.5 1C11.3656 1 12.2029 1.3085 12.8615 1.87013C13.4444 2.36681 14.1692 2.66697 14.9325 2.7279C15.7954 2.79654 16.6055 3.17043 17.2175 3.78247C17.8296 4.39451 18.2035 5.20464 18.2721 6.06747C18.333 6.83085 18.6332 7.55556 19.1299 8.13846C19.6915 8.79713 20 9.6344 20 10.5C20 11.3656 19.6915 12.2029 19.1299 12.8615C18.6332 13.4444 18.333 14.1692 18.2721 14.9325C18.2035 15.7954 17.8296 16.6055 17.2175 17.2175C16.6055 17.8296 15.7954 18.2035 14.9325 18.2721C14.1692 18.333 13.4444 18.6332 12.8615 19.1299C12.2029 19.6915 11.3656 20 10.5 20C9.6344 20 8.79713 19.6915 8.13846 19.1299C7.55556 18.6332 6.83085 18.333 6.06747 18.2721C5.20464 18.2035 4.39451 17.8296 3.78247 17.2175C3.17043 16.6055 2.79654 15.7954 2.7279 14.9325C2.66697 14.1692 2.36681 13.4444 1.87013 12.8615C1.3085 12.2029 1 11.3656 1 10.5C1 9.6344 1.3085 8.79713 1.87013 8.13846C2.36681 7.55556 2.66697 6.83085 2.7279 6.06747C2.79654 5.20464 3.17043 4.39451 3.78247 3.78247C4.39451 3.17043 5.20464 2.79654 6.06747 2.7279Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Unlimited monthly visitors</span>
                </li>
                <li class="flex flex-row items-center space-x-3 text-white">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3073 10.5L9.43577 12.6285L13.6927 8.37153M6.06747 2.7279C6.83085 2.66697 7.55556 2.36681 8.13846 1.87013C8.79713 1.3085 9.6344 1 10.5 1C11.3656 1 12.2029 1.3085 12.8615 1.87013C13.4444 2.36681 14.1692 2.66697 14.9325 2.7279C15.7954 2.79654 16.6055 3.17043 17.2175 3.78247C17.8296 4.39451 18.2035 5.20464 18.2721 6.06747C18.333 6.83085 18.6332 7.55556 19.1299 8.13846C19.6915 8.79713 20 9.6344 20 10.5C20 11.3656 19.6915 12.2029 19.1299 12.8615C18.6332 13.4444 18.333 14.1692 18.2721 14.9325C18.2035 15.7954 17.8296 16.6055 17.2175 17.2175C16.6055 17.8296 15.7954 18.2035 14.9325 18.2721C14.1692 18.333 13.4444 18.6332 12.8615 19.1299C12.2029 19.6915 11.3656 20 10.5 20C9.6344 20 8.79713 19.6915 8.13846 19.1299C7.55556 18.6332 6.83085 18.333 6.06747 18.2721C5.20464 18.2035 4.39451 17.8296 3.78247 17.2175C3.17043 16.6055 2.79654 15.7954 2.7279 14.9325C2.66697 14.1692 2.36681 13.4444 1.87013 12.8615C1.3085 12.2029 1 11.3656 1 10.5C1 9.6344 1.3085 8.79713 1.87013 8.13846C2.36681 7.55556 2.66697 6.83085 2.7279 6.06747C2.79654 5.20464 3.17043 4.39451 3.78247 3.78247C4.39451 3.17043 5.20464 2.79654 6.06747 2.7279Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Unlimited monthly visitors</span>
                </li>
              </ul>
            </div>

            <div class="flex flex-row mt-14 mb-5 items-end">
              <text-heading theme="primary" class="mr-2" text="Starting at" size="h6" :capitalize="false" :lineheight="false" :spacing="false"></text-heading>
              <text-heading theme="primary" text="₦18,999" size="h3" :capitalize="false" :lineheight="false" :spacing="false"></text-heading>
              <text-heading theme="primary" text="/mo" size="h6" :capitalize="false" :lineheight="false" :spacing="false"></text-heading>
            </div>

            <button-secondary theme="primary" title="Get started" width="full" class="w-full" rounded="full" icon="caret-right-black"></button-secondary>
          </div>
        </SectionHalfWidth>
      </SectionFullWidth>

      <!--FAQ Section-->
      <SectionFullWidth class="m-auto container pl-20 py-10">
        <text-heading text="Frequently asked questions" size="h4" :capitalize="false" :spacing="false"></text-heading>
        <div class="py-6 w-full">
          <CollapsibleItem v-for="(item, i) in 5" :key="i" title="Which plan is best for me?">
            Sharpen your NumPy data wrangling skills by slicing, filtering, and sorting New York City’s tree census data. Create new arrays
            by pulling data based on conditional statements, and add and remove data along any dimension to suit your purpose. Along the
            way, you’ll learn the shape and dimension compatibility principles to prepare for super-fast array math.
          </CollapsibleItem>
        </div>
      </SectionFullWidth>
    </div>

    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    const openAccordion = true
    return {
      openAccordion
    }
  },
})
</script>
