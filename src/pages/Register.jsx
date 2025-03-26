import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const [err,setError]=useState();
  const navigate=useNavigate();
  const [inputs,setInputs]=useState({
    username: "",
    email: "",
    password: "",
  });

 const handleChange= e=>{     
  setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
 }

 const handleSubmit=async e=>{          //axios used, api request hogi
  e.preventDefault();
  try {
    await axios.post("http://localhost:8800/api/auth/register",inputs, { withCredentials: true });
    navigate("/login");
  }
  catch(err) {
    //console.error("Registration failed:", err.response?.data || err.message);
    setError(err.response.data);
  }
  
 }
  // console.log(inputs);
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register 