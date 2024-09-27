var cors = require('cors');
var express = require('express');
const fileUpload = require('express-fileupload');

var app = express();
app.use(cors())


app.use(express.json());
app.use(fileUpload());
app.use('/upload', express.static('uploads'))
  
app.use(express.static('public'))
// for user.js
var user = require("./api/user")
app.use("/User",user)

 // for product.js
var product = require("./api/product")
app.use("/Product",product)

const portno = 8080
app.listen(portno,()=>{
    console.log(`server is running on ${portno}`);
})