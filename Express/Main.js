var express = require("express") // require is like import 
// express is built on functions concept 
var app = express();
app.use(express.json()) // middleware function

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
            let db = client.db("office");
         await db.collection('employee').insertOne(data);
            res.status(200).json({"message":"Created a record"})
            
           
        })

        app.delete("deleteUserByName",async(req,res)=>{
            let {name} = req.query;
            await client.connect();
            await
        db.collection("employeee").deleteOne({"name":name})
            res.json({"msg":"user deleted"})
        })
        app.listen(8080,() => {
            console.log("server started");
        })






















// destructuring in javascript old way
//let user = {"email":"kiki@gmailo.com","pass":"asdfasd"}

//let email = user.email;
//let pwd = user.pass;
// new way
//let{email,pass} = user;