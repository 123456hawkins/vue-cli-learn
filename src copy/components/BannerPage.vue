<template>
  <div>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
  </div>
</template>

<script>
export default {
  name:'BannerPage',
  // 借助路由器操作历史记录
  methods: {
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    test(num){
      // 浏览器记录往前走num步
      this.$router.go(num)
    }
  }
}
</script>

<style>

</style>