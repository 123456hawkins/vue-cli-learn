<template>
  <div class="school">
    学校名称：{{ name }}
    学校地址：{{ address }}
    <button @click="sendSchoolName">把名字给app</button>
  </div>
</template>

<script>
import {hunhe} from '../mixin'
export default {
  name:'SchoolPage',
  props:['getSchoolName'],
  data () {
    return {
      name:'hawkins',
      address:'wefawefwef'
    }
  },
  mixins:[hunhe],
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
  
}
</script>

<style>
  .school{
    background-color: aqua;
  }
</style>