<template>
  <x-modal title="新增客户" :visible="value"
    @cancel="$emit('input', false)"
    @confirm="handleAddFormConfirm">
    <dynamic-form
      ref="dyform"
      :fields="addProtocal.fields || []"
      v-model="addFormData">
    </dynamic-form>
  </x-modal>
</template>
<script>
  import * as api from './api'

  export default {
    props: ['value'],
  
    data () {
      return {
        addProtocal: {},
        addFormData: {}
      }
    },

    mounted () {
      api.getAddProtocal()
        .then(protocal => {
          this.addProtocal = protocal
        })
    },

    methods: {
      handleAddFormConfirm () {
        let errors = this.$refs.dyform.validate()
        if (errors.length) {
          this.$emit('input', true)
          return
        } else {
          console.info('提交表单', this.addFormData)
        }
      }
    }
  }
</script>
