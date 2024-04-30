import React, { useState } from "react";

const MissingStolenMobiles = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    color: "",
    imei: "",
    dateOfLoss: "",
    locationOfLoss: "",
    ownerName: "",
    contactNumber: "",
    email: "",
    deviceImage:"",
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
        <h2 className="form-heading">Report Missing or Stolen Mobile Phone</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">IMEI Number:</label>
          <input
            type="text"
            name="imei"
            value={formData.imei}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Date of Loss:</label>
          <input
            type="date"
            name="dateOfLoss"
            value={formData.dateOfLoss}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Location of Loss:</label>
          <input
            type="text"
            name="locationOfLoss"
            value={formData.locationOfLoss}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Owner's Name:</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
           <label className="form-label">Device Photo:</label>
          <input
            type="file"
            name="deviceImage"
            value={formData.deviceImage}
            onChange={handleChange}
            
          />
          <label className="form-label">Description (Optional):</label>
          <textarea
            name="description"
            value={formData.description}
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

export default MissingStolenMobiles;
