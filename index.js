const express=require('express')
const app=express()


const simpleLogger=(req,res,next)=>{
    console.log(`${req.url}-${req.method}-${new Date().toISOString()}`)
  
    next()
}
app.use(simpleLogger) //express will call himself

app.get('/',(req,res)=>{

  res.json({message:"Sweet Home!"})
})
app.get('/hello',(req,res,next)=>{
    res.json({message:"Hello"})
})

app.listen(4000,()=>{
    console.log("Server Running on 4000 port")
})