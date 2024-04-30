import React from "react";

const YogafunPages = () => {
  return (
    <>
      <style>
        {`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      .page-container {
        max-width: 800px;
        font-size:20px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Roboto', sans-serif;
      }
      
      .page-heading {
        text-align: center;
        color: #007bff;
      }
      
      .funds-info {
        background-color: #f8f9fa;
        padding: 20px;
        border: 2px solid #007bff;
        border-radius: 10px;
      }
      
      .funds-info p {
        margin-bottom: 20px;
      }
      
      .funds-info h2 {
        color: #007bff;
        margin-bottom: 10px;
      }
      
      .funds-info ul {
        margin-left: 20px;
      }
      
      .funds-info li {
        margin-bottom: 5px;
      }
      
      `}
      </style>
      <div className="page-container">
      <p >New Funds will display here</p>

        <h1 className="page-heading">Funds for yuva</h1>
        <div className="funds-info">
          <p>
            The government has allocated significant funds to support the youth
            (yuva) of our nation. These funds are aimed at providing various
            opportunities and resources to empower the youth and enable them to
            contribute effectively to the nation's development.
          </p>
          <h2>Key Objectives of yuva Funds:</h2>
          <ul>
            <li>Encourage entrepreneurship among youth</li>
            <li>Provide skill development programs</li>
            <li>Support education and training initiatives</li>
            <li>Promote innovation and creativity</li>
            <li>Facilitate employment opportunities</li>
          </ul>
          <p>
            The government is committed to ensuring that the youth have access
            to the necessary resources and support to fulfill their potential
            and become valuable contributors to society.
          </p>
        </div>
      </div>
    </>
  );
};

export default YogafunPages;
