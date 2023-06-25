import Vue from 'vue'
import App from  './App.vue'
Vue.config.productionTip=false

// Vue.prototype.x={a:1,b:2}



new Vue({
  el:'#app',
  // render函数会返回一个描述组件在页面上呈现内容的虚拟节点树（VNode tree），这棵树最终会被转化为实际的DOM元素并插入到页面中。
  render:h=>h(App),
  beforeCreate(){
    Vue.prototype.$bus=this//安装全局事件总线
  }
})