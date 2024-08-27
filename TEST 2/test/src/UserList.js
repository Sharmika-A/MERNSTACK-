import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [Value, setValue] = useState('');
  const [users, setUsers] = useState([]);
  const Change = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  useEffect(() => { 
    if (Value) {
      const url = `https://reqres.in/api/users?page=${Value}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setUsers(data.data))
        .catch((error) => console.error('Error fetching data:', error));
    }}, [Value]);

  return (
    <div>
      <h1>User List</h1>
      <select onChange={Change}>
        <option value="">Select a page</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <div >
        {users.map((user) => (
          <h3 key={user.id}>{user.first_name} {user.last_name}</h3>
        ))}
      </div></div>
  );};
export default UserList;