<template>
  <ul>
    <li>消息编号:{{$route.query.id }}</li>
    
    <li>消息标题:{{$route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name:'DetailPage',
  mounted(){
    console.log('detail挂载');
  }
}
</script>

<style>

</style>