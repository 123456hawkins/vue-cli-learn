<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <ul >
      <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul>
    <!-- 定义一个插槽，（挖个坑，等组件的使用者进行填充） -->
    <slot name="center">我是一个中心默认值，当使用者没有传递具体结构时，我会出现</slot>
    <br>
    <slot name="footer">我是一个底部默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name:'categoryPage',
  props:['listData','title']
}
</script>

<style>
  .category{
    background-color: yellow;
    width: 200px;
    height: 300px;
  }

</style>