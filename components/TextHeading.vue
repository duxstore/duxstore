<template>
  <div>
    <h1
    :class="['font-heading',
      {
        'text-black': theme === 'black',
        'text-primary': theme === 'primary',
        'text-brand': theme === 'brand',
        'text-5xl': size === 'h1',
        'text-4xl': size === 'h2',
        'text-3xl': size === 'h3',
        'text-2xl': size === 'h4',
        'text-xl': size === 'h5',
        'text-base': size === 'h6',
        'text-sm': size === 'h7',
        'capitalize': capitalize,
        'font-bold': !lightweight,
        'font-normal': lightweight,
        'py-6': spacing,
        'leading-block': lineheight,
        'leading-none': !lineheight
      }
    ]">
      {{ text }}
    </h1>
  </div>
</template>

<script lang="ts">
import  Vue, { PropType } from 'vue'

type SizeOptions  = "h1" | "h2" | "h3" | "h4"

export default Vue.extend({
  props: {
    size: {
      type: String as PropType<SizeOptions>,
      default: 'h1',
      required: false,
    },
    text: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'black'
    },
    capitalize: {
      type: Boolean,
      required: false,
      default: true
    },
    lightweight: {
      type: Boolean,
      required: false,
      default: false
    },
    spacing: {
      type: Boolean,
      required: false,
      default: true
    },
    lineheight: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {

    }
  },
})
</script>
