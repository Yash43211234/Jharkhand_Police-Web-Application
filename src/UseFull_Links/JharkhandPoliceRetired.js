import React, { useState } from "react";

const JharkhandPoliceRetired = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    rank: "",
    serviceNumber: "",
    division: "",
    contactNumber: "",
    email: "",
    expertise: "",
    yearsOfExperience: "",
    awards: "",
    additionalComments: "",
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

      .page-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Roboto', sans-serif;
      }
      
      .page-heading {
        text-align: center;
        color: #007bff;
      }
      
      .form-container {
        background-color: #f8f9fa;
        padding: 20px;
        border: 2px solid #007bff;
        border-radius: 10px;
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
        width: 100%;
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
      <div className="page-container">
        <h1 className="page-heading">
          Jharkhand Police Retired Talent in Police Service
        </h1>
        <div className="form-container">
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
            <label className="form-label">Rank:</label>
            <input
              type="text"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label className="form-label">Service Number:</label>
            <input
              type="text"
              name="serviceNumber"
              value={formData.serviceNumber}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label className="form-label">Division:</label>
            <input
              type="text"
              name="division"
              value={formData.division}
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
              required
              className="form-input"
            />
            <label className="form-label">Expertise:</label>
            <input
              type="text"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label className="form-label">Years of Experience:</label>
            <input
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label className="form-label">Awards (if any):</label>
            <input
              type="text"
              name="awards"
              value={formData.awards}
              onChange={handleChange}
              className="form-input"
            />
            <label className="form-label">
              Additional Comments (Optional):
            </label>
            <textarea
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleChange}
              className="form-input"
            ></textarea>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JharkhandPoliceRetired;
