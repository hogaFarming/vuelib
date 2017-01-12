import Home from './pages/home/home'

import CustomerList from './pages/customer/customer-list.vue'

/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable no-multi-spaces */
const routes = [
  { path: '/',           component: Home         },
  { path: '/customer',   component: CustomerList }
]

export default routes
