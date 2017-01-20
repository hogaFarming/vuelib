<template lang="html">
  <input type="text"
    class="dyform__input"
    :class="{'is-error': isError}"
    :value="value"
    :type="inputConfig.type"
    @input="handleInput"
    @blur="$emit('blur')"
    @focus="$emit('focus')">
</template>

<script>
export default {
  props: ['value', 'config', 'isError'],

  data () {
    return {
      inputConfig: {
        type: 'text'
      }
    }
  },

  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
