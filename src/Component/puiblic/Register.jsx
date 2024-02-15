import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from "../../images/download.jpg";

const Register = ({ role }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const URL = "http://localhost:8080/api/v1/register";
    const body = {
      email: username,
      password: password,
      userRole: role,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(URL, body, header);
      sessionStorage.setItem("email", response.data.data.email);
      navigate("/verify-otp");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Registration Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    // Regex pattern for email validation
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    // Password must contain minimum 9 characters, first letter capital, and at least one special character
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{9,})/;
    return passwordPattern.test(password);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setUsername(value);
    if (value && !validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    if (value && !validatePassword(value)) {
      setError("Password must contain minimum 9 characters, first letter capital, and at least one special character.");
    } else {
      setError("");
    }
  };

  return (
    <section className='mt-3 flex items-center'>
      <div className='bg-blue-700 w-80 items-center p-6 ml-96 h-96 mt-20'>
        <h1 className='text-white font-bold text-2xl'>Looks like you are new Here</h1>
        <h3 className='text-white pt-7'>Sign up with your email to get Started</h3>
        <img src={img} alt="Register Image" className='pt-8' />
      </div>
      <div className="w-96 h-96 p-6 bg-gray-100 rounded-md mt-20">
        <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email:</label>
            <input
              type="email"
              value={username}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md"
              required
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            disabled={loading || !!error}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
