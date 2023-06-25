<template>
  <div class="school">
    学校名称：{{ name }}
    学校地址：{{ address }}
    <button >显示名称</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name:'SchoolPage',
  data () {
    return {
      name:'hawkins',
      address:'wefawefwef'
    }
  },
  mounted(){
  //   this.$bus.$on('hello',(data)=>{
  //       console.log('我是school组件，我收到了数据',data);
  //     })
  // 订阅消息
  this.pubId=pubsub.subscribe('hello',(msgName,b)=>{//第一个参数为消息名，第二个为数据
    console.log('有人发布了hello消息，hello消息的回调函数执行了',b);
  })
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId)
  } 
}
</script>

<style>
  .school{
    background-color: aqua;
  }
</style>