import Vue from 'vue'
import DemoApp from './uidemo/uidemo.vue'

import './uidemo/styles/main.css'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: '<DemoApp />',
  components: {
    DemoApp
  }
})
