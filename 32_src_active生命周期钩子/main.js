//引入Vue
import Vue from "vue";
//引入App
import App from './App';

import router from "./router";

import VueRouter from "vue-router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//关闭Vue的生产提示
Vue.config.productionTip = false;
// 应用vue-router
Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: h => h(App),

    router:router
});


