const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app=express()

app.use(express.json())

app.use(cors())

const products = require("./models/product")

const {productModel}=require("./models/product")

mongoose.connect("mongodb+srv://orwel000:orwel123@cluster0.hyugd.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input = req.body
    let product= new productModel(input)
    // console.log(product)
    product.save()
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    productModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.get("/search",(req,res)=>{
    res.send("Search DATA")
})

app.listen(8080,()=>{
    console.log("server started")
})