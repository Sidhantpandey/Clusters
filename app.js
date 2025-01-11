import express from 'express';
import "dotenv/config";

const app=express()

const port=process.env.PORT || 4000
app.get('/',(req,res)=>{
    return res.json({message:`Hello from server ${process.pid}`})
})
app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`)
})