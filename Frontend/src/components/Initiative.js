// Orders.js

import React from "react";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";


const Initiative = () => {


  return (
    <div className="orders-container">
        <h1 className="title">Initiatives Taken by Jharkhand Police</h1>
        
        {/* <div className="box_div">
          <b>Id:</b> 1 <br/>
          <b>Title:</b> "Community Policing Initiative"<br/>
          <b>Description:</b> "Engaging with the community to build trust and prevent crime."<br/>
          <b>OrderId:</b> "CP2022-001"<br/>
          <b>Status:</b> "In Progress"<br/><br/>

          <Button variant="contained" href="#contained-buttons">
            <NavLink className="initiative_click_btn" to="/">check</NavLink>
          </Button>
        </div> */}

        {/* <div className="box_div">
          <b>Id:</b> 2 <br/>
          <b>Title:</b> "Traffic Safety Campaign"<br/>
          <b>Description:</b> "Educating drivers and pedestrians to reduce accidents."<br/>
          <b>OrderId:</b> "TS2022-002"<br/>
          <b>Status:</b> "Completed"<br/><br/>

          <Button variant="contained" href="#contained-buttons">
            <NavLink className="initiative_click_btn" to="/">check</NavLink>
          </Button>
        </div> */}

        {/* <div className="box_div">
        <b>Id:</b> 3 <br/>
        <b>Title:</b> "Make My City Safe"<br/>
        <b>Description:</b> "This initiative aims to create safer urban environments by improving policing, surveillance, and community engagement."<br/>
        <b>OrderId:</b> "YS2022-003"<br/>
        <b>Status:</b> "Completed"<br/><br/>

        <Button variant="contained" href="#contained-buttons">
          <NavLink className="initiative_click_btn" to="/">check</NavLink>
        </Button>
      </div> */}

      <div className="box_div">
      <b>Id:</b> 4 <br/>
      <b>Title:</b> "Shakti Anti-Human Trafficking Unit"<br/>
    
      <b>OrderId:</b> "KP2022-004"<br/>
      <b>Status:</b> "Completed"<br/><br/>

      <Button variant="contained" href="#">
        <NavLink className="initiative_click_btn" to="/AntiHuman">check</NavLink>
      </Button>
    </div>

      <div className="box_div">
        <b>Id:</b> 5 <br/>
        <b>Title:</b> "Cyber Crime Police Stations"<br/>
        
        <b>OrderId:</b> "MG2022-005"<br/>
        <b>Status:</b> "In Progress"<br/><br/>
        <Button variant="contained" href="#">
          <NavLink className="initiative_click_btn" to="/Cyber_crime">check</NavLink>
        </Button>
      </div>


        <div className="box_div">
        <b>Id:</b> 7 <br/>
        <b>Title:</b> "Child-Friendly Police Stations"<br/>
      
        <b>OrderId:</b> "ZE2022-007"<br/>
        <b>Status:</b> "In Progress"<br/><br/>

        <Button variant="contained" href="#contained-buttons">
          <NavLink className="initiative_click_btn" to="/ChildPolice">check</NavLink>
        </Button>
      </div>



      <style>
        {`
          .orders-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px;
            font-family: Arial, sans-serif;
          }
 

          .title {
            color:  #527a7a;
            font-size: 30px;
            margin-bottom: 30px;
          }
          .box_div {
            background-color: #FFFFFF;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            max-width: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .box_div b {
            color: #007bff; /* Blue color for bold text */
          }
          
          .box_div b::after {
            content: ": "; /* Add a colon and space after each bold text */
          }
          
          .box_div p {
            margin: 10px 0; /* Add margin above and below paragraphs */
          }
          

          .initiatives-list {
            list-style-type: none;
            padding: 0;
          }

          .initiative-item {
            margin-bottom: 60px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px;
            background-color:#d1e0e0 ;
          }

          .initiative-item h2 {
            color: #669999;
            font-size: 30px;
            margin : 20px;
          }

          .initiative-item p {
            margin: 15px 0;
            color: #000;
            font-size: 20px;
          }

          .additional-content {
            margin-top: 40px;
            background-color: #c2d6d6;
          }

          .additional-content h2 {
            color: #8585ad;
            font-size: 24px;
          }

          .additional-content p {
            color: #75a3a3;
            font-size: 30px;
          }
        `}
      </style>
      
    </div>
  );
};

export default Initiative;