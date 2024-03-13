import React from "react";

const JpGp = () => {
  return (
    <>
      <style>
        {`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      .page-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-size:16px;
        font-family: 'Roboto', sans-serif;
      }
      
      .page-heading {
        text-align: center;
        color: #ff4081; /* Pink color */
      }
      
      .gadgets-info {
        background-color: #fce4ec; /* Light pink background */
        padding: 20px;
        border: 2px solid #ff4081; /* Pink border */
        border-radius: 10px;
      }
      
      .gadgets-info p {
        margin-bottom: 20px;
      }
      
      .gadgets-info h2 {
        color: #ff4081; /* Pink color */
        margin-bottom: 10px;
      }
      
      .gadgets-info ul {
        margin-left: 20px;
      }
      
      .gadgets-info li {
        margin-bottom: 5px;
        list-style:none;
      }
      
      `}
      </style>
      <div className="page-container">
        <h1 className="page-heading">Jharkhand Police Gadgets</h1>
        <div className="gadgets-info">
          <p>
            The government has provided state-of-the-art gadgets and equipment
            to the Jharkhand Police force to enhance their efficiency and
            effectiveness in maintaining law and order, ensuring public safety,
            and combating crime.
          </p>
          <h2>Key Gadgets Provided:</h2>
          <ul>
            <li>Body-worn cameras for police officers</li>
            <li>High-definition surveillance cameras</li>
            <li>GPS-equipped vehicles for patrolling</li>
            <li>Smartphones with dedicated apps for police operations</li>
            <li>Radio communication devices</li>
            <li>Drones for aerial surveillance</li>
          </ul>
          <p>
            These gadgets are equipped with advanced technology and are
            instrumental in enhancing the capabilities of the Jharkhand Police
            force in maintaining law and order and ensuring the safety and
            security of citizens.
          </p>
        </div>
      </div>
    </>
  );
};

export default JpGp;
