import {createApp} from 'vue'
import {createPinia} from 'pinia'
import router from './router'
import VueAxios from "vue-axios"
import _ from 'lodash'
import axios from './utils/axios'
import './assets/styles/app.scss'
import App from './App.vue'

window._ = _;

const app = createApp(App)

// app uses
const pinia = createPinia()
app.use(pinia)

app.use(router)

app.use(VueAxios, axios);
app.config.globalProperties.$axios = axios;

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
}

localStorage.theme = 'light'

app.mount('#app')