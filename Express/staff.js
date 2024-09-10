var express = require("express") 
    // require is like import 
// express is built on functions concept 
var app = express();
app.use(express.json()); // middleware function
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://anandsharmika2003:NQKVEB6ajqr0XBV3@cluster0.eyxks.mongodb.net/';
const client = new MongoClient(url);
// Database Name
const dbName = 'office';
app.post("/teacher",async(req,res)=>{
    let body = req.body;
    let data = {
        'name':body['name'],
        'email':body['email'],
        'password':body['password'],
        'address':body['address'],
        'mobile':body['mobile'],

    }

        await client.connect();
        let db = client.db(dbName);
        await db.collection('employee').insertOne(data);
        res.status(200).json({"message":"Created a record"})
    
   
})

app.listen(8081,() => {
    console.log("server started");
});