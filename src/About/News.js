import React from "react";





const Orders = () => {
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
        color: #e91e63; /* Pink */
      }
      
      .content {
        margin-bottom: 20px;
      }
      
      .news-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      
      .news-table th,
      .news-table td {
        border: 1px solid #2196f3; /* Blue */
        padding: 10px;
        text-align: left;
      }
      
      .news-table th {
        background-color: #03a9f4; /* Light Blue */
        color: #fff;
      }
      
      .news-table tbody tr:nth-child(even) {
        background-color: #bbdefb; /* Blue Lighten-4 */
      }
      
      .news-table tbody tr:nth-child(odd) {
        background-color: #e3f2fd; /* Blue Lighten-5 */
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">In News - Jharkhand Police</h1>

        <div className="content">
          <p>
            Stay updated with the latest news and developments related to the
            Jharkhand Police government. Here are some recent news articles
            highlighting various initiatives, events, and achievements.
          </p>
        </div>

        <table className="news-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Headline</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>April 5, 2023</td>
              <td>Jharkhand Police launches community policing program</td>
              <td>The Times of India</td>
            </tr>
            <tr>
              <td>March 20, 2023</td>
              <td>Police crackdown on illegal drug trafficking</td>
              <td>Hindustan Times</td>
            </tr>
            <tr>
              <td>February 10, 2023</td>
              <td>Jharkhand Police introduces online FIR filing system</td>
              <td>NDTV</td>
            </tr>
          </tbody>
        </table>

        <div className="content">
          <p>
            These news articles provide insights into the efforts and
            achievements of the Jharkhand Police government in ensuring law and
            order, public safety, and effective policing across the state.
          </p>
        </div>
      </div>
    </>
  );
};

export default Orders;
