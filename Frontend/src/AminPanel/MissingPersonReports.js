import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MissingPersonReports() {
  const [missingPerson, setMissingPerson] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/missing-person-reports");
      setMissingPerson(response.data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };


  return (
    <div>
      <h2>Missing Person Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Complaint Type</th>
            <th>Full Name</th>
            <th>D.O.B</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Clothes</th>
            <th>Appearance</th>
            <th>Last Seen Location</th>
            <th>Last Seen Time</th>
            <th>Contact Name</th>
            <th>Contact Number</th>
            <th>Photo</th>
            <th>Description</th>

            {/* Add other table headers for the fields you want to display */}
          </tr>
        </thead>
       
        <tbody>
          {missingPerson.map((item, index) => (
            <tr key={index}>
              <td>{item.email}</td>
              <td>{item.complaint_type}</td>
              <td>{item.full_name}</td>
              <td>{item.dob}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.height}</td>
              <td>{item.weight}</td>
              <td>{item.clothes}</td>
              <td>{item.appearance}</td>
              <td>{item.last_seen_location}</td>
              <td>{item.last_seen_time}</td>
              <td>{item.contact_name}</td>
              <td>{item.contact_phone_number}</td>
              <td>{item.photo}</td>
              <td>{item.description}</td>

              
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

export default MissingPersonReports;
