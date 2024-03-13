// MissingChildPage.js

import React from "react";

class Act extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childName: "",
      age: "",
      description: "",
      lastSeenLocation: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(this.state);
  };

  render() {
    return (
      <>
        <style>
          {`
        /* MissingChildPage.css */

        body {
          background-color:  #fff9e6;
        }

        .missing-child-page {
          display: flex;
          justify-content: space-between;
          padding: 80px;
          
        }
        
        .form-container {
          flex: 1;
          background-color: #fff2cc;
          padding: 50px;
          border-radius: 10px;
        }
        
        .instructions-container {
          flex: 1;
          background-color: #fff2cc;
          padding: 50px;
          border-radius: 20px;
        }
        
        .instructions-container li {
          font-size: 20px;
          padding: 10px;
          color: #997300;
        }

        form {
          display: flex;
          flex-direction: column;
        }
        
        label {
          margin-bottom: 35px;
          margin-top:15px;
          font-size: 25px;
          color: #997300;
        }
        
        input, textarea {
          margin-bottom: 10px;
          padding: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        
        button {
          padding: 10px;
          background-color: #cc9900;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        button:hover {
          background-color:#806000;
        }

         h1 {
          color: #cc9900;
          margin-bottom: 50px;
        }
        
        `}
        </style>
        <div className="missing-child-page">
          <div className="form-container">
            <h1>Report a Missing Child</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Child's Name:</label>
              <input
                type="text"
                name="childName"
                value={this.state.childName}
                onChange={this.handleChange}
              />

              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />

              <label>Description:</label>
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />

              <label>Last Seen Location:</label>
              <input
                type="text"
                name="lastSeenLocation"
                value={this.state.lastSeenLocation}
                onChange={this.handleChange}
              />

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="instructions-container">
            <h1>What to Do When a Child is Missing:</h1>
            <ul>
              <li>
                Stay calm and try to remember the last known location of the
                child.
              </li>
              <li>
                Contact local law enforcement immediately and provide them with
                detailed information about the child.
              </li>
              <li>
                Share information about the missing child on social media
                platforms to reach a wider audience.
              </li>
              <li>
                Inform family and friends about the situation and ask for their
                assistance in searching.
              </li>
              <li>
                Check nearby areas where the child may have wandered off to.
              </li>
              <li>
                Provide law enforcement with recent photographs of the missing
                child.
              </li>
              <li>
                Consider contacting local news outlets to raise awareness about
                the missing child.
              </li>
              <li>
                Do not hesitate to call emergency services if you believe the
                child is in immediate danger.
              </li>
              <li>
                Keep a record of all communications and interactions related to
                the missing child case.
              </li>
              <li>
                Stay hopeful and continue to actively search for the missing
                child until they are found.
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Act;
