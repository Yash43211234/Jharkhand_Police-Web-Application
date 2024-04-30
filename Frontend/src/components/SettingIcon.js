import React, { useState } from 'react';
import { FaSignInAlt, FaUser, FaTimes, FaUserLock, FaUserPlus } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const SettingIcon = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {

    localStorage.clear();

    toggleModal();
  }
  function message(){
   var Admin ="Authentication ";
  }


  return (

    <div>
      <button className="toggle-button" onClick={toggleModal}>

        <a className="" target="_blank" rel="noopener noreferrer">
          <FaUser size={22} style={{ marginRight: '0' }} />
        </a>
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="toggle-box modal">
          <p className="Admin-text">Auth</p>


            {auth ? (
              <NavLink onClick={logout} className="link" to="/">
                <a className="" target="_blank" rel="noopener noreferrer">
                  <FaSignInAlt size={22} style={{ marginRight: '0' }} />

                </a>

              </NavLink>

            ) : (
              <>
               
                
               
                <NavLink onClick={toggleModal} className="link open" to="/Signup">
                  <a className="" target="_blank" rel="noopener noreferrer">
                    <FaUserPlus size={22} style={{ marginRight: '0' }} />

                  </a>
                </NavLink>

                <NavLink onClick={toggleModal} className="link open" to="/Login">
                  <a className="" target="_blank" rel="noopener noreferrer">
                    <FaUserLock size={22} style={{ marginRight: '0' }} />

                  </a>
                </NavLink>
          
            
              </>
            )

              // {/* /////////condition to signup and logout /////////*/}

            }
            
            <br />
            <br />
            <button className="close-icon" onClick={toggleModal}>
              <a className="" target="_blank" rel="noopener noreferrer">
                <FaTimes size={22} style={{ marginRight: '0' }} />
              </a>

            </button>
            <p className="Admin-text bottom-text"></p>
          </div>
        </div>
      )}

      <style>
        {
          `

        .modal-overlay {
          position: fixed;
          z-index:1;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size:16px;
        }
        .toggle-button{
          cursor:pointer;
          border:0px;
        }
       

        .toggle-box {
         
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          margin-top:20px;
          width:400px;
          height:500px;
        }
        .toggle-text{
          background-color: #fff;
          color: #333;
          cursor: pointer;
          transition:box-shadow 0.3s;
        
        }
        .Admin-text{
          background: linear-gradient(to right, #06D6AD, #06D6AD);
          padding: 10px 40px;
          margin-bottom: 48px;
        }
        .bottom-text {
          padding: 19px 40px;
          bottom: 4px;
          margin-top: 250px;
        }
        
        .link {
         padding:21px 16px 13px 18px; 
          background-color: #fff;
          color: #333;
          border-radius: 50%;
          cursor: pointer;
          transition:box-shadow 0.3s;
        
        }
        .link:hover{
          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
        }
        .open{
          margin:10px;
        }
        
       
        
        
        
        .close-icon {
          margin-top: 15px;
          width:60px;
          height:60px;
          padding: 8px 16px;
          border: 1px solid #333;
          background-color: #fff;
          color: #333;
          border-radius: 50%;
          cursor: pointer;
          transition:box-shadow 0.3s;
          transition: background-color 0.1s, color 0.1s;
        }
        .close-icon:hover{
          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
        }
        .modallogin button:hover {
          background-color: #234;
          color: #fff;
        }
        
        .modallogin button:last-child {
          margin-left: 10px;
        }
        }
        `
        }
      </style>
    </div>
  );
};

export default SettingIcon;