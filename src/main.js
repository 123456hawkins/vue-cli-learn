//引入Vue
import Vue from "vue";
//引入App
import App from './App';

import '@popperjs/core'; // 添加这一行
import VueRouter from "vue-router";
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'


// /**
//  * 完整引入，会造成资源占用过大
//  */
// // 引入ElementUi组件库
// import ElementUI from "element-ui";
// // 引入elementUi全部样式
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)


/***
 * 按需引入，节省资源
 */ 
import {Button,DatePicker,Select,Carousel,Input,Row,CarouselItem} from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Carousel)
Vue.use(Input)
Vue.use(Row)
Vue.use(CarouselItem);
//关闭Vue的生产提示
Vue.config.productionTip = false;
// 应用vue-router,全局引入,

Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: h => h(App),
});


