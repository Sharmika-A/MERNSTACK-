var express = require("express") // require is like import 
// express is built on functions concept 
var app = express();
app.use(express.json()) // middleware function
const { MongoClient, ObjectId } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'
 var fileUpload = require("express-fileupload");
 // limitation for the file upload like size of the file
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
   }));
// Connection URL
const url = 'mongodb+srv://anandsharmika2003:sharmi10manju@cluster0.eyxks.mongodb.net/';
const client = new MongoClient(url);




//call express fn from express library
app.get("/myname",(req,res)=> {
res.json({"name":"SHARMIKA A"})
}); //develope a get api

app.post("/myname",(req,res)=> { 
    res.json({"name":"sharmika"})
    }); //develope a post api  => see in postman that this api is working or not 

    //app.post("/login",(req,res)=> {
    //res.json({"msg":"Login success"})
    //});

app.post("/login",(req,res)=> {
        //let email = req['query']['email'];
        //let password = req['query']['password'];
        let {email,password} = req['query'];
        if(email == "sharmi@gmail.com" && password == "sharmi123"){
            res.json({"msg":"you are correct"})
        }else{
            res.json({"msg":"you are wrong"})
        }
        console.log(email,password);
        res.json({"msg":email})
        });


app.post("/register",(req,res) => {
    let{name,email,password,address} = req['query'];
    if(name == ""||  email == "" || password == ""){
        res.json({"msg":"please enter the fields before submitting"});
    }else{
        res.json({"msg":"you have registered successfully"});
    }

    })
    // req.body can only be used for post 
app.post("/register",(req,res) => {
        let{name,email,password,address} = req.body;
        if(name == ""||  email == "" || password == ""){
            res.json({"msg":"please enter the fields before submitting"});
        }else{
            res.json({"msg":"you have registered successfully"});
        }
    
        });

        

    app.post("/add",(req,res)=>{
            let {num1,num2,sum} = req.body;
        if(num1==null && num2 == null){
            res.json({"msg":"Enter the two number"})
        }else{
            let sum = num1 + num2
            res.json({"msg":sum})
        }
        
        })
  
         app.post("/createJob",(req,res)=>{ 
            var {name,company_name,requirements} = req.body;

            db.collection("jobs").insertOne(
                {
                    "name":name,
                    "company_name":company_name,
                    "requirements":requirements 
                }
            )
                res.json({"msg":"job created"})

          });
          app.post('/upload',function(req,res){
            let file = req.files.img;
            let uploadpath = __dirname +'/upload/'  +file.name;
    
            file.mv(uploadpath,function(err){
                if(err)
                    return res.status(500),send(err);
                res.send('File uploaded!');
            })
        });
        //login api
    app.post("/login", async(req,res)=>{
    let {email,password} = req.body;
    await client.connect();
    let db = client.db(dbName); 
    let loginRes = await db.collection("jobs").find({"email":email,"password":password}).toArray();
 
    if(loginRes.length>0){
       var token = jwt.sign({ 'name':loginRes[0]['name'] }, 'secret');
          res.json({"msg":"you are correct","token ": token});
      }else{
          res.status(400).json({"msg":"you are wrong"});
      }
 })
       app.use((req,res,next)=>{
            let {token} = req.headers;
            if(token == "" || token == undefined){
                res.json({"msg":"pls send the token"})
            }else{
                jwt.verify(token,'SECRET');
                next();
            } 
       });

      
       

            app.listen(8080,() => {
            console.log("server started"); 
        })






