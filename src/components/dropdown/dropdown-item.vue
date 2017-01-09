<template>
  <div class="x-dropdown-item" @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>
<script>
  export default {

  }
</script>
