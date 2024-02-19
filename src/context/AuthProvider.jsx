import React, { createContext, useContext, useEffect, useState } from 'react';
import DoLoginRefresh from '../Component/refresh/DoLoginRefresh';


const authContext = createContext({});
const AuthProvider = ({ children }) => {
  let isRefreshRequested = false;
  const [auth, setAuth] = useState({
    userId: "",
    userName: "",
    role: "CUSTOMER",
    isAuthenticated: false,
    accessExpiration: "",
    refreshExpiration: ""
  });

  const { validateAndRefresh } = DoLoginRefresh();

  const refresh = async () => {
    const data = await validateAndRefresh()
    if(data){
      setAuth({...data})
    }
  }

  useEffect(() => {
    if(!isRefreshRequested){
      isRefreshRequested = true;
      refresh()
    }
  }, [])

  useEffect(() => {
    console.log("auth State updated", auth)
  }, [auth])

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authContext);
