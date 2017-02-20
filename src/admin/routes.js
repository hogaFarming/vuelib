import EntityList from './pages/entity/entity-list'
import EntityDetail from './pages/entity/entity-detail'
import EntityTypes from './pages/entity/entity-types'
import EntityFields from './pages/entity/entity-fields'
import EntityFieldsProps from './pages/entity/entity-fields-props'
import EntityMenus from './pages/entity/entity-menus'
import EntityTabs from './pages/entity/entity-tabs'

/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable no-multi-spaces */
const routes = [
  { path: '/entity', component: EntityList },
  {
    path: '/entity/:id',
    component: EntityDetail,
    children: [
      { path: 'types', component: EntityTypes },
      { path: 'fields', component: EntityFields },
      { path: 'props', component: EntityFieldsProps },
      { path: 'menus', component: EntityMenus },
      { path: 'tabs', component: EntityTabs }
    ]
  },
  { path: '/data-source',   component: EntityList }
]

export default routes
