<template>
  <div>
    <SchoolTest></SchoolTest>
    <StudentTest></StudentTest>
  </div>
  
</template>

<script>
import SchoolTest from './components/SchoolTest.vue'
import StudentTest from './components/StudentTest.vue'
export default {
  components: { SchoolTest, StudentTest },
  name:'App'
}
</script>

<style>

</style>