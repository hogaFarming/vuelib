<template lang="html">
  <div class="dyform-avatar__wrap" :class="{'is-error': isError}">
    <div class="dyform-avatar__btn">
      <x-button type="primary">上传头像</x-button>
    </div>
    <div class="dyform-avatar__preview">
      <img :src="value || defaultAvatar" alt="头像">
    </div>
    <div class="dyform-avatar__tips">
      头像上传要求 <br>
      <span>1.建议使用正方形的图片</span>
      <span>2.图片大小不大于200k</span>
      <span>3.图片格式 jpg、png、jpeg</span>
    </div>
  </div>
</template>

<script>
import defaultAvatar from './default.png'
export default {
  props: ['value', 'isError'],

  data () {
    return {
      defaultAvatar
    }
  }
}
</script>

<style lang="css">
  .dyform-avatar__wrap {
    /*border: 1px solid #fff;*/
    position: relative;
  }
  .dyform-avatar__wrap.is-error {
    /*border-color: #d0010b;*/
  }
  .dyform-avatar__btn {
    margin-top: 25px;
    float: right;
  }
  .dyform-avatar__tips {
    font-size: 14px;
    color: #9b9b9b;
    line-height: 1.5;
  }
  .dyform-avatar__tips span {
    font-size: 12px;
  }
</style>
