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
