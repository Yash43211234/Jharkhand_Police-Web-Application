import React, { useState } from 'react';
import axios from 'axios';

const MissingPersonForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    complaint_type: '',
    full_name: '',
    dob: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    clothes: '',
    appearance: '',
    last_seen_location: '',
    last_seen_time: '',
    contact_name: '',
    contact_phone_number: '',
    description: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:3001/api/missing-person-reports', formData);
      console.log(response.data);
      
      // Optionally, reset the form after submission
      setFormData({
        email: '',
        complaint_type: '',
        full_name: '',
        dob: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        clothes: '',
        appearance: '',
        last_seen_location: '',
        last_seen_time: '',
        contact_name: '',
        contact_phone_number: '',
        description: '',
        photo: null,
      });
    } catch (error) {
      console.error('Error submitting missing person report:', error);
    }
  };

  return (
    <div>
      <h2>Missing Person Report Form</h2>
      <div class="form-container">
        <h2 class="form-title">Missing Person Report Form</h2>
        <form onSubmit={handleSubmit} class="missing-person-form">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required class="form-input" />

          <label for="complaint_type" class="form-label">Complaint Type:</label>
          <select id="complaint_type" name="complaint_type" value={formData.complaintType} onChange={handleChange} required class="form-input">
            <option value="">Select</option>
            <option value="Missing person">Missing person</option>
            <option value="Missing child">Missing child</option>
            <option value="Missing senior citizen">Missing senior citizen</option>
            <option value="Reporting a found person">Reporting a found person</option>
          </select>


          <label for="full_name" class="form-label">Full Name:</label>
          <input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} required class="form-input" />

          <label for="dob" class="form-label">Date of Birth (DOB):</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required class="form-input" />

          <label for="age" class="form-label">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required class="form-input" />

          <label for="gender" class="form-label">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required class="form-input">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label for="height" class="form-label">Height:</label>
          <input type="text" id="height" name="height" value={formData.height} onChange={handleChange} required class="form-input" />

          <label for="weight" class="form-label">Weight:</label>
          <input type="text" id="weight" name="weight" value={formData.weight} onChange={handleChange} required class="form-input" />

          <label for="clothes" class="form-label">Clothes:</label>
          <input type="text" id="clothes" name="clothes" value={formData.clothes} onChange={handleChange} required class="form-input" />

          <label for="appearance" class="form-label">Appearance:</label>
          <textarea id="appearance" name="appearance" value={formData.appearance} onChange={handleChange} required class="form-input"></textarea>

          <label for="last_seen_location" class="form-label">Last Seen Location:</label>
          <input type="text" id="last_seen_location" name="last_seen_location" value={formData.last_seen_location} onChange={handleChange} required class="form-input" />

          <label for="last_seen_time" class="form-label">Last Seen Time:</label>
          <input type="datetime-local" id="last_seen_time" name="last_seen_time" value={formData.last_seen_time} onChange={handleChange} required class="form-input" />

          <label for="contact_name" class="form-label">Contact Name:</label>
          <input type="text" id="contact_name" name="contact_name" value={formData.contact_name} onChange={handleChange} required class="form-input" />

          <label for="contact_phone_number" class="form-label">Contact Phone Number:</label>
          <input type="tel" id="contact_phone_number" name="contact_phone_number" value={formData.contact_phone_number} onChange={handleChange} required class="form-input" />

          <label for="description" class="form-label">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required class="form-input"></textarea>

          <label for="photo" class="form-label">Photograph/Identifying Document:</label>
          <input type="file" id="photo" name="photo" accept="image/*" onChange={handleChange} required class="form-input" />

          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>


      <style>
        {
          `
          /* Styling for the form container */
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Styling for form labels */
.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

/* Styling for form inputs */
.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Styling for the submit button */
.submit-btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}

/* Additional styles as needed */

          `
        }
      </style>
    </div>
  );
};
export default MissingPersonForm;
