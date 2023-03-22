import React, { useState } from "react";
import "./register.css";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          required
          name="name"
          value={input.name}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <button className="button" type="submit">
          Register
        </button>
        <p className="p">
          Have alredy account?
          <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
