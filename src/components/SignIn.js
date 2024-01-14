import {Link,NavLink} from 'react-router-dom'
import './Navbar.css'
import React from 'react'
import Login from './Login';

function SignIn(){
    
    return(
      <>
      
        <div>
        <h1>Sign In</h1>

        <form >
        <input type='text' placeholder="Enter first name" />
        <br/><br/>
        <input type='text' placeholder="Enter surename"/>
        <br/><br/>
        <input type='text' placeholder="Enter Gender"/>
        <br/><br/>
        <input type='text' placeholder="Enter Mobile no." />
        <br/><br/>
        <input type='text' placeholder="create Password"/>
        <br/><br/>
        <input type='text' placeholder="ReEnter Password"/>
        <br/><br/>
        <button type="submit">sign in</button>

        <NavLink className='login-button' to="/Login">Login</NavLink>
        </form>

      </div>
    
  
      </>
    );
}
      
  
  export default SignIn;