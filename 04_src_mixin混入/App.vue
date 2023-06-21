<template>
  <div>
    <StudentPage/>
    <hr></hr>
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
  
  }
  

}
</script>

<style>

</style>