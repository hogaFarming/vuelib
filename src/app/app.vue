<template>
  <div class="l-app">
    <app-header class="l-app__top"></app-header>
    <app-nav class="l-app__left" :menus="menus"></app-nav>
    <div class="l-app__main">
      <nav-bar class="l-app__navbar"></nav-bar>
      <router-view class="l-app__page"></router-view>
    </div>
  </div>
</template>

<style>
  .l-app__top {
    height: 60px;
  }
  .l-app__left {
    width: 180px;
  }
  .l-app__main {
    position: absolute;
    top: 60px;
    left: 180px;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
  .l-app__page {
    padding: 20px 15px 0;
  }
</style>

<script>
  import eventBus from 'utils/event-bus'
  import menus from './menu'

  export default {
    data () {
      return {
        menus: menus
      }
    },

    methods: {
    },

    mounted () {
      window.addEventListener('resize', e => {
        eventBus.$emit('WINDOW_RESIZE', e)
      })
    }
  }
</script>
