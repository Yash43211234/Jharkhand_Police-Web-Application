import React, { useState } from 'react';
import axios from 'axios';

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogin = () => {
    console.log("toggle is okay : Don't Worry")
    toggleModal();
  };

  //data passing over the server
  const [formData, setFormData] = useState({
   
    email: '',
    password:''
    
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
    //authentication logic here
    const handleSubmitdata = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", formData);
      console.log(response.data);
      console.log(" submit ho gaya chalo age badho ")
      event.target.reset(); // Reset form fields
      
    } catch (error) {
      console.error('Error:', error);
      console.log("data backened mai nahi gaya");
    }
  }
    
  return (
    <div>
      <button  className="toggle-button" onClick={toggleModal}>Login</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modallogin">
            <h2>Login</h2>
            <form onSubmit={handleSubmitdata}>
            <label >Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label >Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button  type="submit">Login</button>
            </form>
            <button onClick={toggleModal}>Close</button>
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
        }

        .modallogin {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          margin-top:100px;
          width:400px;
          height:300px;
        }
        
        .modallogin h2 {
          margin-top: 10px;
          background-color:#234;
          padding:10px;
          border-radius:4px;
          color:white;
          margin-bottom:10px;
        }
        
        .modallogin form {
          display: flex;
          flex-direction: column;
        }
        
        .modallogin label {
          margin-bottom: 10px;
          margin-top: 10px;
          
        }
        
        .modallogin input {
          padding: 5px;
          margin-left: 5px;
          
        }
        
        .modallogin button {
          margin-top: 15px;
          padding: 8px 16px;
          border: 1px solid #333;
          background-color: #fff;
          color: #333;
          border-radius: 3px;
          cursor: pointer;

          transition: background-color 0.1s, color 0.1s;
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

export default LoginModal;