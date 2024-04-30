import React, { useState } from "react";

const QuarterAllot = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantRank: "",
    applicantServiceNumber: "",
    applicantDivision: "",
    applicantContactNumber: "",
    spouseName: "",
    numberOfFamilyMembers: "",
    preferredQuarterType: "",
    preferredQuarterSize: "",
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

      .form-container {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #4caf50;
        border-radius: 10px;
        background-color: #e8f5e9;
        font-family: 'Roboto', sans-serif;
      }
      
      .form-heading {
        text-align: center;
        color: #4caf50;
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .form {
        display: flex;
        flex-direction: column;
      }
      
      .form-label {
        margin-bottom: 5px;
        color: #4caf50;
      }
      
      .form-input {
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      
      .form-button {
        padding: 10px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
      }
      
      .form-button:hover {
        background-color: #388e3c
      
      `}
      </style>
      <div className="form-container">
        <h2 className="form-heading">Quarter Allotment Form</h2>
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
          <label className="form-label">Applicant's Rank:</label>
          <input
            type="text"
            name="applicantRank"
            value={formData.applicantRank}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Service Number:</label>
          <input
            type="text"
            name="applicantServiceNumber"
            value={formData.applicantServiceNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Division:</label>
          <input
            type="text"
            name="applicantDivision"
            value={formData.applicantDivision}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Contact Number:</label>
          <input
            type="text"
            name="applicantContactNumber"
            value={formData.applicantContactNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Spouse's Name:</label>
          <input
            type="text"
            name="spouseName"
            value={formData.spouseName}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Number of Family Members:</label>
          <input
            type="number"
            name="numberOfFamilyMembers"
            value={formData.numberOfFamilyMembers}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Preferred Quarter Type:</label>
          <input
            type="text"
            name="preferredQuarterType"
            value={formData.preferredQuarterType}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Preferred Quarter Size:</label>
          <input
            type="text"
            name="preferredQuarterSize"
            value={formData.preferredQuarterSize}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Additional Comments (Optional):</label>
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
    </>
  );
};

export default QuarterAllot;
