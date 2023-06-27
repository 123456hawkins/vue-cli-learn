<template>
  <div class="container">
    <categoryPage title="美食" :listData="foods">
      <template scope="meishi">
        <ul >
          <li v-for="(item,index) in meishi" :key="index">{{item}}</li>
        </ul>
      </template>
    </categoryPage>
    <categoryPage title="美食" :listData="foods">
      <template scope="meishi">
        <ul >
          <h1 v-for="(item,index) in meishi" :key="index">{{item}}</h1>
        </ul>
      </template>
    </categoryPage>
    <categoryPage title="美食" :listData="foods">
      <template scope="meishi">
        <ul >
          <h3 v-for="(item,index) in meishi" :key="index">{{item}}</h3>
        </ul>
      </template>
    </categoryPage>
    </div>
</template>

<script>
import categoryPage
 from './components/categoryPage.vue';
export default {
  name:'App',
  components: {
    categoryPage
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

</style>