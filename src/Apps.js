import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim() !== "") {
      const suggestions = users.filter((user) =>
        user.username.toLowerCase().includes(val.toLowerCase())
      );
      setFiltered(suggestions);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelect = (user) => {
    setQuery(user.username);
    setShowDropdown(false);
    // Here you can trigger navigation, show details, etc.
    console.log("Selected:", user);
  };

  const handleClear = () => {
    setQuery("");
    setFiltered([]);
    setShowDropdown(false);
  };

  return (
    <div className="app">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search users..."
          value={query}
          onChange={handleChange}
          onFocus={() => query && setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        />
        {query && (
          <span className="clear-btn" onClick={handleClear}>
            &#x2715;
          </span>
        )}
        {showDropdown && filtered.length > 0 && (
          <ul className="dropdown">
            {filtered.map((user) => (
              <li key={user.id} onMouseDown={() => handleSelect(user)}>
                <span className="icon">🔍</span>
                <span className="text">{user.username}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;


