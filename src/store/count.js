export default{
  namespaced: true,
  actions:{
      //收到上下文对象(包含commit)和dispatch过来的值
  incrementIfOdd(context, value){
      if(context.state.sum % 2) {
          console.log('@')
          context.commit('INCREMENT',value);
          // context.state.sum += 1;//这样可以实现但是记住本次对状态的改变开发者工具将无法捕获，因为开发者工具是对mutations对话的
      }
  },
  incrementWait(context, value){
      setTimeout(() => {
          context.commit('INCREMENT', value);
      },500)
  }
  },
  mutations:{
      //收到state和要操作数value
  INCREMENT(state, value) {
      state.sum += value;
  },
  DECREMENT(state, value) {
      state.sum -= value;
  },
  },
  state:{
      sum:0
  },
  getters:{
      bigSum(state){
          return state.sum * 10;
      }
  }

}