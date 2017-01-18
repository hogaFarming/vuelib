<template lang="html">
  <input type="text"
    :value="value"
    @input="$emit('input', $event)">
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="css">
</style>
