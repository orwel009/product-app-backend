const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")    
})

app.post("/add",(req,res)=>{
    res.send("Add Page")
})

app.post("/view",(req,res)=>{
    res.send("View Page")
})

app.listen(8080,()=>{
    console.log("server started")
})