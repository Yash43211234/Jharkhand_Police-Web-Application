import React from "react";

const Kissa = () => {
  return (
    <>
      <style>
        {`
      .page-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
      }
      
      .page-heading {
        text-align: center;
        color: #673ab7; /* Deep Purple */
      }
      
      .content {
        margin-bottom: 20px;
      }
      
      .kissa-khaki-ka-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      
      .kissa-khaki-ka-table th,
      .kissa-khaki-ka-table td {
        border: 1px solid #4caf50; /* Green */
        padding: 10px;
        text-align: left;
      }
      
      .kissa-khaki-ka-table th {
        background-color: #8bc34a; /* Light Green */
        color: #fff;
      }
      
      .kissa-khaki-ka-table tbody tr:nth-child(even) {
        background-color: #c8e6c9; /* Light Green Lighten-3 */
      }
      
      .kissa-khaki-ka-table tbody tr:nth-child(odd) {
        background-color: #e8f5e9; /* Light Green Lighten-4 */
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">Kissa Khaki Ka - Tales of the Khaki</h1>

        <div className="content">
          <p>
            "Kissa Khaki Ka" is a series of stories and incidents showcasing the
            bravery, dedication, and valor of the officers and personnel of the
            Jharkhand Police. These tales highlight the challenges faced by law
            enforcement officers and their relentless pursuit of justice.
          </p>
        </div>

        <table className="kissa-khaki-ka-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Story</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>April 10, 2023</td>
              <td>Officer rescues kidnapped child in daring operation</td>
              <td>The Telegraph</td>
            </tr>
            <tr>
              <td>March 25, 2023</td>
              <td>Brave constable foils robbery attempt, saves lives</td>
              <td>Dainik Bhaskar</td>
            </tr>
            <tr>
              <td>February 15, 2023</td>
              <td>
                Inspector honored for exemplary service during natural disaster
              </td>
              <td>Jagran</td>
            </tr>
          </tbody>
        </table>

        <div className="content">
          <p>
            These stories of courage and sacrifice serve as a tribute to the men
            and women in khaki who risk their lives every day to protect and
            serve the people of Jharkhand.
          </p>
        </div>
      </div>
    </>
  );
};

export default Kissa;
