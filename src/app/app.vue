<template>
  <div>
    <!-- <x-appheader></x-appheader> -->
    <div class="app-header">

    </div>

    <x-appnav :menus="menus"></x-appnav>
    
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Icon from 'components/icon'
  // import Appheader from 'components/appheader'
  import Appnav from 'components/appnav'

  import menus from './menu'

  export default {
    data () {
      return {
        menus: menus
      }
    },

    components: {
      'x-icon': Icon,
      // 'x-appheader': Appheader,
      'x-appnav': Appnav
    }
  }
</script>
