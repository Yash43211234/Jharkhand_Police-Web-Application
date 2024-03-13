<<<<<<< HEAD:src/components/Orders.js
// MissingPersonForm.js
=======

>>>>>>> 8efc141736fd55cffec1c8181296fa5cd30406fd:src/UseFull_Links/Orders.js

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

<<<<<<< HEAD:src/components/Orders.js
      h2 {
        color:#c65353;
        font-size: 2em;
        
      }
      
      `}
=======
a {
    display: block;
    
    color: rgb(54, 54, 136);
    text-decoration: none;
    text-align: left;
    
}

.white {
    background-color: #fff;
}

.grey {
    background-color: rgb(228, 228, 228);
}

.text-center.dis.mb-5 {
    text-align: center;
}

.tb {
    width: 1500px;
    text-align:center;
}

td {
    padding: 20px;
}
.td3{
  width:150px;
  h4{
    color:red;
  }
}


`}
>>>>>>> 8efc141736fd55cffec1c8181296fa5cd30406fd:src/UseFull_Links/Orders.js
      </style>
      <div className="missing-person-form-container">
        <div className="header">
          <div className="guidelines"></div>
          <h1> Missing Person Report </h1>

<<<<<<< HEAD:src/components/Orders.js
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
=======
      <div>
        <div class="col-md-12 text-center">
          <h1 class="text-center dis mb-5"> Law and Orders </h1>

          <div class="row">
            <table class="table table-striped">
              <tbody>
                <tr class="grey">
                  <td valign="top" align="center" className="td3">
                    SL. No.
                  </td>
                  <td valign="top" align="center" className="tb">
                    <h3> Laws/Orders </h3>
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h3> PDF</h3>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    1.
                  </td>
                  <td valign="top" align="center" className="tb">
                    While on duty, Police officers shall be accessible to
                    members of public.
                  </td>
                  <td valign="top" align="left" className="td3">
                    <h4> PDF 1</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    2.
                  </td>
                  <td valign="top" align="center" className="tb">
                    It is the duty of every Police Officer in charge of an area
                    to keep it peaceful and the public satisfied with the
                    security afforded to persons and property.
                  </td>
                   <td 
                   valign="top" align="left" className="td3">
                    <h4> PDF 2</h4>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    3.
                  </td>
                  <td valign="top" align="center" className="tb">
                    The Jurisdiction of every "Police Station is normally
                    divided into areas for service of beats by the Officer in
                    charge by deputing Police Constables /Head Constables.
                  </td>
                   <td valign="top" align="left" className="td3">
                    <h4> PDF 3</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    4.
                  </td>
                  <td valign="top" align="center" className="tb">
                    It is the duty of every police officer to take all steps
                    necessary, in proper time, to prevent breach of peace or
                    serious riots. In the event, it takes place, all measures
                    shall be taken by him with highest priority to bring the
                    situation back to normal
                  </td>
                   <td valign="top" align="left" className="td3">
                    <h4> PDF 4</h4>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    5.
                  </td>
                  <td valign="top" align="center" className="tb">
                    Every Police Officer shall maintain close liaison with the
                    important citizens of the area through citizens' committee,
                    peace committee and moholla committee for the maintenance of
                    peace in the area.
                  </td>
                   <td valign="top" align="left" className="td3">
                    <h4> PDF 5</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    6.
                  </td>
                  <td valign="top" align="center" className="tb">
                    It is the duty of every Police Officer to take firm action
                    against antisocial elements, goondas and rowdies in that
                    area.
                  </td>
                   <td valign="top" align="left" className="td3">
                    <h4> PDF 6</h4>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    7.
                  </td>
                  <td valign="top" align="center" className="tb">
                    It is the duty of the Police to maintain public order during
                    fairs and festivals, public functions, processions, strikes,
                    agitations etc.
                  </td>
                   <td valign="top" align="left" className="td3">
                    <h4> PDF 7</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    8.
                  </td>
                  <td valign="top" align="center" className="tb">
                    No Police Officer shall discriminate on grounds of race,
                    caste, community, language, religion, region, sex or
                    political affiliation.
                  </td>
                   <td valign="top" align="left" className="td3">
                    <h4> PDF 8</h4>
                  </td>
                </tr>
                <tr class="white">
                  <td valign="top" align="center">
                    9.
                  </td>
                  <td valign="top" align="center" className="tb">
                    Police Officers may be deputed for a short duration, to
                    maintain order and peace, at places of entertainment, etc by
                    charging fees according to the scale fixed by the Govt. from
                    time to time
                  </td>
                   <td valign="top" align="left" className="td3">
                    <h4> PDF 9</h4>
                  </td>
                </tr>
                <tr class="grey">
                  <td valign="top" align="center">
                    10.
                  </td>
                  <td valign="top" align="center" className="tb">
                    Citizens may contribute to the general- well being of the
                    society by rendering all assistance, cooperation and by
                    providing information to Police Officers for the maintenance
                    of law and order and prevention of breach of peace.
                  </td>
                   <td valign="top" align="left" className="td3">
                    <h4> PDF 10</h4>
                  </td>
                </tr>
              </tbody>
            </table>
>>>>>>> 8efc141736fd55cffec1c8181296fa5cd30406fd:src/UseFull_Links/Orders.js
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
