<template lang="html">
  <div class="dyform">
    <dynamic-form-field
      v-for="field in parsedFields"
      :value="formData[field.name]"
      :field="field"
      @input="onFieldValueChange">
    </dynamic-form-field>
  </div>
</template>

<script>
import parse from './parse.js'
import DynamicFormField from './dynamic-form-field.vue'

export default {
  props: ['fields', 'formData'],

  data () {
    return {}
  },

  computed: {
    parsedFields () {
      return parse(this.fields)
    }
  },

  methods: {
    onFieldValueChange (e) {
      console.log(e)
    }
  },

  components: {
    'dynamic-form-field': DynamicFormField
  }
}
</script>

<style lang="css">
</style>
