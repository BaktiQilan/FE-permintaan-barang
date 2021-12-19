import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from "vue-select"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'vue-select/dist/vue-select.css';

//createApp(App).mount('#app')
const app = createApp(App)
app.component('v-select', vSelect)
app.use(router)
app.mount('#app')