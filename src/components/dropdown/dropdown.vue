<template>
  <div class="x-dropdown">
    <div class="x-dropdown-trigger" @click="handleTriggerClick">
      <slot></slot>
    </div>
    <div
      class="x-dropdown-dropdown"
      ref="dropdown"
      v-show="open"
      @click="handleDropdownClick">
      <slot name="menu"></slot>
    </div>
  </div>
</template>
<style>
  .x-dropdown {
    position: relative;
    display: inline-block;
  }
  .x-dropdown-dropdown {
    position: absolute;
    bottom: 100%;
  }
  .x-dropdown-menu {
    min-width: 80px;
    background: #fff;
    border: 1px solid #ddd;
  }
  .x-dropdown-item {
    padding: 8px 10px;
    line-height: 1;
    font-size: 14px;
    cursor: pointer;
  }
  .x-dropdown-item:hover {
    background: #f0f0f0;
  }
</style>
<script>
  export default {
    data () {
      return {
        open: false
      }
    },

    watch: {
      'open' (isOpen) {
        if (isOpen) {
          setTimeout(() => {
            document.body.addEventListener('click', this.handleBodyClick)
          }, 0)
        } else {
          document.body.removeEventListener('click', this.handleBodyClick)
        }
      }
    },

    methods: {
      handleTriggerClick (e) {
        this.open = !this.open
      },

      handleDropdownClick (e) {
        if (e.target.className.indexOf('x-dropdown-item') !== -1) {
          this.open = false
        }
      },

      handleBodyClick (e) {
        // 判断是否点击了菜单
        if (isChildren(e.target, this.$refs.dropdown, true)) {
          return
        }
        this.open = false
      }
    }
  }
  function isChildren (child, parent, checkEqual) {
    let htmlNode = document.body.parentNode
    let currParent = child.parentNode
    if (child === parent && checkEqual) {
      return true
    } else if (currParent === parent) {
      return true
    } else if (currParent === htmlNode) {
      return false
    } else {
      return isChildren(currParent, parent, true)
    }
  }
</script>
