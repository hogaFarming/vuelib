<template>
  <i :class="'fa fa-' + name" @click="$emit('click', $event)"></i>
</template>
<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>
