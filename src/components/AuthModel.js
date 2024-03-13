import React, { useState } from "react";
import axios from "axios";

const AuthModal = ({ type }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Close the modal after successful authentication
    toggleModal();
  };

  //data passing over the server
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //authentication logic here
  const handleSubmitdata = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/signup",
        formData
      );
      console.log(response.data);
      console.log("are bhai submit ho gaya chalo age badho ");
      event.target.reset(); // Reset form fields
    } catch (error) {
      console.error("Error:", error);
      console.log("submit nahi hua");
    }
  };
  return (
    <div>
      <button onClick={toggleModal}>Signup</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{type} Signup </h2>
            <form onSubmit={handleSubmitdata}>
              <label> Name:</label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />

              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>Confirm Password:</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                value={formData.cpassword}
                onChange={handleChange}
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
            z-index:1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .modal {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            margin-top:20px;
            width:450px;
            height:550px;
          }
          
          .modal h2 {
            margin-top: 10px;
            background-color:#234;
            padding:10px;
            text-color:white;
            color:white;
            border-radius:4px;
            margin-bottom:10px;
          }
          
           .modal form {
            display: flex;
            flex-direction: column;
          }
          
          .modal label {
           margin-top:10px;
           text-align:center;
          }   

          .modal input {
            width:300px;
            margin-left:40px;
          }
          
          .modal button {
            margin-top: 10px;
            padding: 8px 16px;
            border: 1px solid #333;
            background-color: #fff;
            color: #333;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.1s, color 0.1s;
          }
          
          .modal button:hover {
            background-color: #234;
            color: #fff;
          }
          
          .modal button:last-child {
            margin-left: 10px;
          }
          `}
      </style>
    </div>
  );
};

export default AuthModal;
