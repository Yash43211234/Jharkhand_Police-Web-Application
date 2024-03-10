import React from "react";


const RecruitmentContent = () => {
  return (
    <>

      <style>
        {`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      .page-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        font-size:16px;
        font-family: 'Roboto', sans-serif;
      }
      
      .page-heading {
        text-align: center;
        color: #8b4513; /* Brown */
      }
      
      .recruitment-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }
      
      .recruitment-table th,
      .recruitment-table td {
        border: 1px solid #8b4513; /* Brown */
        padding: 8px;
        text-align: center;
      }
      
      .recruitment-table th {
        background-color: #ffd700; /* Yellow */
        color: #8b4513; /* Brown */
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">Jharkhand Weekly Practices Recruitment</h1>
        <table className="recruitment-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Department</th>
              <th>Location</th>
              <th>Qualification</th>
              <th>Age Limit</th>
              <th>Salary</th>
              <th>Apply By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Police Officer</td>
              <td>Jharkhand Police Department</td>
              <td>Ranchi</td>
              <td>Graduate Degree</td>
              <td>21-30 years</td>
              <td>Rs. 30,000 per month</td>
              <td>March 31, 2023</td>
            </tr>
            <tr>
              <td>Sub-Inspector</td>
              <td>Jharkhand Police Department</td>
              <td>Hazaribagh</td>
              <td>Bachelor's Degree</td>
              <td>20-28 years</td>
              <td>Rs. 35,000 per month</td>
              <td>April 15, 2023</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecruitmentContent;
