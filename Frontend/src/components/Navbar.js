import React, { useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
 
  
  return (

    <>
      <div className="Navbar">
        <ul>
          <li className="nav-item dropdown">

            <NavLink className="nav-link" to="/Home">HOME </NavLink>

          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropbtn">ABOUT US <select></select></a>
            <div className="dropdown-content">
              <NavLink className="nav-link " to="/History"> History </NavLink>
              <NavLink className="nav-link " to="/charter"> Citizens Charter </NavLink>
            <NavLink className="nav-link " to="/Appreciation"> Appreciation </NavLink>
              <NavLink className="nav-link " to="/medals"> Medals </NavLink>
              <NavLink className="nav-link " to="/news"> In News </NavLink>
              <NavLink className="nav-link " to="/Martyrs"> Martyrs </NavLink>
              {/* {/* <NavLink className="nav-link " to="Practices"> Basic Practices </NavLink>  */}


            </div>

          </li>

          <li><NavLink className="nav-link" to="/Service">SERVICES </NavLink></li>
          <li><NavLink className="nav-link" to="/initiative"> INITIATIVE </NavLink></li>
          <li><NavLink className="nav-link" to="/statistics">STATISTICS</NavLink></li>
          <li className="nav-item dropdown">

            <a href="#" className="nav-link dropbtn">RECRUITMENT <select></select></a>
            <div className="dropdown-content">
              <NavLink className="nav-link " to="/Recruitments"> Recruitments </NavLink>
              <NavLink className="nav-link " to="/Result"> Results  </NavLink>

            </div>

          </li>

          <li><NavLink className="nav-link" to="/welfare">WELFARE</NavLink></li>
          <li><NavLink className="nav-link" to="/feedback">FEEDBACK</NavLink></li>

          <li className="nav-item dropdown">

            <a href="#" className="nav-link dropbtn">USEFUL LINKS <select></select></a>
            <div className="dropdown-content">
              <NavLink className="nav-link" to="/YogafunPages"> Funds For Yuva </NavLink>
              <NavLink className="nav-link" to="/Act"> Acts and Rules </NavLink>
              <NavLink className="nav-link" to="/Orders"> Circulars/Orders </NavLink>
              <NavLink className="nav-link" to="/JharkhandWeeklyPractices"> Weekly Practices </NavLink>
              <NavLink className="nav-link" to="/JpGp"> Jharkhand Police Gadgets </NavLink>
             
              {/* <NavLink className="nav-link" to="/Kissa"> Kissa khaki ka</NavLink>
              <NavLink className="nav-link" to="/Podcast"> Podcasts</NavLink>
              */}
             
             
            </div>
          </li>


          <li className="nav-item dropdown">
                <a href="#" className="nav-link dropbtn">CONTACT <select></select></a>
                 <div className="dropdown-content">
                  <NavLink className="nav-link " to="/Contact">Important Contact</NavLink>
                  <NavLink className="nav-link " to="/telephone">Telephone Directory</NavLink>
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
            
        
           
            
            
            .page {
                height: 340px;
            }
            
            /*-----navbar css-------*/
            
            service-subset NavLink {
                color: #03070b;
                position: absolute;
                background-color: white;
            }





            /* Navbar CSS */
.navbar {
  overflow: hidden;
  background-color: #333;
 
}

.Navbar {
  background: #00123c;
  position: fixed;
  width: 100%;
  padding:10px 0;
  top: 30px;
  position: relative;
  margin-bottom: 50px;
  height: 70px;
  display: flex;
   justify-content:center;
   align-content:center;
  
 
  
}

.Navbar li {
  border: 0;
  display: inline-block;
  list-style: none;
  
}

.navbar-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-item {
  margin-right: 10px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 10px 10px;
  display: block;
}

/*

.nav-link:hover {
  background-color: #ddd;
  color: black;
}

*/

select {
  color: #ddd;
  background-color: rgb(10, 10, 10);
  border: 1px solid rgb(10, 10, 10);
}

/* Dropdown CSS */
.dropdown {
  position: relative;
}

.dropbtn a .active {
  color: rgb(10, 10, 10);
  background-color: rgb(244, 240, 240);
}

.dropbtn {
  background-color: inherit;
  color: white;
  padding: 10px 15px;

  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 145px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  font-size: 16px;
}
a:hover {
  text-decoration: underline;
}

            
                `}
      </style>
    </>
  );
}
export default Navbar;
