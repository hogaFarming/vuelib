<template lang="html">
  <input type="text"
    class="x-input"
    :class="inputClasses"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :block="block"
    @click="$emit('click', $event)"
    @input="handleInput"
    @change="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)">
</template>

<script>
  export default {
    props: {
      value: String,
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      block: {
        type: Boolean,
        default: false
      },
      status: String // 'success', 'error', 'warning'
    },

    data () {
      return {}
    },

    computed: {
      inputClasses () {
        return {
          [`x-input_${this.status}`]: this.status,
          'x-input_block': this.block
        }
      }
    },

    methods: {
      handleInput (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style>
  .x-input {
    padding: 5px 10px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 2px;
    line-height: 34px;
    height: 34px;
    font-size: 14px;
    outline: none;
  }
  .x-input:focus {
    border-color: #3398db;
  }
  .x-input_error {
    border-color: #dd4b39;
  }
  .x-input_block {
    width: 100%;
  }
  .x-input_textarea {
    height: auto;
    line-height: 1.25;
    resize: vertical;
  }
</style>
