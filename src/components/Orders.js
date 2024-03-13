// MissingPersonForm.js

import React, { useState } from "react";

const Orders = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    lastSeen: "",
    contactInfo: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the form data
    console.log("Form Submitted:", formData);
    // You can reset the form after submission if needed
    setFormData({
      name: "",
      age: "",
      gender: "",
      height: "",
      lastSeen: "",
      contactInfo: "",
      description: "",
    });
  };

  return (
    <>
      <style>
        {`
      /* MissingPersonForm.css */
   
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        
      }
      
      .missing-person-form-container {
        
       
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border: 2px solid #fff;
          border-radius: 10px;
          background-color:  #f9ecec;
        
      }
      
      .header {
        text-align: center;
        margin-bottom: 30px;
      }
      
      .header h1 {
        font-size: 2.5em;
        margin-bottom: 10px;
        color: #c65353;
      }
      
      .header p {
        font-size: 1.2em;
        color: #d27979;
      }
      
      .form-group {
        margin-bottom: 20px;
        color: #d27979;
        font-size: 20px;
        text- align:left;
      }
      
      label {
        display: block;
        font-size: 1.1em;
        margin-bottom: 5px;
      }
      
      input[type="text"],
      textarea {
        width: 70%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
      
      textarea {
        height: 100px;
      }
      
      button {
        padding: 10px 20px;
        background-color: #e6b3b3;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: 1.1em;
      }
      
      button:hover {
        background-color: #cc6666;
      }
      
      .guidelines {
        margin-top: 50px;
      }
      
      .guidelines h2 {
        font-size: 1.5em;
        margin-bottom: 20px;
      }
      
      .guidelines p {
        font-size: 1.1em;
        margin-bottom: 10px;
        color: #d27979;
      }

      h2 {
        color:#c65353;
        font-size: 2em;
        
      }
      
      `}
      </style>
      <div className="missing-person-form-container">
        <div className="header">
          <div className="guidelines"></div>
          <h1> Missing Person Report </h1>

          <p>
            If you've seen someone who is missing, please provide as much
            information as you can to help reunite them with their loved ones.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastSeen">Last Seen Location:</label>
            <input
              type="text"
              id="lastSeen"
              name="lastSeen"
              value={formData.lastSeen}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactInfo">Contact Information:</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="guidelines">
          <h2>What to do when a person is missing:</h2>
          <p>i. Immediately contact local authorities.</p>
          <p>
            ii. Provide as much information about the missing person as
            possible.
          </p>
          <p>
            iii. Share information on social media and with local community
            groups.
          </p>
          <p>
            iv. Keep a recent photo of the missing person handy for
            identification purposes.
          </p>
          <p>
            v. Remain in contact with authorities and update them with any new
            information.
          </p>
        </div>
      </div>
    </>
  );
};

export default Orders;
