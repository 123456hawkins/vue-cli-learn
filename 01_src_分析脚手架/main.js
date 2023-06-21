// 该文件是整个项目的入口文件
//引入vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
/**
 * 关于不同版本的Vue：
 * 1.Vue.js与vue.runtime.xxx.js的区别：
 *    （1）vue.js是完整版的vue，包含核心功能和模板解析器
 *     (2)vue.runtime.xxx.js是运行版的vue，只包含核心功能，没有模板解析器
 * 2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收的createElement函数去指定具体内容
 */
Vue.config.productionTip = false
// 创建vue的实例对象
new Vue({
//   // 将app组件放入容器中
//   在Vue.js中，main.js文件是Web应用程序的入口点。在这个文件中，我们通常会找到一个名为new Vue()的语句来创建Vue实例，并指定选项对象以配置应用程序。

// 其中，render函数是一个可选的选项，它用于渲染Vue实例所管理的组件树。如果没有提供render函数，Vue会使用默认的模板编译器来将template选项编译为渲染函数。

// render函数接收createElement作为第一个参数，用于创建虚拟DOM节点。createElement函数返回一个VNode（虚拟节点），描述了如何渲染该节点及其子节点。

  render: h => h(App),
}).$mount('#app')
