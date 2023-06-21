export default{
  install(Vue){
    Vue.filter('myslice',function(value){  
      // slice只适用于字符串类型
      return value.slice(0,4)
    })
    
    Vue.directive('fbind',{
       // 指令与元素成功绑定时
          bind(element,binding){
            element.value=binding.value
          },
          // 指令所在元素插入页面时
          inserted(element){
            element.focus()
          },
          // 指令所在的模板重新解析时
          update(element,binding){
            element.value=binding.value
          }
    })

    // 定义混入
    Vue.mixin({methods: {
      showName(){
        alert(this.name)
      }
    }})
  }
}