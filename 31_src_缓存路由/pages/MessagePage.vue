<template>
  <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
          <!-- 跳转路由并携带params参数，to的字符串写法 -->
          <!-- <router-link :to="`/homePage/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
          
          <!-- 跳转路由并携带params参数，to的对象写法 -->

          <router-link :to="{

            // path:'/homePage/message/detail',
            // 使用对象写法，必须使用name，不能使用path
            name:'xiangqing',
            params:{
              id:m.id,
              title:m.title
            }
          }" active-class="active">
            {{ m.title }}
          </router-link>
          <button @click="pushShow(m)">push查看</button>
          <button @click="replaceShow(m)">replace查看</button>
        </li>
      </ul>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'MessagePage',
  data () {
    return {
      messageList:[
      {id:'001',title:'消息1'},
      {id:'002',title:'消息2'},
      {id:'003',title:'消息3'},
      ]
    }
  },
  methods:{
    pushShow(m){
      this.$router.push({
        name:'xiangqing',
        params:{id:m.id,title:m.title}
        // query:{
        //   id:m.id,
        //   title:m.title
        // }
      })
    },
    replaceShow(m){
      this.$router.replace({
        name:'xiangqing',
        params:{id:m.id,title:m.title}
        // query:{
        //   id:m.id,
        //   title:m.title
        // }
      })
    }
  }
}
</script>

<style>

</style>