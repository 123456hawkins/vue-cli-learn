const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 语法检查关闭
  lintOnSave:false,
  
  // // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 开启代理服务器（//支持多台代理）
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000/',
        pathRewrite:{'^/atguigu':''},
        ws: true,//用于支持websocket
        changeOrigin: true//用于控制请求头中的host值
      },
      '/cars':{
        target:'http://localhost:5001/',
        ws:true,
        changeOrigin:true
      }

    }
  }
})

