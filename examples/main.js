import { createApp } from 'vue'
import App from './App.vue'


import vueBaobab from '../packages'


const app = createApp(App)
app.use(vueBaobab)
app.mount('#app')
