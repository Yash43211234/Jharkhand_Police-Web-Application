import React, { useState } from 'react';
import { FaUser, FaSignInAlt, FaUserPlus, FaUserLock, FaTimes,FaUserSecret, } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';


const OpenToggle = () => {
  const [showModal, setShowModal] = useState(false);
  const [auth, setAuth] = useState(false); // Assuming auth state for demonstration
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
    
  };

  const logout = () => {
    // Perform logout logic
    setAuth(false);
    toggleModal();
  };


//---------------------------
// -----------------?

// ye code use nahi hua hai got to setting icon

// h
// h
// h
// h
// h
// h

























  return (
    <div>
      <button className="toggle-button" onClick={toggleModal}>
        <a className="" target="_blank" rel="noopener noreferrer">
          <FaUser size={22} style={{ marginRight: '0' }} />
        </a>
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="toggle-box">
            {auth ? (
              <NavLink onClick={logout} className="link" to="/">
                Logout 
              </NavLink>
            ) : (
              <>
                <NavLink onClick={toggleModal} className="link open" to="/Signup">
                <FaUser size={22} style={{ marginRight: '5px' }} />
                 User
                </NavLink>
                <br/>
                <br/>
                <NavLink onClick={toggleModal} className="link open" to="/Login">
                <FaUserSecret size={22} style={{ marginRight: '5px' }} />
                   Admin
                </NavLink>
              </>
            )}
            <br />
            <br />
            <br />
            <button className="close-icon" onClick={toggleModal}>
              <a className="" target="_blank" rel="noopener noreferrer">
                <FaTimes size={22} style={{ marginRight: '0' }} />
              </a>
            </button>
          </div>
        </div>
      )}
      <style>

        {
            `.modal-overlay {
                position: fixed;
                z-index: 1000; /* Set a high z-index value */
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
              }
              
              /* Adjust z-index of other elements as needed */
              /* For example: */
              .page-content {
                position: relative;
                z-index: 999; /* Ensure page content is below the modal */
              }
              
              /* Additional styling for toggle box */
              .toggle-box {
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                margin-top: 50px;
                width: 400px;
                height: 300px; /* Adjust height as needed */
                background-color: #fff;
              }
              
              .link {
                padding: 10px;
                border: 1px solid #333;
                background-color: #fff;
                color: #333;
                border-radius: 5px;
                cursor: pointer;
                margin-bottom: 10px;
                display: inline-block;
                transition: box-shadow 0.3s;
                

              }
              
              .link:hover {
                box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
              }
              
              .close-icon {
               
                width: 40px;
                height: 40px;
                padding: 8px;
                border: 1px solid #333;
                background-color: #fff;
                color: #333;
                border-radius: 50%;
                cursor: pointer;
                transition: box-shadow 0.3s;
              }
              
              .close-icon:hover {
                box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
              }
              
            `
        }
      </style>
    </div>
  );
};

export default OpenToggle;
