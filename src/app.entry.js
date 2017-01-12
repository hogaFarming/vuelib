// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app/app'
import routes from './app/routes'

// import './shared/styles/main.css'

Vue.use(VueRouter)

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
