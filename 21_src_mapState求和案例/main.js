import Vue from 'vue'
import App from  './App.vue'
Vue.config.productionTip=false
// 引入vue-resource插件
import VueResource from 'vue-resource'

import store from './store/index'

Vue.use(VueResource)

new Vue({

  el:'#app',
  render:h=>h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this//安装全局事件总线
  }
})