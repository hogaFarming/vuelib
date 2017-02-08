/**
 * 基础UI库
 */
import Button from './button'
import Icon from './icon'
import { Row, Col } from './grid'
import BreadCrumb from './breadcrumb'
import { Dropdown, DropdownMenu, DropdownItem } from './dropdown'
import Table from './table'
import Modal from './modal'

export default {
  install (Vue, options) {
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
  }
}
