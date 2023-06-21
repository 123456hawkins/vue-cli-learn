<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    学生名称：{{ name }}
    学生性别：{{ sex }}
    <button @click="showName">显示名称</button>
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
  mixins:[hunhe]
  
}
</script>

<style>
  .student{
    background-color: aqua;
  }
</style>