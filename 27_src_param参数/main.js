//引入Vue
import Vue from "vue";
//引入App
import App from './App';

import router from "./router";

import VueRouter from "vue-router";
//关闭Vue的生产提示
Vue.config.productionTip = false;
// 应用vue-router
Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: h => h(App),

    router:router
});


