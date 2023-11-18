import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null); // Added success state

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      setSuccess("Login successful!"); // Set success message
      setErr(null); // Reset error message
    } catch (err) {
      setErr(err.response.data);
      setSuccess(null); // Reset success message
    }
  };

  useEffect(() => {
    if (success) {
      // Delay navigation to allow success message to be displayed
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 1000); // Adjust the delay time as needed

      return () => clearTimeout(timeoutId);
    }
  }, [success, navigate]);

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Mentorship Management.</h1>
          <p>
            The Mentorship Management App streamlines mentor-mentee connections,
            enabling efficient session scheduling and knowledge sharing. It
            prioritizes user-friendly interfaces for a seamless and productive
            mentoring experience.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && <div className="error-message">{err}</div>}
            {success && <div className="success-message">{success}</div>}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
