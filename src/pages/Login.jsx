import React from 'react'
import { useState } from 'react'
import { useContext } from "react";
import {Link,useNavigate} from 'react-router-dom';
import { AuthContext } from "../context/authContext";
// import axios from 'axios';

const Login = () => {

  const [err,setError]=useState();
  const navigate=useNavigate();
  const [inputs,setInputs]=useState({
    username: "",
    email: "",
    password: "",
  });

const { login } = useContext(AuthContext);

 const handleChange= e=>{     
  setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
 }

 const handleSubmit=async e=>{          //axios used, api request hogi
  e.preventDefault();
  try {
   // await axios.post("http://localhost:8800/api/auth/login",inputs, { withCredentials: true });
    await login(inputs)
    navigate("/");
  }
  catch(err) {
    //console.error("Registration failed:", err.response?.data || err.message);
    setError(err.response.data);
  }
  
 }
  // console.log(inputs);
  return (
    <div className='auth'>
      <h1>Login</h1>
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
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Dont have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login 

