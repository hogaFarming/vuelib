<template>
  <select class="x-select" :value="value">

  </select>
</template>
<script>
  export default {
    props: {
      value: [String, Number]
    },
    data () {
      return {}
    }
  }
</script>
