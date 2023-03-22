import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (!localUser) {
      navigate("/register");
    }
  }, []);

  console.log();
  const handleLogin = (e) => {
    e.preventDefault();

    const localUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === localUser.email &&
      input.password === localUser.password
    ) {
      localStorage.setItem("authtorizated", true);
      navigate("/");
    } else {
      alert("Wrong password or email");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
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
          Login
        </button>
        <p className="p">
          Dont have account?
          <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
