import React, { useState } from "react";

const Tff = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    dateOfIncident: "",
    timeOfIncident: "",
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
        border: 2px solid #ff5733;
        border-radius: 10px;
        background-color: #fff3e6;
      }
      
      .form-heading {
        text-align: center;
        color: #ff5733;
      }
      
      .form {
        display: flex;
        flex-direction: column;
      }
      
      .form-label {
        margin-bottom: 5px;
        color: #ff5733;
      }
      
      .form-input {
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      
      .form-button {
        padding: 10px;
        background-color: #ff5733;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
      }
      
      .form-button:hover {
        background-color: #e94a00;
      }
      
      `}
      </style>
      <div className="form-container">
        <h2 className="form-heading">File Theft FIR</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="form-input"
          ></textarea>
          <label className="form-label">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Date of Incident:</label>
          <input
            type="date"
            name="dateOfIncident"
            value={formData.dateOfIncident}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Time of Incident:</label>
          <input
            type="time"
            name="timeOfIncident"
            value={formData.timeOfIncident}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
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

export default Tff;
