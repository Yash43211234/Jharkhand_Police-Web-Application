import React from 'react';
import { FaUser,FaLinkedin,FaFacebook,FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useEffect } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('cust');
    if (auth) {
      navigate('/');
    }
  }
  )
  const CollectData = async () => {
    try {
      let result = await fetch('http://localhost:3001/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
          'content-Type': 'application/json'
        },

      })
      if (result.ok) {
        const data = await result.json();
        localStorage.setItem("cust", JSON.stringify(data));
        navigate('/');
      } else {
        console.error("Server returned an error:", result.statusText);
        alert("Please Enter correct Details");

      }
    } catch (error) {
      console.error("An error occurred:", error);

    }
  };

  return (
    <>
      <div className='Container-auth-box'>

        <div className='Register signup-box-1'>
        <a className="icon" target="_blank" rel="noopener noreferrer">
        <FaUser   size={22} style={{ marginRight: '10px' }} />
      </a><br/><br/>
          <h2>Hello, Friends!</h2>
          <br /> <br />
          <p className='p-tag-register'>Enter your personal details <br /> and start your journey with us</p>
          <NavLink className="signup-button" to="/Signup"> <button>Signup</button> </NavLink>
        </div>

        <div className='Register login-box-1'>
         
          <h2>Login</h2>
          <a className="login-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin   size={22} style={{ marginRight: '10px' }} />
          </a>
          <a className="login-icon" target="_blank" rel="noopener noreferrer">
            <FaGoogle   size={22} style={{ marginRight: '10px' }} />
          </a>
          <a className="login-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook   size={22} style={{ marginRight: '10px' }} />
          </a>
          <br /><br />
          <input className='inputBox' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required /><br /><br />
          <input className='inputBox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required /><br /><br />
          <p>Forgot your password?</p> <br/>
          <button onClick={CollectData} className='button-auth' type="button">Login</button>
        </div>

      </div>
      <style>
        {
          `
          .Container-auth-box {
            display: flex;
            margin-bottom:50px;
            justify-content: center;
          }
          
          .Register {
            padding: 100px;
          }
          
          .Register h2 {
            font-size: 24px;
            margin-bottom: 12px ;
          }
          .icon{
            color:white;
          }
          
          .signup-box-1{
           color:white;
            border-top-left-radius:4px ;
            border-bottom-left-radius:4px ;
            background:linear-gradient(45deg,#2193b0,#6dd5ed);
          }
          .login-box-1{
            border:1px solid #ccc;
            border-top-right-radius:4px ;
            border-bottom-right-radius:4px ;
           
          }
          .p-tag-register {
            font-size: 16px;
            margin-bottom: 20px;
          }
          
          .inputBox {
            width: 100%;
            padding: 10px ;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          
          .button-auth {
            width: 100%;
            padding: 10px;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background:linear-gradient(45deg,#00ff00,#008000);
          }
          .button-auth:hover{
            background:linear-gradient(45deg,#5eff00,#00cc00);
          }
          
          .signup-button button {
            background:linear-gradient(45deg,#2193b0,#6dd5ed);
            padding: 10px 40px;
           
            border-radius: 15px;
          }
          
          .signup-button button:hover {
            background:linear-gradient(To top,#4CA0,#FFEB);
            cursor:pointer;
          }
          
                  
        `
        }
      </style>
    </>
  );
}

export default Login;
