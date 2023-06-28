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
              name:'xiangqing',
              path:'detail/:id/:title',
              component:DetailPage,
              // props的第一种写法，值为对象，该对象中所有的键值对以props的形式传给detail组件
              // props: {a:1,b:'hello'}

              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由收到的所有params参数，以props的形式传给detail组件
              // props:true

              // props的第三种写法，值为函数
              props($route){
                return {id:$route.params.id,title:$route.params.title}
              }
            }
          ]
        },
      ]
    }
  

  ]
})