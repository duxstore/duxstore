<template>
  <div class="bg-primary rounded-lg pb-10 pt-5 px-9 my-5">
    <div class="flex flex-row justify-between">
      <button class="bg-transparent border-none flex flex-row items-center justify-between outline-none w-full" @click="toggleExpand">
        <text-heading :text="title" size="h5" :capitalize="false" :spacing="false"></text-heading>
        <svg xmlns="http://www.w3.org/2000/svg" :class="['h-6 w-6 transition duration-500 ease-in-out', {'transform rotate-180': expand, 'transform': !expand}]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
    <text-body v-show="expand" class="transition duration-500 ease-in-out">
      <slot></slot>
    </text-body>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props:{
    title:{
      type: String,
      default: '',
      required: true
    },
    // expand: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // }
  },
  data() {
    const expand = false
    return {
      expand
    }
  },
  methods: {
    toggleExpand () {
      this.expand = !this.expand
      this.$emit('expand', this.expand)
    }
  },
})
</script>
