<template>
  <div >
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCars">获取学生信息</button>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name:'App',
  methods: {
    getStudent(){
      axios.get('http://localhost:8080/atguigu/students').then(
        response => {
          console.log('请求成功',response.data);
        },
        error => {
          console.log('请求失败',error);
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/cars').then(
        response => {
          console.log('请求成功',response.data);
        },
        error => {
          console.log('请求失败',error);
        }
      )
    }
  }

  

}
</script>

<style>


</style>