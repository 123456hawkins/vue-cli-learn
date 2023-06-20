<template>
<!-- 组件的结构 -->
<div class="root">
  <h2>学校名称：{{ name }}</h2>
</div>
</template>

<script>
// 组件交互
// <!-- 组件暴露 -->
  export default{
    // <!-- 组件名 -->
    name:'SchoolTest',
    data () {
      return {
        name:'waefaw'
      }
    }
    ,
  methods:{

  }

  }
</script>
  
<style>
/* 组件样式 */
.root{
  background: green;
}
</style>