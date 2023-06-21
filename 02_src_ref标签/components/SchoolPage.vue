<template>
  <div class="school">
    学校名称：{{ name }}
    学校地址：{{ address }}
  </div>
</template>

<script>
export default {
  name:'SchoolPage',
  data () {
    return {
      name:'hawkins',
      address:'wefawefwef'
    }
  }
}
</script>

<style>
  .school{
    background-color: aqua;
  }
</style>