// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import 'normalize.css/normalize.css'
import './shared/styles/main.css'

import uilib from './shared/uilib'
import DynamicForm from 'components/dynamic-form'

import App from './app/app'
import routes from './app/routes'

Vue.use(VueRouter)
Vue.use(uilib)

Vue.component('dynamic-form', DynamicForm)

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
