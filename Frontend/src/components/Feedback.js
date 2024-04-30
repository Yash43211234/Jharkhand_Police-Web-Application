import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await axios.post('http://localhost:3001/feedpost', {
        name,
        email,
        message
      });
      if (result) {
        console.log("Feedback submitted successfully");
        fetchFeedbacks();
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("An error occurred while submitting feedback:", error);
      // Display a user-friendly error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      let response = await axios.get('http://localhost:3001/feedget');
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      // Display a user-friendly error message
    }
  };

  return (
    <>
      <div className="page-box">
        <h1>Submit Feedback</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className='box'
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          /><br /><br />
          <input
            className='box'
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          /><br /><br />
          <textarea
            className='box'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          /><br /><br />

          <button type="submit" className='feedback-button' disabled={loading}>
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>

        </form>
        <h2>Feedbacks</h2>
        <table className='feed-table-content' border="1" >
          <thead>
            <tr>
              <th>S.no.:</th>
              <th>Name:</th>
              <th>Email:</th>
              <th>Message:</th>
            </tr>
          </thead>
          <tbody>
  {feedbacks.slice(0, 10).reverse().map((feedback, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{feedback.name}</td>
      <td>{feedback.email}</td>
      <td>{feedback.message}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
      {/* Move the styles to a separate CSS file */}
      <style>
        {
          `
        .page-box {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          font-size: 16px;
          font-family: Arial, sans-serif;
        }
        .form{
          margin:15px;
        }
        .box{
          width: 100%;
          text-align:center;
          font-size:16px;
          display:flex;
          justify-content:center;
        }

        .feedback-button {
          padding: 10px 20px;
          background-color: #4caf50;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .feedback-button:hover {
          background-color: #388e3c;
        }

        .feed-table-content {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .feed-table-content th,
        .feed-table-content td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        .feed-table-content th {
          background-color: #f2f2f2;
          color: #333;
        }
          `
        }
      </style>
    </>
  );
}

export default Feedback;
