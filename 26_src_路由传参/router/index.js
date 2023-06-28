// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import AboutPage from "../pages/AboutPage"
import HomePage from "../pages/HomePage"
import NewsPage from "../pages/NewsPage"

import MessagePage from "../pages/MessagePage"
import DetailPage from "../pages/DetailPage"

export default new VueRouter({
  routes:[
    {
      // 路由命名
      name:'route1',
      path: '/AboutPage',
      component: AboutPage 
    },
    {
      path:'/homePage',
      component:HomePage,
      children:[
        {
          path:'news',
          component:NewsPage
        },
        {
          path:'message',
          component:MessagePage,
          children:[
            {
              path:'detail',
              component:DetailPage
            }
          ]
        },
      ]
    }
  

  ]
})