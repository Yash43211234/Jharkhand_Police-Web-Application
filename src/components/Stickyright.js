import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Stickyright() {
  return (
    <>
      <div className="sticky-links">
        <a
          href="https://www.facebook.com"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className=" largeIcon"
            size={22}
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://twitter.com"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            className="largeIcon"
            size={22}
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://www.instagram.com"
          className="social-link "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="largeIcon" size={22} />
        </a>{" "}
        <a
          href="https://www.linkedin.com"
          className="social-link "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={22} style={{ marginRight: "10px" }} />
        </a>
        <a
          href="https://www.youtube.com"
          className="social-link "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={22} />
        </a>
      </div>
      <style>
        {`
          /* Stickyright.css */
          .sticky-links {
              position: fixed;
              top: 50%;
              transform: translateY(-50%);
              right: 0px;
              display: flex;
              flex-direction: column;
              
              border-radius: 5px;
              z-index: 999;
              
          }
         
          .social-link {
              color: white;
              width: 50px;
              height:35px;
              font-size: 10px;
              text-decoration: none;
              padding: 8px 15px;
              border-radius: 2px;
              background-color: #3586b3;
              transition: background-color 0.3s ease;
          }

          .social-link:hover {
              background-color: #0056b3;
          }

        
          `}
      </style>
    </>
  );
}

export default Stickyright;
