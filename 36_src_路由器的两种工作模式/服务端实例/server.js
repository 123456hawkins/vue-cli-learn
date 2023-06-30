const express=require('express')

// 解决不带#号访问造成路径错误问题
const history=require('connect-history-api-fallback')

const app= express()
app.use(history())

app.use(express.static(__dirname+'/static'))

app.get('/person',(request,res)=>{
  res.send({
    name:'tom',
    age:18
  })
})

app.listen(5005,(err)=>{
  if(!err)console.log('服务器启动了');
})