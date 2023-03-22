import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./users.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).catch(() => setIsError(true));

      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  if (isError) {
    return <p>Ooops something goes wrong!</p>;
  }

  return (
    <div>
      <Navbar />
      <h1>User List</h1>
      <div className="container">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link> ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
