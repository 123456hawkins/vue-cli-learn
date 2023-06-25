<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    学生名称：{{ name }}
    学生性别：{{ sex }}
    <button @click="sendStudentName">发送学生姓名给app</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="unitDestory">点我销毁组件</button>
  </div>
</template>

<script>
import {hunhe} from '../mixin'
export default {
  name:'StudemtPage',
  data () {
    return {
      msg:'ccc',
      name:'hawkins',
      sex:'男'
    }
  },
  mixins:[hunhe],
  methods: {
    sendStudentName(){
      // 触发student组件实例身上的事件
      this.$emit('atguigu',this.name)
    },
    unbind(){
      // 解绑atguigu事件
      this.$off('atguigu')//解绑一个自定义事件
      // this.$off(['atguigu','demo'])//解绑多个事件
      // this.$off()//解绑所有事件

    },
    unitDestory(){
      this.$destroy()//销毁当前student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
    }
  }
  
}
</script>

<style>
  .student{
    background-color: aqua;
  }
</style>