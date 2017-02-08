<template>
  <div :class="[
    'x-col',
    span ? `x-col-${span}` : 'x-col-12',
    {
      [`x-col-offset-${offset}`]: offset,
      [`x-col-pull-${pull}`]: pull,
      [`x-col-push-${push}`]: push
    }
  ]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: ['span', 'offset', 'push', 'pull']
  }
</script>
