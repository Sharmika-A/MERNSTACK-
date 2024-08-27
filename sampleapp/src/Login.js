import { useState } from 'react';

function Login() {

    // State variables
    const [email, setEmail] = useState('');  // Initialize with an empty string
    const [pass, setPassword] = useState(''); // Initialize with an empty string

    const validate = () => {
        if (email === "") {
            alert("Email is empty");
        } else if (pass === "") {
            alert("Password is empty"); 
        } else {
            alert("Login is successfull");
        }
    };

    
    return (
        <div className='container'>
            <h1>LOGIN</h1>
            Email: <input type='email' onChange={(e) => setEmail(e.target.value)} /><br />
            Password: <input type='password' onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={validate}>CLICK</button>
        </div>
    );
}

export default Login;