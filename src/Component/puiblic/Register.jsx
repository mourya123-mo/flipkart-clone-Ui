import React, { useState } from 'react';
import img from "../../images/download.jpg"



const Register = ({ role }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const respond = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password)
    console.log(role)
  }

  return (
    <section className=' mt-3 flex  items-center '>
      <div className='bg-blue-700   w-72 items-center p-6 ml-96 h-96 mt-20'>
        <h2 className='text-white font-bold text-xl'>Looks Like You're new here!</h2>
          <h3 className='pt-10 text-white'>Sign up with your Email to get Started </h3>
         <img src={img} alt="" className='pt-9' />
      </div>
      <div className="  p-6 bg-gray-100 rounded-md mt-20 mr-96 h-96 w-96">
        <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email:</label>
            <input type="email" onChange={(e) => setUsername(e.target.value)} placeholder="Enter your mail id" className="w-full p-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="w-full p-2 border rounded-md" required />
          </div>
            
          <button type="submit" onClick={respond} className="w-full mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;