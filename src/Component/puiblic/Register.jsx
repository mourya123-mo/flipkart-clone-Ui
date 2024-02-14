import React, { useState } from 'react';


const Register = ({role}) => {
 const[username,setUsername]=useState("");
 const [password,setPassword]=useState("")
 const respond=(e) =>{
  e.preventDefault();
  console.log(username);
  console.log(password)
  console.log(role)
 }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email:</label>
          <input type="email" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your mail id" className="w-full p-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password:</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="w-full p-2 border rounded-md" required />
        </div>
   
        <button type="submit" onClick={respond} className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;