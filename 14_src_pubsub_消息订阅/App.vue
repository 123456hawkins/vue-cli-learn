<template>
  <div>
    <StudentPage/>
    <hr>
    <SchoolPage/>
  </div>
</template>

<script>
import StudentPage from './components/StudentPage.vue'
import SchoolPage from './components/SchoolPage.vue';
export default {
  name:'App',
  components:{StudentPage,SchoolPage},
  methods: {
  
  },
  mounted(){
    console.log('SchoolPage',this.x);
  }
  

}
</script>

<style>

</style>