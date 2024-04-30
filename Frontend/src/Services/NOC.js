import React, { useState } from "react";

const NOC = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantAddress: "",
    contactNumber: "",
    email: "",
    purpose: "",
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
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      .form-container {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #3f51b5;
        border-radius: 10px;
        background-color: #f5f5f5;
        font-family: 'Roboto', sans-serif;
      }
      
      .form-heading {
        text-align: center;
        color: #3f51b5;
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .form {
        display: flex;
        flex-direction: column;
      }
      
      .form-label {
        margin-bottom: 5px;
        color: #3f51b5;
      }
      
      .form-input {
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      
      .form-button {
        padding: 10px;
        background-color: #3f51b5;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
      }
      
      .form-button:hover {
        background-color: #303f9f;
      }
      
      `}
      </style>
      <div className="form-container">
        <h2 className="form-heading">NOC / License FIR Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">Applicant's Name:</label>
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Applicant's Address:</label>
          <textarea
            name="applicantAddress"
            value={formData.applicantAddress}
            onChange={handleChange}
            required
            className="form-input"
          ></textarea>
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
          <label className="form-label">Purpose:</label>
          <input
            type="text"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="form-input"
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

export default NOC;
