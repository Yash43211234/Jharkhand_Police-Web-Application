import React from 'react';

function StickySocialLinks() {
  return (
    <>
      <div className="sticky-social-links">
        <a href="#" className="social-link">u</a>
        <a href="#" className="social-link">l</a>
        <a href="#" className="social-link">I</a>
        <a href="#" className="social-link">F</a>
        
        <a href="#" className="social-link">I</a>
        {/* Add more social links as needed */}
      </div>
      <style>
        {
          `
          /* StickySocialLinks.css */
          .sticky-social-links {
              position: fixed;
              top: 50%;
              transform: translateY(-50%);
              left: -10px;
              display: flex;
              flex-direction: column;
              gap: 1px;
              padding: 10px;
              border-radius: 5px;
              z-index: 999;
          }
         
          .social-link {
              color: white;
              width: 40px;
              font-size: 10px;
              text-decoration: none;
              padding: 8px 15px;
              border-radius: 3px;
              background-color: #3586b3;
              transition: background-color 0.3s ease;
          }

          .social-link:hover {
              background-color: #0056b3;
          }

          .sticky-social-links a:hover {
              width: 200px;
              border-radius:0px 12px 12px 0px;
          }
        
          `
        }
      </style>
    </>
  );
}

export default StickySocialLinks;
