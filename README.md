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



