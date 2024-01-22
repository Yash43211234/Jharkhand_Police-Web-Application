import './Navbar.css';
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <ul>
                <li><NavLink className="nav-bar-link"  to="/Home"> HOME </NavLink></li>
               <li>
                   <details >
                        <summary className="nav-bar-link sub-li">ABOUT US</summary>
                       <ul  className="details-of-navbar"> 
                            <li className="sub-Navlink-li"><NavLink className="nav-bar-link"  to="History"> History </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/charter"> Citizens Charter </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/appreciation"> Appreciation </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/medals"> Medals </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="news"> In News </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/martyrs"> Martyrs </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/prectices"> Best Practices </NavLink></li>
                       </ul>

                   </details>
               </li>
                

                <li>
                <NavLink className="nav-bar-link" to="/Service">SERVICES </NavLink>
                </li>
                <li><NavLink className="nav-bar-link" to="/initiative"> INITIATIVE </NavLink></li>
                <li><NavLink className="nav-bar-link" to="/statistics">STATISTICS</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/recruitment">RECRUITMENT</NavLink></li>
                <li>
                <details >
                        <summary className="nav-bar-link sub-li">Welfare</summary>
                       <ul  className="details-of-navbar"> 
                            <li className="sub-Navlink-li"><NavLink className="nav-bar-link"  to="Welfare"> Welfare </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/Schools"> Jharkhand Police Public Schools </NavLink></li>
                            
                       </ul>

                   </details>    
                </li>
                <li><NavLink className="nav-bar-link" to="/feedback">FEEDBACK</NavLink></li>
                 <li>
                 <details >
                        <summary className="nav-bar-link sub-li">USEFUL LINKS</summary>
                       <ul  className="details-of-navbar"> 
                            <li className="sub-Navlink-li"><NavLink className="nav-bar-link"  to="Yoga"> Funds For Yoga </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/Acts"> Acts and Rules </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/Orders"> Circulars/Orders </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/Kissa"> Kissa khaki ka</NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="Podcasts"> Podcasts</NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/Gadgets"> Jharkhand Police Gadgets </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/Weekly"> Weekly Practices </NavLink></li>
                       </ul>

                   </details>    
                </li>
                 <li><details >
                        <summary className="nav-bar-link sub-li">Contact</summary>
                       <ul  className="details-of-navbar"> 
                            <li className="sub-Navlink-li"><NavLink className="nav-bar-link"  to="contact">Important Contact </NavLink></li>
                            <li className="sub-Navlink-li" ><NavLink className="nav-bar-link"  to="/telephone"> Telephone Directory </NavLink></li>
                       </ul>

                   </details></li>
                {/* <li><NavLink className="nav-bar-link" to="/contact">CONTACT US</NavLink></li> */}
            
            </ul>

        </div>
    );
}
export default Navbar;