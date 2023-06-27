<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    
    <!-- 定义一个插槽，（挖个坑，等组件的使用者进行填充） -->
    <slot :meishi="foods">我是一个默认插槽，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name:'categoryPage',
  props:['listData','title'],
  data () {
    return {
      foods:['1','782','3','4','5'],
      games:['1','2','3','4','5'],
      films:['1','2','3','4','5']
    }
  }
}
</script>

<style>
  .category{
    background-color: yellow;
    width: 200px;
    height: 300px;
  }

</style>