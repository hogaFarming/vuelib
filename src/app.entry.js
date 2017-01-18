// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import 'normalize.css/normalize.css'
import './shared/styles/main.css'

import Button from 'components/button'
import Icon from 'components/icon'
import { Row, Col } from 'components/grid'
import BreadCrumb from 'components/breadcrumb'
import {Dropdown, DropdownMenu, DropdownItem} from 'components/dropdown'
import Table from 'components/table'
import Modal from 'components/modal'

import App from './app/app'
import routes from './app/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.component('x-button', Button)
Vue.component('x-icon', Icon)
Vue.component('x-row', Row)
Vue.component('x-col', Col)
Vue.component('x-breadcrumb', BreadCrumb)
Vue.component('x-dropdown', Dropdown)
Vue.component('x-dropdown-menu', DropdownMenu)
Vue.component('x-dropdown-item', DropdownItem)
Vue.component('x-table', Table)
Vue.component('x-modal', Modal)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#root',
  template: '<App />',
  components: { App }
})
