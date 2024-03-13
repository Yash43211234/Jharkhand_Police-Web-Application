import React from "react";

const JharkhandWeeklyPractices = () => {
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
        color: brown;
      }
      
      .practices-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }
      
      .practices-table th,
      .practices-table td {
        border: 1px solid brown;
        padding: 8px;
        text-align: center;
      }
      
      .practices-table th {
        background-color: grey;
        color: brown;
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">Jharkhand Weekly Practices</h1>
        <table className="practices-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Location</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Physical Training</td>
              <td>Police Ground</td>
              <td>6:00 AM - 7:30 AM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Weapon Training</td>
              <td>Training Center</td>
              <td>9:00 AM - 12:00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Community Policing</td>
              <td>Local Communities</td>
              <td>10:00 AM - 12:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Crime Prevention Seminar</td>
              <td>Police Station</td>
              <td>2:00 PM - 4:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>Traffic Management Workshop</td>
              <td>City Center</td>
              <td>10:00 AM - 12:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JharkhandWeeklyPractices;
