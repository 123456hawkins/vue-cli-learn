<template>
  <div class="container">
    <searchPage></searchPage>
    <listPage></listPage>
  </div>
</template>

<script>
import listPage from './components/listPage.vue'
import searchPage from './components/searchPage.vue';
export default {
  name:'App',
  components: {
    listPage,searchPage
  },
  methods: {
   
  }

  

}
</script>

<style>


</style>