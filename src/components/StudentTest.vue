<template>
<!-- 组件的结构 -->
<div class="root">
  <h2>学生名称：{{ name }}</h2>
  <h2>学生年龄：{{ age }}</h2>
</div>
</template>

<script>
// 组件交互
// <!-- 组件暴露 -->
  export default{
    // <!-- 组件名 -->
    name:'StudentTest',
    data () {
      return {
        name:'waefaw',
        age:99
      }
    }
    ,
  methods:{
    
  }

  }
</script>
  
<style>
/* 组件样式 */

</style>