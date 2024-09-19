import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Adicionando os ícones da fa
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faCheck, faCircleCheck])

const app = createApp(App).component('fa', FontAwesomeIcon)

app.use(router)

app.mount('#app')
