
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isInputActive, setIsInputActive] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleInputClick = () => {setQuery("");
    setSelectedUser(null)
  }
  const handleChange = (e) => setQuery(e.target.value);

  const handleClear = () => {setQuery("");
    setSelectedUser(null)
  }

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsInputActive(false); // hide list
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <h2>User Search</h2>

      <div className="search-box">
        <input
          type="text"
          value={query}
          placeholder="Search users..."
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={() => setIsInputActive(true)}
          onBlur={() => setTimeout(() => setIsInputActive(false), 150)} // slight delay
        />
        {query && (
          <span className="clear-icon" onClick={handleClear}>
            &#10005;
          </span>
        )}
      </div>

      {isInputActive && (
        <ul className="results">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              onMouseDown={() => handleUserClick(user)}
            >
              {user.username}
            </li>
          ))}
          {filteredUsers.length === 0 && <li>No users found</li>}
        </ul>
      )}

      {selectedUser && (
        <div className="user-details">
          <h3>User Details</h3>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Username:</strong> {selectedUser.username}</p>
        </div>
      )}
    </div>
  );
};

export default App;
