<template>
  <ul>
    <li :style="{opacity}">欢迎学习</li>
    <li>news001 <input></li>
    <li>news002 <input></li>
    <li>news003 <input></li>
  </ul>
</template>

<script>
export default {
  name:'NewsPage',
  data () {
    return {
      opacity:1
    }
  },
  // 当你看到时就是被激活
  activated () {
    this.timer=setInterval(()=>{
      this.opacity-=0.1
      if (this.opacity<=0) {
        this.opacity=1
      }
    },16)
  },
  // 介绍两个特殊的生命周期函数
  // 失活
  deactivated(){
    clearInterval(this.timer)
  },
  mounted(){
    
  },
  beforeDestroy(){
    console.log('即将被被销毁了');
  }
}
</script>

<style>

</style>