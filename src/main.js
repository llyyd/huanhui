import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 全局公共样式
import './assets/reset.scss'

import store from './store'
import UILib from './components/ui-lib/index.js'

const app = createApp(App)
// 路由
app.use(router)
app.use(store)
// 数字动画
app.use(UILib)
app.mount('#app')


