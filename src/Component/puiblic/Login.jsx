import React, { useState } from 'react';
import img from "../../images/images.png";
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:8080/api/v1/login";
    const body = {
      email: formData.email,
      password: formData.password,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post(URL, body, header);
      if (response.status === 200) {
        console.log("Login Successfull : ", response.da)
        const user = {
          userId: response.data.data.userId,
          userName: response.data.data.userName,
          role: response.data.data.role,
          isAuthenticated: response.data.data.authenticate,
          accessExpiration: response.data.data.accessExpiration,
          refreshExpiration: response.data.data.refreshExpiration
        };;
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user); // Update authentication context
        console.log(user.data);
      navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='mt-3 flex  items-center'>
      <div className='bg-blue-700   w-72 items-center p-6 ml-96 h-96 mt-20'>
        <h1 className='text-2xl font-bold text-white'>Login</h1>
        <h3 className='text-white pt-9'>
          Get access to your Orders, Wishlist, and Recommendations
        </h3>
        <img src={img} alt="" className='pt-9' />
      </div>
      <div className="  p-6 bg-gray-100 rounded-md shadow-md mt-20 mr-96 h-96 w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
