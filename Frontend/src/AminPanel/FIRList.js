import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FIRList() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/MissingVehicle");
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  return (
    <div>
      <h2>Stolen Vehicles</h2>
      <table>
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Engine Number</th>
            <th>Chassis Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.vehicleNumber}</td>
              <td>{item.engineNumber}</td>
              <td>{item.chassisNumber}</td>
              <td>
                  <ul className='modify'>
                    <li><button>Update</button></li>
                    <li><button>View</button></li>
                    <li><button>Delete</button></li>
                  </ul>
                  
              </td>

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
.modify li{
  list-style:none;
}

            `
        }
      </style>
    </div>
  );
}

export default FIRList;
