import React, { useState } from "react";
import axios from 'axios';


const Feedback = () => {

  //initialize state
  const [formData, setFormData] = useState({
    name: '',
    message: ''

  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //authentication logic here
  const handleSubmitdata = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/feedback", formData);
      console.log(response.data);
      console.log(" submit ho gaya chalo aage badho ")
      event.target.reset(); // Reset form inputs area

    } catch (error) {
      console.error('Error:', error);
      console.log("data backened mai nahi gaya");
    }
  }


  return (
    <>
      <div className="page-box">
        <h1 className="page-first-heading">Feedback for Jharkhand Police</h1>

        <div className="contents">
          <p>
            We value your feedback! Please share your thoughts, suggestions, or
            concerns regarding the services provided by the Jharkhand Police
            government.
          </p>
        </div>
        <form onSubmit={handleSubmitdata}>
          <label >Name:</label>
          <input className="form-team"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label >Message:</label>
          <input className="form-team"
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="button" type="submit">Submit</button>
        </form>

        <table className="feedback-list">
          <tr>
            <th>
              Name:
            </th>
            <th>
              Message:
            </th>

          </tr>
        </table>
      </div>
      <style>
        {
          `
          
.page-box {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-size:16px;
  font-family: Arial, sans-serif;
  }
  
  .page-first-heading {
  text-align: center;
  color: #ff5722; /* Deep Orange */
  }
  
  .contents {
  margin-bottom: 20px;
  }
  
  .form-team {
  margin-bottom: 20px;
  }
  
  label {
  font-weight: bold;
  }
  
  input[type='text'],
  textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  }
  
  .button {
  padding: 10px 20px;
  background-color: #4caf50; /* Green */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  }
  
  button:hover {
  background-color: #388e3c; /* Green Darken-2 */
  }
  
  .feedback-list {
  margin-top: 30px;
  }
  
  .feedback-list table {
  width: 100%;
  border-collapse: collapse;
  }
  .feedback-list th{
      width:500px;;
  }
  
  .feedback-list th,
  .feedback-list td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  }
  
  .feedback-list th {
  background-color: #f2f2f2; /* Light Grey */
  color: #333;
  }
  
  
  
          `
        }
      </style>

    </>
  );
};

export default Feedback;
