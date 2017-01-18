<template>
  <div class="homepage">
    <x-dynamic-form
      :fields="fields"
      :formData="formData">
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
    }
  }
</script>
