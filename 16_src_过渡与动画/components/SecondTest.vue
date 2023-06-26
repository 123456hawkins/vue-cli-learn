<template>
  <div>
    <button @click="isShow=!isShow" >显示/隐藏</button>
    <!-- transition里边只能放一个元素，想要放多个元素，使用transition-group -->
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" class="go" key="1">hello</h1>
      <h1 v-show="isShow" class="go" key="2">hello</h1>
    </transition-group>
  </div>
</template>

<script>
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
    transition: 1s linear;
  }
  /* 进入的起点 */
  .hello-enter{
    transform: translateX(-100%)

  }
  /* 进入的终点 */
  .hello-enter-to{
    transform: translateX(0);
  }
  /* 离开的起点 */
  .hello-leave{
    transform: translateX(-100%);
  }
  /* 离开的终点 */
  .hello-leave-to{
    transform: translateX(0);
  }
  
  

  
</style>