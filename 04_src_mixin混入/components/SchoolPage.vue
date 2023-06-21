<template>
  <div class="school">
    学校名称：{{ name }}
    学校地址：{{ address }}
    <button @click="showName">显示名称</button>
  </div>
</template>

<script>
import {hunhe} from '../mixin'
export default {
  name:'SchoolPage',
  data () {
    return {
      name:'hawkins',
      address:'wefawefwef'
    }
  },
  mixins:[hunhe]
  
}
</script>

<style>
  .school{
    background-color: aqua;
  }
</style>