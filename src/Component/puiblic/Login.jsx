import React, { useState } from 'react';
import img from "../../images/images.png"

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
    console.log(formData); // For demonstration, logging form data
  };

  return (
    <section className='mt-3 flex  items-center'>
      <div className='bg-blue-700   w-72 items-center p-6 ml-96 h-96 mt-20'>
        <h1 className='text-2xl font-bold text-white'>Login</h1>
        <h3 className='text-white pt-9'>
          Get access to your Orders,Whishlist and Recomendations
        </h3>
        <img src={img} alt=""  className='pt-9'/>
      </div>
      <div className="  p-6 bg-gray-100 rounded-md shadow-md mt-20 mr-96 h-96 w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
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