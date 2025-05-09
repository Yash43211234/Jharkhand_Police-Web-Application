import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function StickySocialLinks() {
  return (
    <>
      <div className="sticky-social-links">
      

      <a href="https://www.facebook.com/jharkhandpolice" className="social-link" target="_blank" rel="noopener noreferrer">
        <FaFacebook  className=" largeIcon" size={22} style={{ marginRight: '10px' }} />
      </a>
      <a href="https://twitter.com/jhpolicejharkhand" className="social-link" target="_blank" rel="noopener noreferrer">
        <FaTwitter  className="largeIcon" size={22} style={{ marginRight: '10px' }} />
      </a>
      <a href="https://www.instagram.com"  className="social-link "target="_blank" rel="noopener noreferrer">
        <FaInstagram className="largeIcon" size={22} />
      </a> <a href="https://www.linkedin.com" className="social-link " target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={22} style={{ marginRight: '10px' }} />
      </a>
     
      <a href="https://www.youtube.com" className="social-link " target="_blank" rel="noopener noreferrer">
        <FaYoutube size={22} />
      </a>
        
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
              gap: 0px;
              padding: 10px;
              border-radius: 5px;
              z-index: 999;
          }

         
          .social-link {
              color: white;
              width: 50px;
              font-size: 20px;
              text-decoration: none;
              margin:1px;
              text-align:center;
              
              border-radius: 3px;
              
              transition: background-color 0.3s ease;
          }

          
          .social-link:hover {
            background-color: hsl(60, 100%, 40%); /* Deeper Yellow */
          }
          

          .sticky-social-links a:hover {
              width: 200px;
              text-aling: left;
              border-radius:0px 12px 12px 0px;
          }
        
          `
        }
      </style>
    </>
  );
}

export default StickySocialLinks;
