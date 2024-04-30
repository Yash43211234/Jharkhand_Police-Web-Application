import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SurveyData() {
    const [surveyData, setSurveyData] = useState([]);

    useEffect(() => {
        fetchSurveyData();
    }, []);

    const fetchSurveyData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/survey-data');
            setSurveyData(response.data);
        } catch (error) {
            console.error('Error fetching survey data:', error);
        }
    };

    return (
        <div>
            <h1>Survey Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Safety Concerns</th>
                        <th>Police Presence</th>
                        <th>Police Effectiveness</th>
                        <th>Community Management</th>
                        <th>Policing Priorities</th>
                        <th>Suggestions</th>
                        <th>Satisfaction</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {surveyData.map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.email}</td>
                            <td>{data.safetyConcerns}</td>
                            <td>{data.policePresence}</td>
                            <td>{data.policeEffectiveness}</td>
                            <td>{data.communityManagement}</td>
                            <td>{data.policingPriorities}</td>
                            <td>{data.suggestions}</td>
                            <td>{data.satisfaction}</td>
                            <td>
                                <ul className='modify'>
                                    <li><button >Update</button></li>
                                    <li><button>View</button></li>
                                    <li><button>Delete</button></li>
                                </ul>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
      <style>
        {
            `
            /* styles.css */

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

/* Table header */
thead {
  background-color: #f2f2f2;
}

thead th {
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
}

/* Table body */
tbody td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Alternating row colors */
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.modify li{
    list-style:none;
  }

            `
        }
      </style>
        </div>
    );
}

export default SurveyData;
