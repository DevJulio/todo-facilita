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
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faCheck, faCircleCheck, faChartColumn, faGears, faChevronRight, faMagnifyingGlass])

const app = createApp(App).component('fa', FontAwesomeIcon)

app.use(router)

app.mount('#app')
