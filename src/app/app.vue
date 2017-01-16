<template>
  <div class="app-wrap">
    <!-- <x-appheader></x-appheader> -->
    <div class="apphead clearfix">
      <div class="apphead-left clearfix">
        <div class="apphead-item apphead-toggle">
          <x-icon name="navicon"></x-icon>
        </div>
        <div class="apphead-item apphead-logo">
          <img src="../shared/assets/logo.png" alt="crm">
        </div>
      </div>
      <div class="apphead-right clearfix">
        <div class="apphead-item apphead-remind">
          <x-icon name="bell-o"></x-icon>
        </div>
        <div class="apphead-item apphead-user">
          <img class="avatar-circle" :src="user.avatar" alt=""
            @error="handleAvatarError">
          <span>{{user.name}}</span>
        </div>
      </div>
    </div>

    <x-appnav :menus="menus"></x-appnav>

    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  body {
    background: #e7ecef;
  }
  .apphead {
    height: 60px;
    background: #fff;
  }
  .apphead-left {
    float: left;
  }
  .apphead-right {
    float: right;
  }
  .apphead-item {
    float: left;
  }
  .apphead-toggle {
    line-height: 60px;
    padding: 0 20px;
    border-right: 1px solid #ededed;
    font-size: 20px;
    color: #4a4a4a;
    cursor: pointer;
  }
  .apphead-logo {
    padding: 15px 18px;
  }
  .apphead-logo img {
    display: block;
  }
  .apphead-remind {
    padding: 0 15px;
    line-height: 60px;
    font-size: 20px;
    color: #4a4a4a;
  }
  .apphead-user {
    padding: 0 20px 0 15px;
  }
  .apphead-user > img,
  .apphead-user > span {
    line-height: 60px;
    vertical-align: middle;
  }
  .apphead-user > img {
    margin-right: 10px;
  }

  .app-content {
    position: absolute;
    top: 60px;
    left: 180px;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
</style>

<script>
  import Icon from 'components/icon'
  // import Appheader from 'components/appheader'
  import Appnav from 'components/appnav'
  import eventBus from 'utils/event-bus'

  import avatar from '../shared/assets/avatar.png'
  import menus from './menu'

  export default {
    data () {
      return {
        menus: menus,
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
    },

    mounted () {
      window.addEventListener('resize', e => {
        eventBus.$emit('WINDOW_RESIZE', e)
      })
    },

    components: {
      'x-icon': Icon,
      // 'x-appheader': Appheader,
      'x-appnav': Appnav
    }
  }
</script>
