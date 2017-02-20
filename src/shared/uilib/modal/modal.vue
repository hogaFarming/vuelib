<template>
  <div class="x-modal__wrap" :class="{'is-visible': visible}">
    <!-- <div class="x-modal__mask"></div> -->
    <div class="x-modal__dialog">
      <div class="x-modal__header">
        <span>{{title}}</span>
        <x-icon name="close" class="x-modal__close" @click="cancel"></x-icon>
      </div>
      <div class="x-modal__body">
        <slot></slot>
      </div>
      <div class="x-modal__footer">
        <x-button class="x-modal__button" @click="cancel">关闭</x-button>
        <x-button class="x-modal__button" type="primary" @click="confirm">确定</x-button>
      </div>
    </div>
  </div>
</template>

<style>
  .x-modal__wrap {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*background: rgba(0, 0, 0, 0.3);*/
    overflow: auto;
  }
  .x-modal__wrap.is-visible {
    display: block;
  }
  .x-modal__dialog {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: #fff;
    border:1px solid #f4f4f4;
    box-shadow:0 10px 30px 0 rgba(174,174,174,0.50);
    margin-bottom: 50px;
  }
  .x-modal__header {
    padding: 0 20px;
    line-height: 48px;
    font-size: 16px;
    border-bottom:1px solid #f4f4f4;
  }
  .x-modal__close {
    float: right;
    line-height: 48px;
    color: #666;
    cursor: pointer;
  }
  .x-modal__body {
    padding: 10px 20px;
  }
  .x-modal__footer {
    padding: 12px;
    border-top: 1px solid #f4f4f4;
    text-align: center;
  }
  .x-modal__button {
    margin: 0 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>

<script>
  export default {
    props: ['title', 'visible'],

    data () {
      return {}
    },

    methods: {
      cancel () {
        this.$emit('cancel')
      },

      confirm () {
        this.$emit('confirm')
      }
    }
  }
</script>
