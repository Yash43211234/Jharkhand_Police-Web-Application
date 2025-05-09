import React from "react";

const Medal = () => {
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
        color: #039be5; /* Blue */
      }
      
      .content {
        margin-bottom: 20px;
      }
      
      .medals-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      
      .medals-table th,
      .medals-table td {
        border: 1px solid #d32f2f; /* Red */
        padding: 10px;
        text-align: left;
      }
      
      .medals-table th {
        background-color: #f44336; /* Red */
        color: #fff;
      }
      
      .medals-table tbody tr:nth-child(even) {
        background-color: #ffcdd2; /* Pink */
      }
      
      .medals-table tbody tr:nth-child(odd) {
        background-color: #ffebee; /* Pink Lighten-5 */
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">Medals for Jharkhand Police</h1>

        <div className="content">
          <p>
            The Jharkhand Police government recognizes the outstanding
            contributions and achievements of its officers and personnel through
            the awarding of various medals and honors. Here are some of the
            medals awarded to deserving individuals for their exemplary service
            and bravery.
          </p>
        </div>

        <table className="medals-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rank</th>
              <th>Medal</th>
              <th>Date Awarded</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inspector Rajesh Kumar</td>
              <td>Inspector</td>
              <td>Gallantry Medal</td>
              <td>March 5, 2023</td>
            </tr>
            <tr>
              <td>Constable Priya Singh</td>
              <td>Constable</td>
              <td>Meritorious Service Medal</td>
              <td>April 12, 2023</td>
            </tr>
            <tr>
              <td>Sub-Inspector Vikram Singh</td>
              <td>Sub-Inspector</td>
              <td>Distinguished Service Medal</td>
              <td>February 20, 2023</td>
            </tr>
          </tbody>
        </table>

        <div className="content">
          <p>
            These medals serve as a testament to the dedication, bravery, and
            professionalism of the Jharkhand Police force. They inspire others
            to strive for excellence and uphold the highest standards of
            integrity and service in their duties.
          </p>
        </div>
      </div>
    </>
  );
};

export default Medal;
