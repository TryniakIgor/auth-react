import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export function Navbar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authtorizated");
    navigate("/login");
  };
  <Link to="/register">Register here</Link>;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">User</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li className="logout-btn">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
