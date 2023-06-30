//引入Vue
import Vue from "vue";
//引入App
import App from './App';

import router from "./router";
import '@popperjs/core'; // 添加这一行
import VueRouter from "vue-router";
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'

//关闭Vue的生产提示
Vue.config.productionTip = false;
// 应用vue-router
Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: h => h(App),

    router:router
});


