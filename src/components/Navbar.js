import './home.css';

import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

function Navbar() {
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
                <li className="nav-item dropdown">jdk
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
               

            </ul>

        </div>
    );
}
export default Navbar;