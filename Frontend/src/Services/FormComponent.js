import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for DatePicker

function FormComponent() {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    engineNumber: '',
    chassisNumber: '',
    date: new Date()
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/MissingVehicle", formData);
      console.log(response.data);
      event.target.reset(); // Reset form fields

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vehicleNumber">Vehicle Number</label>
        <input
          type="text"
          id="vehicleNumber"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="engineNumber">Engine Number:</label>
        <input
          type="text"
          id="engineNumber"
          name="engineNumber"
          value={formData.engineNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="chassisNumber">Chassis number:</label>
        <input
          type="text"
          id="chassisNumber"
          name="chassisNumber"
          value={formData.chassisNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="date">Date:</label>
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          required
        />
        <button className='apply-btn' type="submit">Apply</button>
      </form>

      <style>
        {
          `
          form {
            text-align: center;
            width: 800px;
            margin: auto;
          }

          label {
            margin-bottom: 5px;
            display: block;
          }

          input,
          .apply-btn,
          .react-datepicker-wrapper {
            margin-bottom: 10px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            box-sizing: border-box;
          }

          .apply-btn {
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
          }

          .apply-btn:hover {
            background-color: #0056b3;
          }
          `
        }
      </style>
    </div>
  );
}

export default FormComponent;
