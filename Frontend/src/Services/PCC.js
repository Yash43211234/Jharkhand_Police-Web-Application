import React, { useState } from "react";

const PCC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    postalCode: "",
    contactNumber: "",
    email: "",
    identification: "",
    reasonForCertificate: "",
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
        border: 2px solid #007bff;
        border-radius: 10px;
        background-color: #f8f9fa;
      }
      
      .form-heading {
        text-align: center;
        color: #007bff;
      }
      
      .form {
        display: flex;
        flex-direction: column;
      }
      
      .form-label {
        margin-bottom: 5px;
        color: #007bff;
      }
      
      .form-input {
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      
      .form-button {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
      }
      
      .form-button:hover {
        background-color: #0056b3;
      }
      
      `}
      </style>
      <div className="form-container">
        <h2 className="form-heading">Police Clearance Certificate Form</h2>
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
          <label className="form-label">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
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
          <label className="form-label">Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
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
          <label className="form-label">
            Identification (ID/Passport Number):
          </label>
          <input
            type="text"
            name="identification"
            value={formData.identification}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Reason for Certificate:</label>
          <textarea
            name="reasonForCertificate"
            value={formData.reasonForCertificate}
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

export default PCC;
