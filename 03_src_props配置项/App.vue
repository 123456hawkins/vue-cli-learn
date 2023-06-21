<template>
  <div>
    <StudentPage name="awefwa" sex="wfawe" age="19"/>
    <StudentPage name="awefwa2" sex="wfawe2" age="20+1"/>
    <!-- 加冒号转换为表达式 ，可以成功运算，：等价于v-bind-->
    <StudentPage name="awefwa3" sex="wfawe3" :age="21+1"/>
  </div>
</template>

<script>
import StudentPage from './components/StudentPage.vue'
export default {
  name:'App',
  components:{StudentPage},
  methods: {
  
  }
  

}
</script>

<style>

</style>