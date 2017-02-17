<template>
  <div class="apphd u-cf">
    <div class="apphd__left u-cf">
      <div class="apphd__item nav-toggle">
        <x-icon name="navicon"></x-icon>
      </div>
      <div class="apphd__item app-logo">
        <img class="app-logo__img" src="../../assets/logo.png" alt="crm">
      </div>
    </div>
    <div class="apphd__right u-cf">
      <div class="apphd__item bell">
        <x-icon name="bell-o"></x-icon>
      </div>
      <div class="apphd__item user">
        <img class="user__avatar" :src="user.avatar" alt=""
          @error="handleAvatarError">
        <span class="user__name">{{user.name}}</span>
      </div>
    </div>
  </div>
</template>
<style src="./app-header.css"></style>
<script>
  import avatar from '../../assets/avatar.png'

  export default {
    data () {
      return {
        user: {
          name: 'hoga',
          avatar: ''
        }
      }
    },

    methods: {
      handleAvatarError (e) {
        e.target.src = avatar
      }
    }
  }
</script>
