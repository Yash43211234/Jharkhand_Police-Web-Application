import './Navbar.css';
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <ul>
                <li><NavLink className="nav-bar-link"  to="/Home"> HOME </NavLink></li>
                <li><NavLink className="nav-bar-link" to="/About">ABOUT US</NavLink></li>
                




              
                <li><NavLink className="nav-bar-link" to="/ServiceList">SERVICES </NavLink></li>
                <li><NavLink className="nav-bar-link" to="/initiative"> INITIATIVE </NavLink></li>
                <li><NavLink className="nav-bar-link" to="/statistics">STATISTICS</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/recruitment">RECRUITMENT</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/welfare">WELFARE</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/feedback">FEEDBACK</NavLink></li>
                 <li><NavLink className="nav-bar-link" to="/links">USEFUL LINKS</NavLink></li>
                 <li><NavLink className="nav-bar-link" to="/contact">CONTACT US</NavLink></li>
                {/* <li><NavLink className="nav-bar-link" to="/contact">CONTACT US</NavLink></li> */}
            
            </ul>

        </div>
    );
}
export default Navbar;