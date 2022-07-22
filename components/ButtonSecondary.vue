<template>
  <div
    :class="[
      {
        'w-4/12': width === 'small',
        'w-6/12': width === 'medium',
        'w-full': width === 'full',
        'w-auto': width === 'auto'
      }
    ]">
    <button
      v-if="type === 'button'"
      :class="styling">
      {{ title }}
      <component :is="require(`~/assets/images/` + icon + `.svg?inline`)" v-if="icon !== ''"></component>
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
    },
    rounded: {
      type: String,
      required: false,
      default: 'medium'
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    theme: {
      type: String,
      required: false,
      default: 'brand'
    }
  },
  computed: {
    styling() {
      return ["block border-none px-6 font-body text-sm font-medium leading-4", {
        'rounded-xl': this.rounded === 'medium',
        'rounded-full': this.rounded === 'full',
        'w-full': this.width === 'full',
        'flex flex-row justify-between items-center py-2': this.icon !== '',
        'py-3.5': this.icon === '',
        'bg-black text-white': this.theme === 'black',
        'bg-white text-black': this.theme === 'primary',
        'bg-brand text-white': this.theme === 'brand'
      }]
    }
  },
})
</script>
