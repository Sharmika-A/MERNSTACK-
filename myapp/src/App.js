import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useState } from 'react';

function App() {
  let firstname = "Sharmika";
  //let email = "sharmi@gmail.com";
  const[email,setEmail] = useState("sharmi@gmail.com");
  //let address = N0:9/43 post office street,chennai
  const[address,setaddress] = useState("N0:9/43 post office street,chennai")
  //let phoneno = 9344798588
  const[phoneno,setphoneno] = useState("9344798588")
  const validate=()=>{
    if(email == ""){
      alert("email is empty")
    }else if(phoneno == ""){
      alert("mobile is empty")
    }else{
      alert("everything is fine")
    }
  }
  return (
    <div className="container">
      <h1>this is app component</h1>
      <h1>{firstname}</h1><br></br>
      <h1>{email}</h1><br></br>
      <h1>{address}</h1><br></br>
      <h1>{phoneno}</h1><br></br>
      <Home/>
      <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}/><br></br>
      <input type='text' placeholder='phoneno' onChange={(e) => setphoneno(e.target.value)}/><br></br>
      <button onClick={()=> validate()}>Click</button><br></br>

     
    </div>
  );
}

export default App;

