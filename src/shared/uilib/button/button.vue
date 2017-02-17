<template lang="html">
  <button :disabled="disabled" class="x-btn"
    @click="handleClick"
    :class="[
      type ? `x-btn-${type}` : 'x-btn-primary',
      {
        'is-disabled': disabled
      }
    ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'disabled'],

  data () {
    return {

    }
  },

  created () {

  },

  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
