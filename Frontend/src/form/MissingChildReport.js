import React, { useState } from "react";

const MissingChildReport = () => {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    hairColor: "",
    eyeColor: "",
    lastSeenLocation: "",
    lastSeenDate: "",
    contactInfo: "",
    additionalInfo: "",
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
    // Here you can submit the form data
    console.log(formData);
    // You can also perform further actions like sending data to a server
    // For now, let's just log the form data
    alert("Form submitted successfully!");
  };

  return (
    <>
      <style>
        {`
      .form-container {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #4CAF50;
        border-radius: 10px;
        background-color: #f2f2f2;
      }
      
      .form-heading {
        text-align: center;
        color: #4CAF50;
      }
      
      .form {
        display: flex;
        flex-direction: column;
      }
      
      .form-label {
        margin-bottom: 5px;
        color: #4CAF50;
      }
      
      .form-input {
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      
      .form-button {
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
      }
      
      .form-button:hover {
        background-color: #45a049;
      }
      
      `}
      </style>
      <div className="form-container">
        <h2 className="form-heading">Missing Child Report</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">Child's Name:</label>
          <input
            type="text"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label className="form-label">Height:</label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Weight:</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Hair Color:</label>
          <input
            type="text"
            name="hairColor"
            value={formData.hairColor}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Eye Color:</label>
          <input
            type="text"
            name="eyeColor"
            value={formData.eyeColor}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Last Seen Location:</label>
          <input
            type="text"
            name="lastSeenLocation"
            value={formData.lastSeenLocation}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Last Seen Date:</label>
          <input
            type="date"
            name="lastSeenDate"
            value={formData.lastSeenDate}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Contact Info:</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Additional Info:</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="form-input"
          ></textarea>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default  MissingChildReport;
  
