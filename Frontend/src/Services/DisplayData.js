import React, { useState, useEffect } from "react";

const DisplayData = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");

      }
      console.log("error")
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Form Data</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Police Station</th>
            <th>Subject</th>
            <th>Complaint Type</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Address</th>
            <th>City</th>
            <th>Postal Code</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Authorized Code</th>
            <th>Your Complaint</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
             <tr key={index}>
              <td>{data.policeStation}</td>
              <td>{data.subject}</td>
              <td>{data.complaintType}</td>
              <td>{data.name}</td>
              <td>{data.gender}</td>
              <td>{data.address}</td>
              <td>{data.city}</td>
              <td>{data.postalCode}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.authorizedCode}</td>
              <td>{data.yourComplaint}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
