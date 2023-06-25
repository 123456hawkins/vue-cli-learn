<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    学生名称：{{ name }}
    学生性别：{{ sex }}
    <button @click="sendStudentName">发送学生姓名给app</button>
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
    }
  }
  
}
</script>

<style>
  .student{
    background-color: aqua;
  }
</style>