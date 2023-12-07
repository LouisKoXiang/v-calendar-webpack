import { createApp } from 'vue'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import './assets/vcalendar.css'

createApp(App).use(setupCalendar, {}).component('VCalendar', Calendar).component('VDatePicker', DatePicker).use(store).use(router).mount('#app')
