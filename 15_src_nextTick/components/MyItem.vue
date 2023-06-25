<template>
  <li>
      <label>
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
        <!-- 如如下代码也能实现功能，但是不推荐，因为修改了props -->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        
        <!-- 绑定失去焦点事件 -->
        <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
      </label>
      
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      
      <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
export default {
  name:'MyItem',
  // 声明接收todo对象
  props:['todo'],
  methods: {
    handleCheck(id){
      // 通知App组件将对应数据的属性取反
      // this.checkTodo(id)
      // 触发全局事件
      this.$bus.$emit('checkTodo',id)
    },
    handleDelete(id){
      if (confirm('确定删除吗？')) {
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo',id)
      }
    },
    handleEdit(todo){
      if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
        // 如果todo身上有isedit
        todo.isEdit=true
      } else {
      // 给todo追加一个isEdit属性
      this.$set(todo,'isEdit',true)
      }
      // this.$refs.inputTitle.focus()
      // 在下一次DOM更新接受后执行执行器指定的回调
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点回调（真正执行修改逻辑）
    handleBlur(todo,e){
      todo.isEdit=false
      if (!e.target.value.trim()) {
        return alert('输入不能为空')
      }
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}
li:hover button{
  display: true;
}
</style>