
# Laravel 10 and vue js 3 seperated project with setup axios base url
I will give you a very simple example of Laravel 10 and vue js 3 seperated project with setup axios base url


## Installation


**[Step - 1]** **Clone Project:**<br/>
 
 ```bash
git clone https://github.com/Minhazulmin/laravel10-vue-js-3-separated-project-axios-global-url-setup.git
```
**[Step - 2]** **Install NPM on vue js 3 project:** 
```bash
 npm i
```
**[Step - 3]** **Install composer on laravel 10 project:** <br/> 
```bash
 composer install
```
**[Step - 4]** **Copy url and past on the app.js in vue project file:** <br/> 

```bash
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

```
**its setup done and by default it's set url when axios request http://127.0.0.1:8000/api**


## Authors

- [@minhazulmin](https://www.github.com/minhazulmin)

