// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import AboutPage from "../pages/AboutPage"
import HomePage from "../pages/HomePage"
import NewsPage from "../pages/NewsPage"

import MessagePage from "../pages/MessagePage"
import DetailPage from "../pages/DetailPage"

const router= new VueRouter({
  // 不带＃号
  mode:'history',
  routes:[
    {
      // 路由命名
      name:'guanyu',
      path: '/AboutPage',
      component: AboutPage ,
      // 是否被校验
      meta: { title:'关于'}
    },
    {
      name:'zhuye',
      path:'/homePage',
      component:HomePage,
      meta: { title:'主页' },
      children:[
        {
          name:'xinwen',
          path:'news',
          component:NewsPage,
          meta: { isAuth:true,title:'新闻' },

          // 独享路由守卫,没有后置路由守卫
          beforeEnter:(to,from,next)=>{
            if (to.meta.isAuth===true) {
              if (localStorage.getItem('school')==='atguigu') {
                    // 放行
                    next()
                  }else{
                    alert('学校名不对,无权查看')
                  }
            }else{
              next()
            }
          }
        },
        {
          name:'xiaoxi',
          path:'message',
          component:MessagePage,
          meta: { isAuth:true,title:'消息' },
          children:[
            {
              name:'xiangqing',
              path:'detail/:id/:title',
              meta: { title:'详情' },
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


// // 全局前置路由守卫
// // 路由每次切换调用的函数和初始化的时候调用
// router.beforeEach((to,from,next)=>{
//   console.log('@');
//   console.log(to,from,'前置路由首位');
//   // 第一种校验
//   // if (to.name==='xinwen' || to.name==='xinagqing') {
//   //   if (localStorage.getItem('school')==='atguigu') {
//   //     // 放行
//   //     next()
//   //   }else{
//   //     alert('学校名不对,无权查看')
//   //   }
//   // }else{
//   //   next()
//   // }
//   // 第二种校验
  
//   if (to.meta.isAuth===true) {
//     if (localStorage.getItem('school')==='atguigu') {
//           // 放行
//           next()
//         }else{
//           alert('学校名不对,无权查看')
//         }
//   }else{
//     next()
//   }

// })

// // 全局后置路由守卫，每次路由切换之后被调用,后置路由守卫没有next
// router.afterEach((to,from)=>{
//   // 主页标题随着路由切换改变
//     document.title=to.meta.title
//     console.log(to,from,'后置路由守卫');
// })
export default router