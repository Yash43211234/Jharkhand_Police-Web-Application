import React, { useState } from 'react';

const CharacterCert = () => {
  const [firDetails, setFirDetails] = useState({
    complainantName: '',
    complainantAddress: '',
    complainantContact: '',
    incidentDate: '',
    incidentTime: '',
    incidentLocation: '',
    incidentDetails: '',
    witnessName: '',
    witnessContact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFirDetails({
      ...firDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log('FIR Details:', firDetails);
    // Reset form fields after submission
    setFirDetails({
      complainantName: '',
      complainantAddress: '',
      complainantContact: '',
      incidentDate: '',
      incidentTime: '',
      incidentLocation: '',
      incidentDetails: '',
      witnessName: '',
      witnessContact: ''
    });
  };

  return (


    <>
      <form onSubmit={handleSubmit}>
        <label>
          Complainant Name:
          <input type="text" name="complainantName" value={firDetails.complainantName} onChange={handleChange} />
        </label>
        <label>
          Complainant Address:
          <input type="text" name="complainantAddress" value={firDetails.complainantAddress} onChange={handleChange} />
        </label>
        <label>
          Complainant Contact:
          <input type="text" name="complainantContact" value={firDetails.complainantContact} onChange={handleChange} />
        </label>
        <label>
          Incident Date:
          <input type="date" name="incidentDate" value={firDetails.incidentDate} onChange={handleChange} />
        </label>
        <label>
          Incident Time:
          <input type="time" name="incidentTime" value={firDetails.incidentTime} onChange={handleChange} />
        </label>
        <label>
          Incident Location:
          <input type="text" name="incidentLocation" value={firDetails.incidentLocation} onChange={handleChange} />
        </label>
        <label>
          Incident Details:
          <textarea name="incidentDetails" value={firDetails.incidentDetails} onChange={handleChange} />
        </label>
        <label>
          Witness Name:
          <input type="text" name="witnessName" value={firDetails.witnessName} onChange={handleChange} />
        </label>
        <label>
          Witness Contact:
          <input type="text" name="witnessContact" value={firDetails.witnessContact} onChange={handleChange} />
        </label>
        <button type="submit">Submit FIR</button>
      </form>
      <style>
        {
          `
        /* Style for the form container */
.form-container {
  width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

/* Style for form labels */
label {
  display: block;
  margin-bottom: 10px;
}

/* Style for form inputs */
input[type="text"],
input[type="date"],
input[type="time"],
input[type="email"],
textarea {
  width: 800px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Ensure padding and border are included in the width */
}

/* Style for the submit button */
button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Hover effect for the submit button */
button[type="submit"]:hover {
  background-color: #45a049;
}
        `
        }
      </style>
    </>
  );
};

export default CharacterCert;