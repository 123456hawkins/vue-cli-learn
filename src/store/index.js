// 该文件用于创建最为核心的store
import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)
// 准备action 响应组件中的动作
const actions={
  add(context,value){
    // 去调mutations中的ADD方法
    context.commit('ADD',value)
  },
  actionSub(context,value){
    context.commit('SUB',value)
  }
}

// 准备mutations-用于操作数据
const mutations={
  ADD(state,value){
    state.sum+=value
  },
  SUB(state,value){
    state.sum-=value
  }
}

// 准备state-用于存储数据
const state={
  sum:0,
  school:'aewfa',
  subject:'gb'
}

// 用于将state中的数据进行加工
const getters= {
  bigSum(state){
    return state.sum*10
  }
}
// 创建store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})