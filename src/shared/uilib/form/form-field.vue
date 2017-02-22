<template>
  <div class="x-form__field">
    <div class="x-form__label">{{label}}</div>
    <div class="x-form__control">
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .x-form__field {
    margin: 10px 0 15px;
  }
  .x-form__label {
    margin-bottom: 10px;
  }
  .x-form__error {
    margin-top: 8px;
    color: #d0010b;
  }
</style>

<script>
  export default {
    props: {
      label: String
    }
  }
</script>
