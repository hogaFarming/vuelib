<template lang="html">
  <div class="dyform__field">
    <div class="dyform__label">
      {{field.label}}
    </div>
    <div class="dyform__control" ref="ctrlwrap">
      <dynamic-form-control
        :value="value"
        :type="field.controlType"
        @input="$emit('input', $event)">
      </dynamic-form-control>
    </div>
  </div>
</template>

<script>
import DynamicFormControl from './dynamic-form-control'

export default {
  props: ['field', 'value'],

  mounted () {
  },

  components: {
    'dynamic-form-control': DynamicFormControl
  }
}
</script>

<style lang="css">
</style>
