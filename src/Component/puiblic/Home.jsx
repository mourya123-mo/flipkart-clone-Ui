import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-bold mb-8 text-white">Welcome to Flipkart!</h1>
      <div className="flex space-x-4">
        <div className="w-32 h-32 bg-blue-500 rounded-full"></div>
        <div className="w-32 h-32 bg-green-500 rounded-full"></div>
        <div className="w-32 h-32 bg-yellow-500 rounded-full"></div>
        <div className="w-32 h-32 bg-red-500 rounded-full"></div>
      </div>
      <p className="mt-8 text-white">Explore the vibrant discounts  in our website!</p>
    </div>
  );
};

export default HomePage;
