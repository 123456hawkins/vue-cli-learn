// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import AboutPage from "../pages/AboutPage"
import HomePage from "../pages/HomePage"
export default new VueRouter({
  routes:[
    {
      path: '/AboutPage',
      component: AboutPage 
    },
    {
      path:'/homePage',
      component:HomePage
    }
  

  ]
})