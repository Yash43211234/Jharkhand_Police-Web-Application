import "./home.css";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <ul>
          <li className="nav-item dropdown">
            <NavLink className="nav-link" to="/Home">
              HOME{" "}
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropbtn">
              ABOUT US <select></select>
            </a>
            <div className="dropdown-content">
              <NavLink className="nav-link " to="/History">
                {" "}
                History{" "}
              </NavLink>
              <NavLink className="nav-link " to="/charter">
                {" "}
                Citizens Charter{" "}
              </NavLink>
              <NavLink className="nav-link " to="/appreciation">
                {" "}
                Appreciation{" "}
              </NavLink>
              <NavLink className="nav-link " to="/medals">
                {" "}
                Medals{" "}
              </NavLink>
              <NavLink className="nav-link " to="news">
                {" "}
                In News{" "}
              </NavLink>
              <NavLink className="nav-link " to="/martyrs">
                {" "}
                Martyrs{" "}
              </NavLink>
              <NavLink className="nav-link " to="/practices">
                {" "}
                Best Practices{" "}
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink className="nav-link" to="/Service">
              SERVICES{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/initiative">
              {" "}
              INITIATIVE{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/statistics">
              STATISTICS
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropbtn">
              RECRUITMENT <select></select>
            </a>
            <div className="dropdown-content">
              <NavLink className="nav-link " to="/Recruitments">
                {" "}
                Recruitments{" "}
              </NavLink>
              <NavLink className="nav-link " to="/Schools">
                {" "}
                Results{" "}
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropbtn">
              WELFARE <select></select>
            </a>
            <div className="dropdown-content">
              <NavLink className="nav-link " to="/Welfare">
                {" "}
                Welfare{" "}
              </NavLink>
              <NavLink className="nav-link " to="/Schools">
                {" "}
                Jharkhand{" "}
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink className="nav-link" to="/feedback">
              FEEDBACK
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropbtn">
              USEFUL LINKS <select></select>
            </a>
            <div className="dropdown-content">
              <NavLink className="nav-link" to="Yoga">
                {" "}
                Funds For Yuva{" "}
              </NavLink>
              <NavLink className="nav-link" to="/Acts">
                {" "}
                Acts and Rules{" "}
              </NavLink>
              <NavLink className="nav-link" to="/Orders">
                {" "}
                Laws and Orders{" "}
              </NavLink>
              <NavLink className="nav-link" to="/Kissa">
                {" "}
                Kissa khaki ka
              </NavLink>
              <NavLink className="nav-link" to="Podcasts">
                {" "}
                Podcasts
              </NavLink>
              <NavLink className="nav-link" to="/Gadgets">
                {" "}
                Jharkhand Police Gadgets{" "}
              </NavLink>
              <NavLink className="nav-link" to="/Weekly">
                {" "}
                Weekly Practices{" "}
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropbtn">
              CONTACT <select></select>
            </a>
            <div className="dropdown-content">
              <NavLink className="nav-link " to="/contact">
                Important Contact{" "}
              </NavLink>
              <NavLink className="nav-link " to="/telephone">
                {" "}
                Telephone Directory{" "}
              </NavLink>
            </div>
          </li>
        </ul>
      </div>

      <style>
        {`
                *{
                    margin:0;
                    padding:0;
                    box-sizing:border-box;
                    text-decoration:none;
                    font-family:'poppins',sans-serif;
                }
                .Navbar a{
                    font-size:16px;
                }


            .sub-nav-link {
                font-size: 12px;
            }
            
        
           
            
            .copyright {
                padding: 10px;
                width: 100%;
                background-color: rgba(0, 0, 70);
                color: #fff;
                font-size: 14px;
                bottom: 0;
            }
            .page {
                height: 340px;
            }
            
            /*-----navbar css-------*/
            
            service-subset NavLink {
                color: #03070b;
                position: absolute;
                background-color: white;
            }
            
                `}
      </style>
    </>
  );
}
export default Navbar;
