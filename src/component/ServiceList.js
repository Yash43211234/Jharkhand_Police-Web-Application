import './ServiceList.css';
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const ServiceList = () => {

  return (

    <>
    
    <div className='service'>
        <ul>
            <li><NavLink  className='service-data' to="/service-data-1"> Data 1 </NavLink></li>
            <li><NavLink  className='service-data' to="/second"><img src='https://www.holidify.com/images/bgImages/RANCHI.jpg'></img> </NavLink></li>
            <li><NavLink  className='service-data' to="/first"> Data 3 </NavLink></li>
            <li><NavLink  className='service-data' to="/second">Data 4 </NavLink></li>
            <li><NavLink  className='service-data' to="/first"> Data 5 </NavLink></li>
            <li><NavLink  className='service-data' to="/second">Data 6 </NavLink></li>
            <li><NavLink  className='service-data' to="/second">Data 7 </NavLink></li>
        </ul>



    </div>

    <div className='service-img' >
      <img src='https://www.holidify.com/images/bgImages/RANCHI.jpg'></img>
    </div>
    </>

  );
};

export default ServiceList;
