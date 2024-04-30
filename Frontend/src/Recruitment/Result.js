import React from "react";

const Result = () => {
  const resultsData = [
    { rollNumber: "202301", name: "#######", marks: 85, status: "Selected" },
    { rollNumber: "202302", name: "#######", marks: 78, status: "Selected" },
    {
      rollNumber: "202303",
      name: "######",
      marks: 72,
      status: "Selected",
    },
    {
      rollNumber: "202304",
      name: "#######",
      marks: 65,
      status: "Waiting List",
    },
    {
      rollNumber: "202305",
      name: "#######",
      marks: 58,
      status: "Rejected",
    },
  ];

  return (
    <>
      <style>
        {`
      .page-container {
       
        margin: -1px;
        
        font-family: Arial, sans-serif;
      }
      
      .page-heading {
        text-align: center;
        color: #4caf50; /* Green */
      }
      
      .content {
        margin-bottom: 20px;
      }
      
      .results-table {
        width: 100%;
        border-collapse: collapse;
       
      }
      iframe{
        margin-top:-20px;
      }
      
      .results-table th,
      .results-table td {
        border: 1px solid #ccc;
        
        text-align: left;
      }
      
      .results-table th {
        background-color: #f2f2f2; /* Light Grey */
        color: #333;
      }
      
      .results-table .selected {
        color: #4caf50; /* Green */
      }
      
      .results-table .waitinglist {
        color: #ff9800; /* Orange */
      }
      
      .results-table .rejected {
        color: #f44336; /* Red */
      }
      
      `}
      </style>
      <div className="page-container">
        {/* <h3>
          This section is Under process
        </h3>
        <h1 className="page-heading">Recruitment Results - Jharkhand Police</h1> */}

        <div>
          <iframe src="img/Jharkhand-Police-notification-pdf.pdf" width="100%" height="800px" title="Framed Content"></iframe>
        </div>
        {/* <div className="content">
          <p>
            Check the results of the recent recruitment exams conducted by the
            Jharkhand Police government. Below is the list of candidates along
            with their roll numbers, marks obtained, and status.
          </p>
        </div> */}

      </div>
    </>
  );
};

export default Result;
