import React from 'react';
import { FaUser,FaGoogle,FaFacebook,FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function Signup() {
  const [name, setName] = useState("");
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


  const Collectdata = async () => {
    try {

      let result = await fetch('http://localhost:3001/signup', {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
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

      }
    } catch (error) {
      console.error("An error occurred:", error);

    }
  };

  return (
    <>
      <div className='Container-auth-box'>
        <div className='Register signup-box-1 '>
     
          <h2>Create Account</h2>
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
          <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' /><br /><br />
          <input className='inputBox' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' /><br /><br />
          <input className='inputBox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' /><br /><br />
          <button onClick={Collectdata} className='button-auth-signup ' type="button">Signup</button>

        </div>
        <div className='Register  login-box-1'>
        <a className="icon" target="_blank" rel="noopener noreferrer">
        <FaUser   size={22} style={{ marginRight: '10px' }} />
      </a><br/><br/>
          <h2>Welcome Back!</h2>
          <br /> <br />
          <p className='p-tag-register'>To keep connected with us please <br /> login with your personal info</p>
          <NavLink to="/Login" className="signup-button" ><button>Login</button></NavLink>
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
      
      .login-box-1{
       color:white;
       background:linear-gradient(45deg,#2193b0,#6dd5ed);
       border-top-right-radius:4px ;
       border-bottom-right-radius:4px ;
      }
      .signup-box-1{
        border-top-left-radius:4px ;
        border-bottom-left-radius:4px ;
        border:1px solid #ccc;
       
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
      .icon{
        color:white;
      }
      .button-auth-signup {
        width: 100%;
        padding: 10px;
        color: #fff;
        border: none;
        border-radius: 5px;
        background:linear-gradient(45deg,#00ff00,#008000);
        cursor: pointer;
      }
      
      .signup-button button {
        padding: 10px 40px;
        background:linear-gradient(45deg,#2193b0,#6dd5ed);
       
        border-radius: 15px;
      }
      
      .button-auth-signup:hover{
        background:linear-gradient(45deg,#5eff00,#00cc00);
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

export default Signup;
