<<<<<<< HEAD
import "./Navbar.css";
import "./Link.css";
import React, { useState } from "react";
=======
import './home.css';

import React, { useState } from 'react';
>>>>>>> fee4ea880cec781d5dfddc17c300efe2cdf9e0a4
import { Link, NavLink } from "react-router-dom";
import "./CawIns";

function Navbar() {
<<<<<<< HEAD
  return (
    <div className="Navbar">
      <ul>
        <li>
          <NavLink className="nav-bar-link" to="/Home">
            {" "}
            HOME{" "}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/About">
            {" "}
            ABOUT US <select></select>
            <ul className="dropdown">
              <li> History</li>
              <li> Citizens Charter </li>
              <li> Appreciation Letters </li>
              <li> Medals </li>
              <li> In News </li>
              <li> Martyrs </li>
              <li> Best Practices </li>
=======
    return (
        <div className="Navbar">
            <ul>
                <li className="nav-item dropdown">
              
                <NavLink className="nav-link" to="/Home">HOME </NavLink>
                    
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropbtn">ABOUT US</a>
                    <div className="dropdown-content">
                            <NavLink className="nav-link " to="/History"> History </NavLink>
                            <NavLink className="nav-link " to="/charter"> Citizens Charter </NavLink>
                            <NavLink className="nav-link " to="/appreciation"> Appreciation </NavLink>
                            <NavLink className="nav-link " to="/medals"> Medals </NavLink>
                            <NavLink className="nav-link " to="news"> In News </NavLink>
                            <NavLink className="nav-link " to="/martyrs"> Martyrs </NavLink>
                            <NavLink className="nav-link " to="/prectices"> Best Practices </NavLink>
                    </div>
                   
                </li>

                <li><NavLink className="nav-link" to="/Service">SERVICES </NavLink></li>
                <li><NavLink className="nav-link" to="/initiative"> INITIATIVE </NavLink></li>
                <li><NavLink className="nav-link" to="/statistics">STATISTICS</NavLink></li>
                <li className="nav-item dropdown">
                 
                    <a href="#" className="nav-link dropbtn">RECRUITMENT</a>
                    <div className="dropdown-content">
                            <NavLink className="nav-link " to="/Recruitments"> Recruitments </NavLink>
                            <NavLink className="nav-link " to="/Schools"> Results  </NavLink>
                   
                    </div>
                    
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropbtn">WELFARE</a>
                    <div className="dropdown-content">
                            <NavLink className="nav-link " to="/Welfare"> Welfare </NavLink>
                            <NavLink className="nav-link " to="/Schools"> Jharkhand  </NavLink>
                   
                    </div>
                </li>
                 
                <li><NavLink className="nav-link" to="/feedback">FEEDBACK</NavLink></li>
              
                {/* <li className="nav-item dropdown">
                   
                <a href="#" className="nav-link dropbtn">USEFUL LINKS</a>
                <div className="dropdown-content">
                            <NavLink className="nav-link" to="Yoga"> Funds For Yoga </NavLink>
                            <NavLink className="nav-link" to="/Acts"> Acts and Rules </NavLink>
                            <NavLink className="nav-link" to="/Orders"> Circulars/Orders </NavLink>
                            <NavLink className="nav-link" to="/Kissa"> Kissa khaki ka</NavLink>
                            <NavLink className="nav-link" to="Podcasts"> Podcasts</NavLink>
                            <NavLink className="nav-link" to="/Gadgets"> Jharkhand Police Gadgets </NavLink>
                            <NavLink className="nav-link" to="/Weekly"> Weekly Practices </NavLink>
                        </div>

                   
                </li> */}
                <li className="nav-item dropdown">
                    
                <a href="#" className="nav-link dropbtn">CONTACT</a>
                <div className="dropdown-content">
                        <NavLink className="nav-link " to="contact">Important Contact </NavLink>
                        <NavLink className="nav-link " to="/telephone"> Telephone Directory </NavLink>
                   
                        </div>
                </li>
               

>>>>>>> fee4ea880cec781d5dfddc17c300efe2cdf9e0a4
            </ul>
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-bar-link" to="/ServiceList">
            SERVICES{" "}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/initiative">
            {" "}
            INITIATIVE{" "}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/statistics">
            STATISTICS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/recruitment">
            RECRUITMENT
            <select></select>
            <ul class="dropdown">
              <li> Recruitments </li>
              <li> Results </li>
            </ul>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/welfare">
            WELFARE
            <select></select>
            <ul class="dropdown">
              <li> PFWS </li>
              <li> Jharkhand Schools </li>
              <li> Welfare </li>
            </ul>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/feedback">
            FEEDBACK
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/Link">
            USEFUL LINKS
            <select></select>
            <ul class="dropdown">
              <li to="/CawIns"> CAW Instructions </li>
              <li> FastDAR Scheme </li>
              <li> Deputation </li>
              <li> Funds for Yuva </li>
              <li> Acts And Rules </li>
              <li> Circulars / Orders </li>
              <li> Kissa Khaki Ka </li>
              <li> Podcast </li>
              <li> Annual Press Conference </li>
              <li> Jharkhand Police </li>
              <li> Weekly Parados </li>
            </ul>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/contact">
            CONTACT US
            <select></select>
            <ul class="dropdown">
              <li> Important Contact </li>
              <li> Telephone Directory</li>
            </ul>
          </NavLink>
        </li>
        {/* <li><NavLink className="nav-bar-link" to="/contact">CONTACT US</NavLink></li> */}
      </ul>
    </div>
  );
}
export default Navbar;
