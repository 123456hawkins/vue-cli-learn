<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 通过给父组件绑定一个自定义事件实现子给父传递数据 -->
    <StudentPage v-on:atguigu="getStudentName"/>
    <hr>
    <!-- 传递参数绑定事件 -->
    <SchoolPage :getSchoolName="getSchoolName"/>

    <!-- 使用ref绑定对象传递数据 -->
    <StudentPage ref="student"/>
  </div>
</template>

<script>
import StudentPage from './components/StudentPage.vue'
import SchoolPage from './components/SchoolPage.vue';
export default {
  name:'App',
  components:{StudentPage,SchoolPage},
  data () {
    return {
      msg:'你好啊'
    }
  },
  methods: {
    getSchoolName(name){
      console.log('app收到了学校名:',name);
    },
    getStudentName(name){
      console.log('demo被调用',name);
    }
  },
  mounted () {
    this.$refs.student.$on('atguigu',this.getStudentName)
  }
  

}
</script>

<style>

</style>