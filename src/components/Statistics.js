import React from "react";

const Statistics = () => {
  return (
    <>
      <style>
        {`
       .page-container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
        
      }
      
      .page-heading {
        text-align: center;
        color: #1a237e; /* Dark Blue */
      }
      
      .content-container {
        margin-top: 20px;
      }
      
      .content-paragraph {
        color:  tomato;
        margin-bottom: 20px;
      }
      
      .statistics-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom:50px;
      }
      
      .statistics-table th,
      .statistics-table td {
        border: 1px solid #e65100; /* Orange */
        padding: 10px;
        text-align: left;
      }
      
      .statistics-table th {
        background-color: #e65100; /* Orange */
        color: #fff;
      }
      
      .statistics-table tbody tr:nth-child(even) { /*ishme select even table row only */
        background-color: #fff9c4; /* Light Yellow */
      }
      
      .statistics-table tbody tr:nth-child(odd) { /*ishme select odd table row only */
        background-color: #ffe0b2; /* Light Orange */
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">Jharkhand Government Statistics</h1>
        <div className="content-container">
          <p className="content-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet ullamcorper turpis. Morbi ac elit odio. Proin sodales vehicula
            sem. Curabitur ac turpis ac turpis maximus posuere. Sed feugiat
            purus at erat mollis posuere. Nulla sed ligula leo. Donec lacinia
            nisi a odio accumsan, a convallis tortor mattis. Sed in lorem vel
            dolor efficitur tempus.
          </p>
          <table className="statistics-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Population</td>
                <td>30,000,000</td>
              </tr>
              <tr>
                <td>GDP</td>
                <td>$14 billion</td>
              </tr>
              <tr>
                <td>Literacy Rate</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Unemployment Rate</td>
                <td>8%</td>
              </tr>
              <tr>
                <td>Item 5</td>
                <td>content 5</td>
              </tr>
              <tr>
                <td>Item 6</td>
                <td>content 6</td>
              </tr>
              <tr>
                <td>Item 7 </td>
                <td>content 7</td>
              </tr>
              
            </tbody>
           
          </table>
        </div>
      </div>
    </>
  );
};

export default Statistics;
