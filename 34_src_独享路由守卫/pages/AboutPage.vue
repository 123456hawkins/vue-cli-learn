<template>
  <div>
    <h1>about</h1>
  </div>
</template>

<script>
export default {
  name:'HomePage',
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to,from,next){
    if (to.meta.isAuth===true) {
    if (localStorage.getItem('school')==='atguigu') {
          // 放行
          next()
        }else{
          alert('学校名不对,无权查看')
        }
  }else{
    next()
  }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next){
    next()

  }
}
</script>

<style>

</style>