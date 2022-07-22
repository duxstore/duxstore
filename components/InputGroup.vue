<template>
  <div>
    <BaseInput>
      <span id="store-name" :class="['absolute font-body text-body select-none', {'text-base scale-100 transform': !focus, 'scale-70 transform transition-transform': focus}]">{{ placeholder }}</span>
      <input v-model="value" type="text" aria-describedby="store-name" class="outline-none leading-10 bg-transparent w-full" @focus="hasFocus" @blur="lostFocus">
      <component :is="buttonType" v-bind="buttonProps"></component>
    </BaseInput>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    button: {
      type: String,
      default: 'primary',
      required: false
    },
    type: {
      type: String,
      default: 'text',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    const focus: Boolean = false
    const value: String = ''
    return {
      focus,
      value
    }
  },
  computed: {
    buttonType(): String {
      return "button-" + this.button.toLowerCase()
    },
    buttonProps(): Object {
      return {
        title: 'Get started',
        width: 'small'
      }
    }
  },
  methods: {
    hasFocus(): void {
      if (this.value === '') {
        // animate it when there's no value
        this.focus = true
      } else {
        // when there is a value, stay animated
        this.focus = true
      }
    },
    lostFocus(): void {
      if (this.value !== '') {
        // remain animated
        this.focus = true
      } else {
        this.focus = false
      }
    }
  },
})

</script>
