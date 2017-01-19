<template lang="html">
  <input type="text"
    :class="{'is-error': isError}"
    :value="value"
    @input="handleInput"
    @blur="$emit('blur')"
    @focus="$emit('focus')">
</template>

<script>
export default {
  props: ['value', 'config', 'isError'],

  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
  .is-error {
    border-color: red;
  }
</style>
