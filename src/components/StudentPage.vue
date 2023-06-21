<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    学生名称：{{ name }}
    学生性别：{{ sex }}
    学生年龄：{{ myAge }}
    <button @click="updateAge">点击修改年龄</button>
  </div>
</template>

<script>
export default {
  name:'StudemtPage',
  data () {
    return {
      msg:'ccc',
      myAge:this.age
    }
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // props:['name','sex','age']//简单接收

// 接收的同时对数据进行类型限制，尽可能不要这里面做数据修改
  props:{
    name:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      default:99,//默认值
    },
    sex:{
      type:String,
      required:true,
    }

  }
}
</script>

<style>
  .student{
    background-color: aqua;
  }
</style>