// components/AdminPanel/UserManagement.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserManagement() {
  // State for holding user data
  const [users, setUsers] = useState([]);

  // Fetch user data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch user data
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users'); // API endpoint to fetch user data
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.id}</p>
            <p>{user.username}</p>
            {/* Display other user details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
