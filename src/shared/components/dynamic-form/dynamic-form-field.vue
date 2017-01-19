<template lang="html">
  <div class="dyform__field">
    <div class="dyform__label">
      {{label}}
    </div>
    <div class="dyform__control">
      <dynamic-form-control
        :isError="!!errorMsg"
        :value="value"
        :type="controlType"
        :config="config"
        @input="$emit('input', $event)"
        @blur="validate"
        @focus="errorMsg = ''">
      </dynamic-form-control>
    </div>
    <div class="dyform__error" v-show="errorMsg">
      {{errorMsg}}
    </div>
  </div>
</template>

<script>
import DynamicFormControl from './dynamic-form-control'

// const VALID_STATUS = {
//   INIT: 'initital',
//   VALID: 'valid',
//   INVALID: 'invalid'
// }

export default {
  props: ['value', 'name', 'label', 'controlType', 'config'],

  data () {
    return {
      errorMsg: ''
    }
  },

  mounted () {
  },

  methods: {
    validate () {
      console.log('validating..')
      this.errorMsg = this.checkoutError()
      return this.errorMsg
    },

    checkoutError () {
      const value = this.value
      const {
        // isReadOnly,
        isRequired,
        minLength,
        maxLength,
        validRegex
      } = this.config

      if (!value && isRequired) return '该表单项为必填项'
      if (!value) return ''
      if (minLength && value.length < minLength) return `最小长度为${minLength}`
      if (maxLength && value.length > maxLength) return `最大长度为${maxLength}`
      if (validRegex && !new RegExp(validRegex).test(value)) return '正则校验不通过'
      return ''
    }
  },

  components: {
    'dynamic-form-control': DynamicFormControl
  }
}
</script>

<style lang="css">
  .dyform__error {
    color: red;
  }
</style>
