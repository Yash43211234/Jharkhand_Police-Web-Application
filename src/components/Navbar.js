import "./Navbar.css";
import "./Link.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./CawIns";

function Navbar() {
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
