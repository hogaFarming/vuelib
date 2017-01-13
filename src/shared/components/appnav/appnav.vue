<template>
  <div class="appnav">
    <ul class="appnav-lv1">
      <li v-for="(lv1, index) in navmenus" :class="{active:lv1.active}"
        @click="handleLv1Click(lv1, index)">
        <!-- <router-link :to="lv1Item.url">{{lv1Item.name}}</router-link> -->
        <div class="lv1-title">
          <x-icon :name="lv1.icon" class="icon"></x-icon>
          <span>{{lv1.name}}</span>
          <span>{{lv1.active || 'noactive'}}</span>
        </div>

        <ul class="appnav-lv2">
          <li v-for="lv2 in lv1.sub">
            <x-icon name="circle-o"
              style="font-size: 12px;margin-right:5px;"></x-icon>
            <span>{{lv2.name}}</span>

            <ul class="appnav-lv3" v-if="lv2.sub && lv2.sub.length">
              <li></li>
              <li v-for="lv3 in lv2.sub">
                <span>{{lv3.name}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style src="./appnav.css"></style>

<script>
  // import {router} from 'vue-router'
  import Icon from 'components/icon'
  export default {
    props: ['menus'],
    data () {
      return {
        navmenus: [],
        currMenu: null
      }
    },
    // computed: {
    //   navmenus () {
    //     return this.menus.slice()
    //   }
    // },
    created () {
      this.navmenus = this.menus.slice()
    },
    methods: {
      handleLv1Click (item, index) {
        this.navmenus.push({ name: 'asdf', icon: 'gift' })
        // this.navmenus[index] = { ...item, active: true }
        // if (item.action) {
        //   this.$router.push(item.action)
        // }
        // this.$nextTick()
      }
    },
    components: {
      'x-icon': Icon
    }
  }
</script>
