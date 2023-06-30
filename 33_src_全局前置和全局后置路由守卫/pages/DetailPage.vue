<template>
  <ul>
    <li>消息编号:{{ id }}</li>
    
    <li>消息标题:{{ title }}</li>
    <!-- <h1>{{ a }},{{ b }}</h1> -->
  </ul>
</template>

<script>
export default {
  name:'DetailPage',
  // props:['a','b'],
  props:['id','title'],
  // computed:{
  //   id(){
  //     return this.$route.params.id
  //   },
  //   title(){
  //     return this.$route.params.title
  //   }
  // },
  mounted(){
    console.log('detail挂载');
  }
}
</script>

<style>

</style>