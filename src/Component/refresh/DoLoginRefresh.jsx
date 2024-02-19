import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoLoginRefresh = () => {
  const nav = useNavigate();
  const URL = "http://localhost:8080/api/v1/refresh-login";
  const body = {}
  const header = {
    headers:{"content-Type":"application/json"},
    withCredentials:true
  };

  const refresh = async () => {
    try {
      const response = await axios.post(URL,body, header);
      console.log("Response Object", response)
      if (response.status === 200) {
        const user = {
          userId: response.data.data.userId,
          userName: response.data.data.userName,
          role: response.data.data.role,
          isAuthenticated: response.data.data.authenticate,
          accessExpiration: response.data.data.accessExpiration,
          refreshExpiration: response.data.data.refreshExpiration
        }
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const validateAndRefresh = async () => {
    const userString = localStorage.getItem("user");
    if (userString !== null ) {
      const user = JSON.parse(userString);
      if (new Date(user.refreshExpiration) > new Date()) {
        console.log("Refresh token not expired");
        if (new Date(user.accessExpiration) > new Date()) {
          console.log("Access token not expired");
          return user;
        } else {
          return await refresh();
        }
      } else {
        nav("/login");
      }
    }
  };

  return {validateAndRefresh}; // Return null as this component doesn't render anything
};

export default DoLoginRefresh;
