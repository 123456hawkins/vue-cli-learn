import Vue from 'vue'
import App from  './App.vue'
Vue.config.productionTip=false

import plugins from './plugins'

// 应用插件
Vue.use(plugins)
new Vue({
  el:'#app',
  render:h=>h(App)
})