<template>
  <div class="todo-footer" v-show="Total">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ Total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:['todos'],
  computed:{
    isAll:{
      get(){
        return this.doneTotal=== this.Total && this.Total >0
      },
      set(value){
        this.$emit('checkAllTodo',value)
      }
    },
    Total(){
      return this.todos.length
    },
    doneTotal(){
      return this.todos.reduce((pre,current)=>pre+(current.done ? 1:0),0)
    }
  },
  methods:{
    // checkAll(e){
    //   this.checkAllTodo(e.target.checked)
    // }
    clearAll(){
      this.$emit('clearAllTodo')
      
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>