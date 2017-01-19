<template>
  <div class="homepage">
    <x-button type="primary" @click="validateForm">校验表单</x-button>
    <x-dynamic-form
      ref="dyform"
      :fields="fields"
      v-model="formData">
    </x-dynamic-form>
  </div>
</template>

<script>
  import protocals from './protocal'

  export default {
    data () {
      return {
        fields: protocals.fields,
        formData: {
          'xwcustname': '玄武科技'
        }
      }
    },

    watch: {
      formData (newValue) {
        console.log(JSON.stringify(newValue))
      }
    },

    methods: {
      validateForm () {
        const result = this.$refs.dyform.validate()
        console.log(`校验结果：${result}`)
      },

      handleInput (newValue) {
        this.formData = newValue
      }
    }
  }
</script>
