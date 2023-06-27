<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>放大十倍后：{{ bigSum }}</h1>
    <h1>我在{{  school }} 学习 {{ subject }}</h1>
    <!-- 规定绑定数据类型都为number类型,v-model.number -->
    <select v-model="step">
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
import {mapState} from 'vuex' 
export default {
  name:'CountPage',
  data () {
    return {
      step:1
    }
  },
  computed: {
    // 手写计算属性
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },
    // sum(){
    //   return this.$store.state.sum
    // },
    
    // 借助mapstate生成计算属性，从state中读取数据(对象写法)
    ...mapState({sum:'sum',subject:'subject',school:'school'}),
    // 或者以下这种写法(数组写法)
    // ...mapState(['sum','school','xueke'])

    bigSum(){
      return this.$store.getters.bigSum
    }
  }
  ,
  mounted () {
  },

  methods: {
    add(){
      // 去调action中的add方法
      this.$store.dispatch('add', this.step)
    },
    sub(){
      // 去调action中的add方法
      this.$store.dispatch('actionSub', this.step)
    },
    addOdd(){
      if (this.$store.state.sum%2) {
        this.$store.dispatch('add', this.step)
      }
    },
    addWait(){
        setTimeout(() => {
          
        this.$store.dispatch('add', this.step)
        }, 500);
    }
  }
}
</script>

<style>

</style>