import React, { useState } from 'react';
import {NavLink } from 'react-router-dom'; // Step 1: Import useNavigate
import Home from './Home';

const AuthModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(""); // Local state for name
  const [email, setEmail] = useState(""); // Local state for email
  const [password, setPassword] = useState(""); // Local state for password
  

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:3001/signup', { // Your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // Process result here
        
        
      } else {
        // Handle server errors or invalid data
        console.error('Failed to sign up');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <button onClick={toggleModal}>Signup</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
          <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Submit</button>
            </form>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
     
     <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
          }
          .toggle-button {
            cursor: pointer;
          }
          .modal {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            width: 450px;
            height: 450px;
          }
          .modal h2 {
            background-color: #234;
            color: white;
            padding: 10px;
            margin-top: 0;
            border-radius: 4px;
          }
          .modal label {
            display: block;
            margin-top: 10px;
          }
          .modal input {
            width: 100%;
            margin-top: 5px;
            padding: 8px;
          }
          .modal button {
            margin-top: 20px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .modal button:hover {
            background-color: #234;
            color: white;
          }
          .modal button:last-child {
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default AuthModal;
