import {Link,NavLink} from 'react-router-dom'


import React from "react";
function Login(){
    const [user,setUser] = React.useState("");
    const [Password,setPassword] = React.useState("");
    const [userErr, setUserErr] =   React.useState(false);
    function userHandler(e){
        let item = e.target.value

        if(item.length < 3){
            console.log(e.target.value)
        }
        else{
            console.log("invalid")
        }
    }

    function lognHandle(e){
        e.preventDefault();
    }
    return(
      <>
      
        <div>
        <h1>Login</h1>
        <form onSubmit={lognHandle}>
        <input type='text' placeholder="Enter Id" onChange={userHandler}/>
        <br/><br/>
        <input type='text' placeholder="Enter Password"/>
        <br/><br/>
        <button type="submit">Login</button>
        </form>
      </div>
    
  
      </>
    );
}
      
  
  export default Login;