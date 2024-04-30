import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayLostDevices() {
  const [lostDevices, setLostDevices] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/addDevice");
      setLostDevices(response.data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  return (
    <div>
      <h2>Lost Devices</h2>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>IMEI</th>
            <th>Date of Loss</th>
            <th>Location of Loss</th>
            <th>Owner Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Device Image</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {lostDevices.map((device, index) => (
            <tr key={index}>
              <td>{device.Brand}</td>
              <td>{device.Model}</td>
              <td>{device.Color}</td>
              <td>{device.IMEI}</td>
              <td>{device.DateOfLoss}</td>
              <td>{device.LocationOfLoss}</td>
              <td>{device.OwnerName}</td>
              <td>{device.ContactNumber}</td>
              <td>{device.Email}</td>
              <td>{device.DeviceImage}</td>
              <td>{device.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>
        {
`
/* styles.css */

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

/* Table header */
thead {
  background-color: #f2f2f2;
}

thead th {
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
}

/* Table body */
tbody td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Alternating row colors */
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

`

        }
      </style>
    </div>
  );
}

export default DisplayLostDevices;
