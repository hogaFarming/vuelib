<template>
  <div class="x-breadcrumb">
    <span
      v-for="(item, index) in stack"
      class="x-breadcrumb-item"
      @click="handleClick(item, index)">
      {{item.name}}
    </span>
  </div>
</template>
<style>
  .x-breadcrumb {

  }
  .x-breadcrumb-item {

  }
  .x-breadcrumb-item:after {
    content: '/';
  }
  .x-breadcrumb-item:hover {
    color: #999;
    cursor: pointer;
  }
  .x-breadcrumb-item:last-child {
    color: inherit;
    cursor: default;
  }
  .x-breadcrumb-item:last-child:after {
    content: '';
  }
</style>
<script>
  export default {
    props: ['stack'],

    methods: {
      handleClick (item, index) {
        let newStack = this.stack.slice(0, index + 1)
        this.$emit('navigate', item, newStack)
      }
    }
  }
</script>
