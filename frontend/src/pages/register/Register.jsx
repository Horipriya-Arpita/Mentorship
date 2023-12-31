import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null); // Added success state

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      setSuccess("Registration successful!"); // Set success message
      setErr(null); // Reset error message
    } catch (err) {
      setErr(err.response.data);
      setSuccess(null); // Reset success message
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Mentorship Management.</h1>
          <p>
            The Mentorship Management App streamlines mentor-mentee connections,
            enabling efficient session scheduling and knowledge sharing. It
            prioritizes user-friendly interfaces for a seamless and productive
            mentoring experience.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {err && <div className="error-message">{err}</div>}
            {success && <div className="success-message">{success}</div>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
