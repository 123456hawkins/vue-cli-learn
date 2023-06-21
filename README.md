# 笔记

## 一.ref 标签名

### 1.被用来给元素或子组件注册引用信息（id 替代者）

### 2.应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对(vc)

### 3.使用方法：

     打标识：'<h1 ref="xxx"></h1>'或者'<School ref="xxx"></School>
     获取：this.$refs.xxx

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

### 四.插件

用于增强 vue，本质包含 install 方法的一个对象，install 的第一个参数是 vue，第二个以后的参数是插件使用者传递的数据

### 五.scoped 关键字

scoped 关键字代表样式仅在该页面生效

    <style>
    .school{
      background-color: aqua;
    }
    </style>
