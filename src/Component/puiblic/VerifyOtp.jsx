import React, { useState } from 'react';
import axios from 'axios';
const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const email = sessionStorage.getItem("email")
  const handleChange = (e) => {
    const input = e.target.value;
    // Only accept digits and limit to 6 characters
    const digitInput = input.replace(/\D/g, '').slice(0, 6);
    setOtp(digitInput);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:8080/api/v1/verify-otp";
    const body = {
      email: email,
      otp: otp
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(URL, body, header);
      console.log('Registration Successfull', response.data);
      sessionStorage.removeItem("email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md mt-20">
      <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="otp" className="block mb-1">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter OTP"
            maxLength={6} // Limit to 6 characters
            pattern="\d*" // Only allow digits
            required

          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
