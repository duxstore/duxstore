<template>
  <div>
    <p
    :class="['font-body',
      {
        'font-normal': weight === 'normal',
        'font-bold': weight === 'bold',
        'text-black': theme === 'black',
        'text-body': theme === 'white',
        'text-primary': theme === 'primary',
        'text-brand': theme === 'brand',
        'text-gray-light': theme === 'light',
        'text-lg': size === 'large',
        'text-sm': size === 'small',
      }
    ]">
      {{ text }}
      <slot v-if="!text"></slot>
    </p>
  </div>
</template>

<script lang="ts">
import  Vue, { PropType } from 'vue'

type SizeOptions  = "large" | "small"
export default Vue.extend({
    props: {
      size: {
        type: String as PropType<SizeOptions>,
        default: 'small',
        required: false,
      },
      text: {
        type: String,
        required: false,
        default: ''
      },
      theme: {
        type: String,
        required: false,
        default: 'white'
      },
      weight: {
        type: String,
        required: false,
        default: 'normal'
      }
    }
})
</script>
