<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input  type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="getUser">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name:'searchPage',
  data () {
    return {
      keyWord:''
    }
  },
  methods: {
    getUser(){
      // 请求前更新list数据
      this.$bus.$emit('updateListData',{isFirst:true,isLoading:false,errMsg:'',users:[]})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response =>{
          console.log('success',response.data.items)
          this.$bus.$emit('updateListData',{isFirst:false,isLoading:false,errMsg:'',users:response.data.items})
        },
        error =>{
          console.log('error',error.message)
          this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:[]})
        }
      )
        
      
    }
  }
}
</script>

<style>

</style>