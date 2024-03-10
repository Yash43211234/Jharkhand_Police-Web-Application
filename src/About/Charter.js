import React from "react";

const Charter = () => {
  return (
    <>
      <style>
        {`
      .page-container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 20px;
        font-size:16px;
        font-family: Arial, sans-serif;
      }
      
      .page-heading {
        text-align: center;
        color: #ff5722; /* Deep Orange */
      }
      
      .content {
        margin-bottom: 20px;
      }
      
      .characters-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      
      .characters-table th,
      .characters-table td {
        border: 1px solid #9c27b0; /* Deep Purple */
        padding: 10px;
        text-align: left;
      }
      
      .characters-table th {
        background-color: #673ab7; /* Deep Purple */
        color: #fff;
      }
      
      .characters-table tbody tr:nth-child(even) {
        background-color: #f3e5f5; /* Purple Lighten-5 */
      }
      
      .characters-table tbody tr:nth-child(odd) {
        background-color: #ede7f6; /* Purple Lighten-4 */
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">
          Citizen Characters for Jharkhand Police
        </h1>

        <div className="content">
          <p>
            The Jharkhand Police government recognizes the valuable
            contributions of citizen characters in maintaining law and order and
            ensuring the safety of the community. Here are some notable citizen
            characters who have demonstrated courage, integrity, and dedication
            in assisting law enforcement agencies.
          </p>
        </div>

        <table className="characters-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Occupation</th>
              <th>Location</th>
              <th>Award</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr. Ramesh Kumar</td>
              <td>Social Worker</td>
              <td>Ranchi</td>
              <td>Bravery Award</td>
            </tr>
            <tr>
              <td>Ms. Sunita Devi</td>
              <td>Teacher</td>
              <td>Dhanbad</td>
              <td>Citizen of the Year</td>
            </tr>
            <tr>
              <td>Mr. Ajay Singh</td>
              <td>Businessman</td>
              <td>Hazaribagh</td>
              <td>Community Service Medal</td>
            </tr>
          </tbody>
        </table>

        <div className="content">
          <p>
            These citizen characters serve as role models for others and inspire
            positive change within the community. Their selfless actions and
            commitment to upholding the law contribute significantly to the
            welfare of society.
          </p>
        </div>
      </div>
    </>
  );
};

export default Charter;
