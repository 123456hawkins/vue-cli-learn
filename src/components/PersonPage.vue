<template>
   <div>
     <h1>人员列表</h1>
     <h2 style="color:skyblue;">Count组件求和为:{{ sum }}</h2>
     <input type="text" placeholder="请输入名字" v-model="name" />
     
     <button @click="add">添加</button>
     <button @click="addPersonWang">添加一个姓王的人</button>
     
     <button @click="addPersonServer">添加一个api请求的人</button>
     <ul>
       <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
     </ul>
     
     <h2>第一个人员名称{{ firstPersonName }}</h2>
   </div>
</template>

<script>
// import { mapState } from 'vuex';
import {nanoid} from "nanoid";
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: "PersonPage",
  data(){
    return {
      name: '',
    }
  },
  methods:{
     add(){
      const perObj = {
         id: nanoid(),
         name: this.name,
       }
       console.log(perObj);
       this.name = '';
       this.$store.commit('personAbout/ADD_PERSON', perObj);
     },
     addPersonWang(){
      const perObj = {
         id: nanoid(),
         name: this.name,
       }
       console.log(perObj);
       this.name = '';
      //  dispatch联系Action,commit联系mutation
       this.$store.dispatch('personAbout/addPersonWang', perObj);
     },
     addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
     }
  },
  computed:{
    ...mapState('personAbout',['personList']),
    ...mapState('countAbout',['sum']),
    ...mapGetters('personAbout',['firstPersonName']),
    // personList(){
    //   return this.$store.state.personList;
    // },
    // sum(){
    //   return this.$store.state.sum;
    // }
  },
}
</script>

<style scoped>
   button{
     margin-left: 5px;
   }
   ul{
     margin-top: 5px;
   }
</style>
