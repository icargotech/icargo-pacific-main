import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/js/bootstrap.js'
import './assets/main.css'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDYsTSK31ZxJx43JuhWCA2RSWVrgVJHqCk',
  authDomain: 'icargo-pacific-2aa80.firebaseapp.com',
  projectId: 'icargo-pacific-2aa80',
  storageBucket: 'icargo-pacific-2aa80.appspot.com',
  messagingSenderId: '253939566562',
  appId: '1:253939566562:web:2f9a1fa8b3365e0ba55bbb'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
