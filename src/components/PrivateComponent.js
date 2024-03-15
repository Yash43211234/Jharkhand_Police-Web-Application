import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const PrivateComponent=()=>{

    const auth = localStorage.getItem('cust');

    return auth?<Outlet/>:<Navigate to = "/Signup"/>
    
  
}

export default PrivateComponent;
