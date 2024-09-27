var express = require("express") 
    // require is like import 
// express is built on functions concept 
var app = express();
app.use(express.json()); // middleware function
const {MongoClient,ObjectId} = require("mongodb") 


// Connection URL
const url = 'mongodb+srv://anandsharmika2003:sharmi10manju@cluster0.eyxks.mongodb.net/';
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
        res.status(200).json({"message":"Created a record"});
    
   
})
//get emplist
app.get("/Emplist",async(req,res)=>{

    await client.connect();
    let db = client.db(dbName);
    let list = await db.collection('employee').find({}).toArray();
    res.status(200).json(list)
 
 
 }) 
// to filter the details of employess name using pathvariable can work with get and post
app.get("/Emplistnames/:name",async(req,res)=>{

    await client.connect();
    let {name} = req.params;
    let db = client.db(dbName);
    let list = await db.collection('employee').find({"name":name}).toArray();
    
    res.status(200).json(list)
 
 
 })
 // delete an employee
 app.delete("/deleteEmpByName",async(req,res)=>{
    let {name} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("employee").deleteOne({"name":name})
    res.json({"msg" :"employee deleted"})
 })
// to update password
 app.put("/updateName",async(req,res)=>{
    let {name,password} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("employee").updateOne( {"name":name},{$set:{"password": password}})
    res.json({"msg" :"employee updated"})
 })
//find the record based on id
 app.get("/getById",async(req,res)=>{
    let {id} = req.query;
    await client.connect();
    let db = client.db(dbName);
    let data = await db.collection("employee").find({"_id":new ObjectId(id)}).toArray();
    res.json(data);
 })


app.listen(8081,() => {
    console.log("server started");
});