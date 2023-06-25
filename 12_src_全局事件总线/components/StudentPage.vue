<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    学生名称：{{ name }}
    学生性别：{{ sex }}
    <button @click="sendStudentName">把学生名给school组件</button>
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
      
      console.log('emit触发');
      this.$bus.$emit('hello',this.name)
    }
  },
  beforeDestroy(){
    // 销毁事件
    this.$bus.$off('hello')
  }
  
}
</script>

<style>
  .student{
    background-color: aqua;
  }
</style>