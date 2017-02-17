// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import 'normalize.css/normalize.css'
import './shared/styles/main.css'

import uilib from './shared/uilib'
import AppHeader from 'components/app-header'
import AppNav from 'components/app-nav'
import DynamicForm from 'components/dynamic-form'
import NavBar from 'components/nav-bar'

import App from './app/app'
import routes from './app/routes'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(uilib)

Vue.component('app-header', AppHeader)
Vue.component('app-nav', AppNav)
Vue.component('dynamic-form', DynamicForm)
Vue.component('nav-bar', NavBar)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#root',
  template: '<App />',
  components: { App }
})
