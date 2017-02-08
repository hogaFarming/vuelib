<template>
  <div class="homepage">
    首页
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

    watch: {
      formData (newValue) {
        console.log(JSON.stringify(newValue))
      }
    },

    methods: {
    }
  }
</script>
