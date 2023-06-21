<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方dom元素</button>
    <SchoolPage></SchoolPage>
    <SchoolPage></SchoolPage>
    <SchoolPage></SchoolPage>
  </div>
</template>

<script>
import SchoolPage from './components/SchoolPage.vue'
export default {
  name:'App',
  components:{SchoolPage},
  methods: {
    showDom(){
      console.log(this.$refs.title);
    }
  },
  data () {
    return {
      msg:'CAONIMA'
    }
  }

}
</script>

<style>

</style>