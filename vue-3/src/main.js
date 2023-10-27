import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// plugin install
// one ways two base url set in axios
// import axios from './axios/axios_plugin'
// window.baseurl = 'http://127.0.0.1:8000/api'

import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

const app = createApp(App)
app.config.globalProperties.axios = { ...axiosInstance }
  
// const app = createApp(App)
// app.use(axios)
app.use(router)
 
 
app.mount('#app')
