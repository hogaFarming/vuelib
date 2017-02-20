<template>
  <div>
    <div class="l-cnt">
      <div class="l-cnt__title-bar">
        实体设置
        <!-- -{{entityName}}-->
      </div>
      <div class="l-cnt__tabs tabbar u-cf">
        <router-link
          v-for="t in tabs"
          class="tabbar__item"
          active-class="tabbar__item_active"
          :to="`/entity/${$route.params.id}/${t.path}`">
          {{t.label}}
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
  .tabbar {
    background-color: #f9f9f9;
  }
  .tabbar__item {
    float: left;
    text-decoration: none;
    color: #000;
    padding: 0 30px;
    height: 48px;
    line-height: 48px;
  }
  .tabbar__item_active {
    background-color: #fff;
    color: #0273b7;
    border-left: 1px solid #e3e8eb;
    border-right: 1px solid #e3e8eb;
    border-top: 3px solid #3398db;
  }
</style>
<script>
  export default {
    data () {
      return {
        tabs: [
          { label: '类型', path: 'types' },
          { label: '字段', path: 'fields' },
          { label: '字段属性设置', path: 'props' },
          { label: '常用筛选项目', path: 'menus' },
          { label: '页签设置', path: 'tabs' }
        ]
      }
    },

    created () {

    }
  }
</script>
