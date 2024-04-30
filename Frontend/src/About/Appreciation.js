import React from "react";

const Appreciation = () => {
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
        color: #009688; /* Teal */
      }
      
      .content {
        margin-bottom: 20px;
      }
      
      .appreciation-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      
      .appreciation-table th,
      .appreciation-table td {
        border: 1px solid #7e57c2; /* Deep Purple */
        padding: 10px;
        text-align: left;
      }
      
      .appreciation-table th {
        background-color: #673ab7; /* Deep Purple */
        color: #fff;
      }
      
      .appreciation-table tbody tr:nth-child(even) {
        background-color: #e1bee7; /* Purple Lighten-4 */
      }
      
      .appreciation-table tbody tr:nth-child(odd) {
        background-color: #f3e5f5; /* Purple Lighten-5 */
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">Appreciation by Jharkhand Police</h1>

        <div className="content">
          <p>
            The Jharkhand Police government recognizes and appreciates the
            outstanding efforts and contributions of individuals and
            organizations towards maintaining law and order, ensuring public
            safety, and supporting the police force in various initiatives. Here
            are some instances of appreciation given by the Jharkhand Police
            government.
          </p>
        </div>

        <table className="appreciation-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Organization</th>
              <th>Contribution</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr. Abhishek Kumar</td>
              <td>NGO - Help Foundation</td>
              <td>Provided support during a flood relief operation</td>
              <td>July 15, 2023</td>
            </tr>
            <tr>
              <td>Ms. Ritu Sharma</td>
              <td>Local Business Owner</td>
              <td>Donated medical supplies during COVID-19 pandemic</td>
              <td>April 2, 2023</td>
            </tr>
            <tr>
              <td>Mr. Rajesh Singh</td>
              <td>Community Leader</td>
              <td>Organized a cleanliness drive in the neighborhood</td>
              <td>October 18, 2022</td>
            </tr>
          </tbody>
        </table>

        <div className="content">
          <p>
            These instances of appreciation highlight the importance of
            collaboration between the police force and the community in
            maintaining law and order and ensuring the overall well-being of
            society.
          </p>
        </div>
      </div>
    </>
  );
};

export default Appreciation;
