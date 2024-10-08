import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faCircleCheck,
  faChartColumn,
  faGears,
  faChevronRight,
  faMagnifyingGlass,
  faEllipsisVertical,
  faCircle,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'

library.add([
  faCheck,
  faCircleCheck,
  faChartColumn,
  faGears,
  faChevronRight,
  faMagnifyingGlass,
  faEllipsisVertical,
  faCircle,
  faTrashCan
])

const app = createApp(App).use(store).component('fa', FontAwesomeIcon)

app.use(router)

app.mount('#app')
