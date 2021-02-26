const express =require("express")
const mongoose=require("mongoose")
const url="mongodb://localhost/CURD-TASK"

const app=express();


mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected....')
})


app.use(express.json())


const myrouter=require('../CURD/routers/task')
app.use('/task',myrouter)



app.listen(8000,()=>{
    console.log('server stated....')
})