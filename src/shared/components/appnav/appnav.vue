<template>
  <div class="appnav-wrap" @scroll="handleScroll">
    <div class="appnav">
      <ul class="appnav-lv1">
        <li v-for="(lv1, index) in navmenus" :class="{active: lv1 === currLv1}"
          @click="handleLv1Click(lv1, index)">
          <!-- <router-link :to="lv1Item.url">{{lv1Item.name}}</router-link> -->
          <div class="lv1-title">
            <x-icon :name="lv1.icon" class="icon"></x-icon>
            <span>{{lv1.name}}</span>
          </div>

          <ul class="appnav-lv2" :style="{maxHeight: lv2MaxHeight}">
            <li v-for="lv2 in lv1.sub" :class="{active: lv2 === currLv2}"
              @click="handleLv2Click(lv2)">
              <x-icon name="circle-o"
                style="font-size: 12px;margin-right:5px;"></x-icon>
              <span>{{lv2.name}}</span>

              <ul class="appnav-lv3" v-if="lv2.sub && lv2.sub.length">
                <li></li>
                <li v-for="lv3 in lv2.sub"  :class="{active: lv3 === currLv3}"
                  @click="handleLv3Click(item)">
                  <span>{{lv3.name}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="./appnav.css"></style>

<script>
  import _ from 'lodash'
  // import {router} from 'vue-router'
  import Icon from 'components/icon'
  import eventBus from 'utils/event-bus'

  export default {
    props: ['menus'],
    data () {
      return {
        currLv1: null,
        currLv2: null,
        currLv3: null,
        lv2MaxHeight: 'initial'
      }
    },
    computed: {
      navmenus () {
        return this.menus.slice()
      }
    },
    created () {
      eventBus.$on('WINDOW_RESIZE', _.throttle(msg => {
        console.log(msg)
        const appHeadHeight = 60
        const perMenu = 43
        const menuCount = this.menus.length
        const winHeight = window.innerHeight
        this.lv2MaxHeight = winHeight - appHeadHeight - (perMenu * menuCount) + 'px'
      }, 500))
    },
    methods: {
      handleLv1Click (item, index) {
        this.currLv1 = item
        if (item.action) {
          this.$router.push(item.action)
          this.currLv2 = null
          this.currLv3 = null
        }
      },

      handleLv2Click (item) {
        this.currLv2 = item
        if (item.action) {
          this.$router.push(item.action)
          this.currLv3 = null
        }
      },

      handleLv3Click (item) {
        this.currLv3 = item
        this.$router.push(item.action)
      },

      handleScroll () {
        console.log('scroll')
      }
    },
    components: {
      'x-icon': Icon
    }
  }
</script>
