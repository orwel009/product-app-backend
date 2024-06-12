const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
     "productName":String,
     "price":String,
     "category":String,
     "imgurl":String,
     "description":String   
    }
)

let productModel=mongoose.model("products",schema)
module.exports={productModel}