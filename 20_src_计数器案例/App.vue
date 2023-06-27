<template>
  <div>
    <CountPage></CountPage>
  </div>
</template>

<script>
import CountPage from './components/CountPage.vue';
export default {
  name:'App',
  components: {
    CountPage
  },
  methods: {
   
  }

  

}
</script>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
  button{
    margin-left: 5px;
  }
</style>