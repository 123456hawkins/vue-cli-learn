<template>
  <div>
    <button @click="isShow=!isShow" >显示/隐藏</button>
    <!-- transition里边只能放一个元素，想要放多个元素，使用transition-group -->
    <transition-group 
    appear
    name="animate__animated animate__bounce" 
    enter-active-class="animate__rubberBand" 
    leave-active-class="animate__backOutDown" >
      <h1 v-show="!isShow"  key="1">hello</h1>
      <h1 v-show="isShow"  key="2">hello</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name:'FirstTest',
  data () {
    return {
      isShow:true
    }
  }

}
</script>

<style Scoped>
  h1{
    background-color: orange;
  }
 
  

  
</style>