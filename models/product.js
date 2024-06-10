const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
     "productName":String,
     "price":String,
     "imgurl":String,
     "description":""   
    }
)

let productModel=mongoose.Model("products",schema)
module.exports={productModel}