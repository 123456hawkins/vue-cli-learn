<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    学生名称：{{ name | myslice }}
    学生性别：{{ sex }}
  </div>
</template>

<script>
export default {
  name:'StudemtPage',
  data () {
    return {
      msg:'ccc',
      name:'hawkins',
      sex:'男'
    }
  }
  
}
</script>

<style>
  .student{
    background-color: aqua;
  }
</style>