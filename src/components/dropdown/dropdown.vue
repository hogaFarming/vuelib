<template>
  <div class="x-dropdown">
    <div class="x-dropdown-trigger" @click="handleTriggerClick" ref="trigger">
      <slot></slot>
    </div>
    <div
      class="x-dropdown-dropdown"
      ref="dropdown"
      :style="{ visibility: open ? 'visible' : 'hidden' }"
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
    z-index: 999;
    position: absolute;
    /*bottom: 100%;*/
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
          // setTimeout(() => {
          let triggerEl = this.$refs.trigger
          let dpEl = this.$refs.dropdown
          let restViewportHeight = window.innerHeight + window.scrollY -
            getOffsetTop(triggerEl, true) - triggerEl.offsetHeight
          if (restViewportHeight < dpEl.offsetHeight) {
            dpEl.style.bottom = '100%'
          } else {
            dpEl.style.bottom = ''
          }
          // }, 0)
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
  function getOffsetTop (node, isAbsolute) {
    if (!isAbsolute) return node.offsetTop
    let parent = node.offsetParent
    if (!parent) return node.offsetTop
    return node.offsetTop + getOffsetTop(parent, true)
  }

</script>
