# 笔记

## 一.ref 标签名

### 1.被用来给元素或子组件注册引用信息（id 替代者）

### 2.应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对(vc)

### 3.使用方法：

     打标识：'<h1 ref="xxx"></h1>'或者'<School ref="xxx"></School>
     获取：this.$refs.xxx
---
## 2.配置项 props

### 1.功能：让组件接收外部传过来的数据

（1）传递数据：

       <StudentPage name="awefwa" sex="wfawe" age="19"/>

（2）接收数据

      props:['name','sex','age']//简单接收

    或者

      props:{
    name:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      default:99,//默认值
    },
    sex:{
      type:String,
      required:true,
    }
    }

### 2.限制：props 是只读的，尽量不要做修改,如果业务确实需要修改，请复制 props 的内容到 data 中然后再去修改
---
## 三.mixin 混入

### 1.功能：可以把多个组件共用的配置提取成一个混入对象

### 2.使用方法：

1.定义混入：

    {
      data(){....},
      method(){.....}
    }

2.使用混入：

（1）全局混入

    Vue.mixin(xxx)

（2）局部混入

    mixins:['xxx']
---
## 四.插件

用于增强 vue，本质包含 install 方法的一个对象，install 的第一个参数是 vue，第二个以后的参数是插件使用者传递的数据

---

## 五.scoped 关键字

scoped 关键字代表样式仅在该页面生效

    <style>
    .school{
      background-color: aqua;
    }
    </style>

---

## 六.案例总结：TodoList案例

#### 1.组件化编码流程：

(1)拆分静态组件：组件按照功能点拆分，命名不要与html冲突

(2)实现动态组件，要考虑数据是一个组件在用还是一些组件在用，一个组件在用放在自身即可，一些组件在用要放在它们共同的父组件上(状态提升)

(3)实现交互：从绑定事件开始

#### 2.props适用于：

(1)父组件==>子组件 通信
(2)子组件==>父组件 通信

使用v-model切记不能绑定props传过来的值，因为props是不可修改的

props传过来若是对象类型的值，修改对象中的属性时vue不会报错，但不推荐

### 组件的自定义事件

1.是一种通信方式，适用于:子组件====>父组件

2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)

3.绑定自定义事件：

- 第一种方式，在父组件中：
  
  `<Demo @atguigu="test"/> `或者`<Demo v-on:atguigu="test"/>`
- 第二种方式，在父组件中：

  `<Demo ref="demo"/>`
  
  `......`

  `mounted(){this.$refs.xxx.$on('atguigu',this.test)}`

- 若想让事件只触发一次，可以使用once修饰符或者$once方法

4.触发自定义事件：`this.$emit('atguigu',<数据>)`

5.解绑自定义事件：`this.$off('atguigu')`

6.组件上也可以绑定原生DOM事件，需要使用native修饰符

7.注意：通过`this.$refs.xxx.$on('atguigu',<回调方法>)`绑定自定义事件时，回调要么配置在methods中，要么使用箭头函数，否则this指向会出问题

---

### 七.全局事件总线(GlobalEventBus)(父给子传使用props，兄弟之间传用bus)

1.一种组件间通信的方式，适用于任意组件通信

2.安装全局事件总线

    new Vue({
      .........
      beforeCreate(){
        Vue.prototype.$bus=this
      },
      ........
    })

3.使用事件总线：

接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身

    methods(){
      demo(data){.....}
    }   
    .......
    mounted(){
      this.$bus.$on('xxxx',this.demo)
    }

提供数据

    this.$bus.$emit('xxxx',数据)


4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

---

## 八.消息订阅与发布(pubsub)

1.一种组件间通信的方式，适用于任意组件间通信

2.使用步骤：

  a.安装pubsub：

    npm i pubsub-js

  b.引入：

    import pubsub from 'pubsub-js'

3.接收数据：A组件想要接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身

    methods(){
      demo(data){.....}
    }
    mounted(){
      this.pid=pubsub.subscribe('xxx',this.demo)//订阅消息
    }

4.提供数据：

    pubsub.publish('xxx',数据)

5.最好在beforeDestroy钩子中，用

    PubSub.unsubscribe(pid)
    
去取消订阅

## 九.nextTick

  1.语法：

    this.$nextTick(回调函数)
  
  2.作用：在下一次DOM更新结束后执行其指定的回调

  3.什么时候用：当改变更新后，要基于更新的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

## 十.VUE封装的过渡与动画

### 1.作用：
在插入、更新或移动DOM元素时，在适合的时候给元素添加样式类名

### 2.相关写法：

进入样式：

    v-enter:进入起点
    v-enter-active：进入过程中
    v-enter-to:进入的终点

进入样式：

    v-leave:离开的起点
    v-leave-active:离开过程中
    v-leave-to:离开的终点

### 3.使用`<transition>`包裹过渡元素，并配置name信息

    <transition name="hello">
      <h1 v-show="isShow">你好！</h1>
    </transition>

### 4.备注

如果有多个元素需要过渡，则需要使用`<transition-group>`，且每个元素都要指定`key`值


## 十一.脚手架配置代理

方法一(只能配置一个代理)：

    module.exports = {
      devServer: {
        proxy: 'http://localhost:4000'
      }
    }

方法二(方便配置多个代理)：

        module.exports = {
      devServer: {
        proxy: {
          '/api': { //匹配所偶以/api开头的请求路径
            target: '<url>',//代理目标的基础路径
            ws: true,
            changeOrigin: true
          },
          '/foo': {
            target: '<other_url>'
          }
        }
      }
    }
    //changOrigin中的true代表请求头的host为localhost:5000，false代表host端口为8000


  ## 十二.插槽

  1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信方式，适用于父组件===>子组件

  2.分类：
  
  a>默认插槽

      父组件中:

      <Category>
        <div>html结构</div>
      </Category>

      子组件中：

      <template>
        <div>
          <slot>插槽默认内容</slot>
        </div>
      </template>

  b>具名插槽

    父组件中:

      <Category>
        <template slot="center">
          <div>html结构</div>
        </template>
        <template slot="footer">
          <div>html结构</div>
        </template>
      </Category>

      子组件中：

      <template>
        <div>
          <slot name="center">插槽默认内容</slot>
          <slot name="footer">插槽默认内容</slot>
        </div>
      </template>

  c>作用域插槽

  数据在组件自身，但是数据生成的结构需要有父组件来决定

    子组件：
    <div class="category">
      <h3>{{title}}分类</h3>
      
      <!-- 定义一个插槽，（挖个坑，等组件的使用者进行填充） -->
      <slot :meishi="foods">我是一个默认插槽，当使用者没有传递具体结构时，我会出现</slot>
    </div>

    父组件：

    <categoryPage title="美食" :listData="foods">
      <template scope="meishi">
        <ul >
          <li v-for="(item,index) in meishi" :key="index">{{item}}</li>
        </ul>
      </template>
    </categoryPage>
    <categoryPage title="美食" :listData="foods">
      <template scope="meishi">
        <ul >
          <h1 v-for="(item,index) in meishi" :key="index">{{item}}</h1>
        </ul>
      </template>
    </categoryPage>
    <categoryPage title="美食" :listData="foods">
      <template scope="meishi">
        <ul >
          <h3 v-for="(item,index) in meishi" :key="index">{{item}}</h3>
        </ul>
      </template>
    </categoryPage>


## 十三.Vuex

### 1.概念

​		在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

### 2.何时使用？

​		多个组件需要共享数据时

### 3.搭建vuex环境

1. 创建文件：```src/store/index.js```

   ```js
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //应用Vuex插件
   Vue.use(Vuex)
   
   //准备actions对象——响应组件中用户的动作
   const actions = {}
   //准备mutations对象——修改state中的数据
   const mutations = {}
   //准备state对象——保存具体的数据
   const state = {}
   
   //创建并暴露store
   export default new Vuex.Store({
   	actions,
   	mutations,
   	state
   })
   ```

2. 在```main.js```中创建vm时传入```store```配置项

   ```js
   ......
   //引入store
   import store from './store'
   ......
   
   //创建vm
   new Vue({
   	el:'#app',
   	render: h => h(App),
   	store
   })
   ```

###    4.基本使用

1. 初始化数据、配置```actions```、配置```mutations```，操作文件```store.js```

   ```js
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //引用Vuex
   Vue.use(Vuex)
   
   const actions = {
       //响应组件中加的动作
   	jia(context,value){
   		// console.log('actions中的jia被调用了',miniStore,value)
   		context.commit('JIA',value)
   	},
   }
   
   const mutations = {
       //执行加
   	JIA(state,value){
   		// console.log('mutations中的JIA被调用了',state,value)
   		state.sum += value
   	}
   }
   
   //初始化数据
   const state = {
      sum:0
   }
   
   //创建并暴露store
   export default new Vuex.Store({
   	actions,
   	mutations,
   	state,
   })
   ```

2. 组件中读取vuex中的数据：```$store.state.sum```

3. 组件中修改vuex中的数据：```$store.dispatch('action中的方法名',数据)``` 或 ```$store.commit('mutations中的方法名',数据)```

   >  备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写```dispatch```，直接编写```commit```


### 5.getters的使用

1. 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。

2. 在```store.js```中追加```getters```配置

   ```js
   ......
   
   const getters = {
       bigSum(state){
           return state.sum * 10
       }
   }
   
   //创建并暴露store
   export default new Vuex.Store({
       ......
       getters
   })
   ```

3. 组件中读取数据：```$store.getters.bigSum```

### 6.四个map方法的使用

1. <strong>mapState方法：</strong>用于帮助我们映射```state```中的数据为计算属性

   ```js
   computed: {
       //借助mapState生成计算属性：sum、school、subject（对象写法）
        ...mapState({sum:'sum',school:'school',subject:'subject'}),
            
       //借助mapState生成计算属性：sum、school、subject（数组写法）
       ...mapState(['sum','school','subject']),
   },
   ```

2. <strong>mapGetters方法：</strong>用于帮助我们映射```getters```中的数据为计算属性

   ```js
   computed: {
       //借助mapGetters生成计算属性：bigSum（对象写法）
       ...mapGetters({bigSum:'bigSum'}),
   
       //借助mapGetters生成计算属性：bigSum（数组写法）
       ...mapGetters(['bigSum'])
   },
   ```

4. <strong>mapMutations方法：</strong>用于帮助我们生成与```mutations```对话的方法，即：包含```$store.commit(xxx)```的函数

   ```js
   methods:{
       //靠mapActions生成：increment、decrement（对象形式）
       ...mapMutations({increment:'JIA',decrement:'JIAN'}),
       
       //靠mapMutations生成：JIA、JIAN（对象形式）
       ...mapMutations(['JIA','JIAN']),
   }
   ```

> 备注：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。

### 7.模块化+命名空间

1. 目的：让代码更好维护，让多种数据分类更加明确。

2. 修改```store.js```

   ```javascript
   const countAbout = {
     namespaced:true,//开启命名空间
     state:{x:1},
     mutations: { ... },
     actions: { ... },
     getters: {
       bigSum(state){
          return state.sum * 10
       }
     }
   }
   
   const personAbout = {
     namespaced:true,//开启命名空间
     state:{ ... },
     mutations: { ... },
     actions: { ... }
   }
   
   const store = new Vuex.Store({
     modules: {
       countAbout,
       personAbout
     }
   })
   ```

3. 开启命名空间后，组件中读取state数据：

   ```js
   //方式一：自己直接读取
   this.$store.state.personAbout.list
   //方式二：借助mapState读取：
   ...mapState('countAbout',['sum','school','subject']),
   ```

4. 开启命名空间后，组件中读取getters数据：

   ```js
   //方式一：自己直接读取
   this.$store.getters['personAbout/firstPersonName']
   //方式二：借助mapGetters读取：
   ...mapGetters('countAbout',['bigSum'])
   ```

5. 开启命名空间后，组件中调用dispatch

   ```js
   //方式一：自己直接dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   //方式二：借助mapActions：
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```

6. 开启命名空间后，组件中调用commit

   ```js
   //方式一：自己直接commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   //方式二：借助mapMutations：
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
   ```

## 十二.路由

1. 理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。
2. 前端路由：key是路径，value是组件。

### 1.基本使用

1. 安装vue-router，命令：```npm i vue-router```

2. 应用插件：```Vue.use(VueRouter)```

3. 编写router配置项:

   ```js
   //引入VueRouter
   import VueRouter from 'vue-router'
   //引入Luyou 组件
   import About from '../components/About'
   import Home from '../components/Home'
   
   //创建router实例对象，去管理一组一组的路由规则
   const router = new VueRouter({
   	routes:[
   		{
   			path:'/about',
   			component:About
   		},
   		{
   			path:'/home',
   			component:Home
   		}
   	]
   })
   
   //暴露router
   export default router
   ```

4. 实现切换（active-class可配置高亮样式）

   ```vue
   <router-link active-class="active" to="/about">About</router-link>
   ```

5. 指定展示位置

   ```vue
   <router-view></router-view>
   ```

### 2.几个注意点

1.路由组件通常放在pages文件夹，一般组件通常存放在components文件夹。

2.通过切换，“隐藏”了路由组件，默认是被销毁的，需要的时候再去挂载

3.每个组件都有自己的`route`属性，里面存储着自己的路由信息

4.整个应用只有一个router，可以通过组件的`$router`属性获取到

### 3.多级路由（多级路由）

1. 配置路由规则，使用children配置项：

   ```js
   routes:[
   	{
   		path:'/about',
   		component:About,
   	},
   	{
   		path:'/home',
   		component:Home,
   		children:[ //通过children配置子级路由
   			{
   				path:'news', //此处一定不要写：/news
   				component:News
   			},
   			{
   				path:'message',//此处一定不要写：/message
   				component:Message
   			}
   		]
   	}
   ]
   ```

2. 跳转（要写完整路径）：

   ```vue
   <router-link to="/home/news">News</router-link>
   ```

### 4.路由的query参数

1. 传递参数

   ```vue
   <!-- 跳转并携带query参数，to的字符串写法 -->
   <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
   				
   <!-- 跳转并携带query参数，to的对象写法 -->
   <router-link 
   	:to="{
   		path:'/home/message/detail',
   		query:{
   		   id:666,
               title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

2. 接收参数：

   ```js
   $route.query.id
   $route.query.title
   ```

### 5.命名路由

1. 作用：可以简化路由的跳转。

2. 如何使用

   1. 给路由命名：

      ```js
      {
      	path:'/demo',
      	component:Demo,
      	children:[
      		{
      			path:'test',
      			component:Test,
      			children:[
      				{
                            name:'hello' //给路由命名
      					path:'welcome',
      					component:Hello,
      				}
      			]
      		}
      	]
      }
      ```

   2. 简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link 
      	:to="{
      		name:'hello',
      		query:{
      		   id:666,
                  title:'你好'
      		}
      	}"
      >跳转</router-link>
      ```

### 6.路由的params参数

1. 配置路由，声明接收params参数

   ```js
   {
   	path:'/home',
   	component:Home,
   	children:[
   		{
   			path:'news',
   			component:News
   		},
   		{
   			component:Message,
   			children:[
   				{
   					name:'xiangqing',
   					path:'detail/:id/:title', //使用占位符声明接收params参数
   					component:Detail
   				}
   			]
   		}
   	]
   }
   ```

2. 传递参数

   ```vue
   <!-- 跳转并携带params参数，to的字符串写法 -->
   <router-link :to="/home/message/detail/666/你好">跳转</router-link>
   				
   <!-- 跳转并携带params参数，to的对象写法 -->
   <router-link 
   	:to="{
   		name:'xiangqing',
   		params:{
   		   id:666,
               title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

   > 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3. 接收参数：

   ```js
   $route.params.id
   $route.params.title
   ```

### 7.路由的props配置

​	作用：让路由组件更方便的收到参数

```js
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

### 8.```<router-link>```的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
3. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```
