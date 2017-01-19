<template lang="html">
  <div class="dyform">
    <dynamic-form-field
      v-for="(field, index) in parsedFields"
      ref="fields"
      :value="value[field.name]"
      :name="field.name"
      :label="field.label"
      :controlType="field.controlType"
      :config="field.config"
      @input="onFieldValueChange(field, $event)">
    </dynamic-form-field>
  </div>
</template>

<script>
import parse from './parse.js'
import DynamicFormField from './dynamic-form-field.vue'

export default {
  props: ['fields', 'value'],

  data () {
    return {}
  },

  computed: {
    parsedFields () {
      return parse(this.fields)
    }
  },

  methods: {
    onFieldValueChange (field, newValue) {
      let newFormValue = { ...this.value, [field.name]: newValue }
      this.$emit('input', newFormValue)
      // console.log(JSON.stringify(this.value))
    },

    validate () {
      let errors = []
      this.$refs.fields.forEach(fieldInstance => {
        let result = fieldInstance.validate()
        if (result) {
          errors.push(result)
        }
      })
      return errors
    }
  },

  components: {
    'dynamic-form-field': DynamicFormField
  }
}
</script>

<style lang="css">
</style>
