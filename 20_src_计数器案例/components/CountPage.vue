<template>
  <div>
    <h1>当前求和为：{{ count }}</h1>
    <!-- 规定绑定数据类型都为number类型 -->
    <select v-model.number="step">
      <!-- 加上冒号解决数值类型不正确问题 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addOdd">和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name:'CountPage',
  data () {
    return {
      count:0,
      step:1
    }
  },
  methods: {
    add(){
      this.count+=this.step
    },
    sub(){
      this.count-=this.step
    },
    addOdd(){
      if (this.count%2 ) {
        this.count+=this.step
      }
    },
    addWait(){
        setTimeout(() => {
        this.count+=this.step
        }, 500);
    }
  }
}
</script>

<style>

</style>