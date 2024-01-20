import './Aboutlist.css';
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const AboutList = () => {

  return (

    <>
    
    <div className='AboutList'>
        <ul>
            <li><NavLink  className='about-data' to="/about-data-1"> Data 1 </NavLink></li>
            <li><NavLink  className='about-data' to="/second">Data 2</NavLink></li>
            <li><NavLink  className='about-data' to="/first"> Data 3 </NavLink></li>
            <li><NavLink  className='about-data' to="/second">Data 4 </NavLink></li>
            <li><NavLink  className='about-data' to="/first"> Data 5 </NavLink></li>
            <li><NavLink  className='about-data' to="/second">Data 6 </NavLink></li>
           
        </ul>



    </div>

   
    </>

  );
};

export default AboutList;
