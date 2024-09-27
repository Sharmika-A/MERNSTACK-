var express = require("express");
var router = express.Router();
//http://localhost:8080/user/getAllProducts
router.get("/getAllProducts",(req,res)=>{
    let ProductList = [{"name":"product"},{"name":"Moisturizer"},{"name":"Facewash"},
        {"name":"Toothpaste"},{"name":"Handcream"},{"name":"Shampoo"},{"name":"conditioner"},{"name":"perfume"}]
    res.json(ProductList);
    })
router.get("/getProductDetailsById",(req,res)=>{
        let {id}= req.body;
       
        })


module.exports = router;