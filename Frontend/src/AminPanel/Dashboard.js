import React, { useState } from 'react';
import FIRList from './FIRList';
import UserManagement from './UserManagement';
import Settings from './Settings';
import DisplayLostDevices from './DisplayLostDevices';
import MissingPersonReports from './MissingPersonReports';
import SurveyData from './SurveyData';

function Dashboard() {
  // State to manage the active component
  const [activeComponent, setActiveComponent] = useState('FIRList');

  // Function to switch active component
  const switchComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  // Render active component based on selected navigation item
  const renderComponent = () => {
    switch (activeComponent) {
      case 'FIRList':
        return <FIRList />;
      case 'UserManagement':
        return <UserManagement />;
      case 'Settings':
        return <Settings />;
      case 'DisplayLostDevices':
        return <DisplayLostDevices />;
      case 'MissingPersonReports':
        return <MissingPersonReports />;
      case 'SurveyData':
          return <SurveyData />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul className='sidebar_ul'>
          <li onClick={() => switchComponent('')}>Dashboard</li>
        <li>
          <details>
            <summary>FIR List</summary>
            <option onClick={() => switchComponent('FIRList')}>Vehicle Report</option>
            <option onClick={() => switchComponent('DisplayLostDevices')}>Device Reports</option>
            <option onClick={() => switchComponent('MissingPersonReports')}>MissingPerson Reports</option>
            <option onClick={() => switchComponent('SurveyData')}>Suvey Data</option>
          </details>
          </li>
          <li>
          <details>
            <summary>User Management</summary>
            <option onClick={() => switchComponent('UserManagement')}>LoginDetails</option>
            
          </details>
          
          </li>
          <li>
          <details>
            <summary>Settings</summary>
            <option onClick={() => switchComponent('Settings')}>Know more</option>
            
          </details>
          </li>
          <li>
          <details>
            <summary>Statistics</summary>
            <option onClick={() => switchComponent('DisplayLostDevices')}>Bar Chart</option>
            
          </details>
          </li>
         
          
         
        </ul>
      </div>
      <div className="main-content">
        {renderComponent()}
      </div>

  <style>
    {
      `
      /* components/AdminPanel/Dashboard.css */
      
      /* Dashboard styles */
.dashboard-container {
    display: flex;
    margin-top: -20px;
}

.sidebar {
    width: 15%;
    background-color: #f0f0f0;
    padding: 20px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    margin: 20px 0;
    font-size: 18px;
    cursor: pointer;
}

.details-summary {
    list-style: none; /* Removes default list marker */
    cursor: pointer;
}

.details-summary::-webkit-details-marker {
    display: none; /* Specific for WebKit browsers */
}

.main-content {
    flex-grow: 1;
    padding: 20px;
}

      `
    }
  </style>

    </div>
  );
}

export default Dashboard;
