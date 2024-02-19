import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navs from './Navigation';
import App from "../../App.jsx"
import { useAuth } from '../../context/AuthProvider.jsx';

const AllRoutes = () => {
    const { auth } = useAuth();
    const { role, isAuthenticated } = auth;

    // const isAuthenticated = false;
    // const role = "CUSTOMER"

    return (
        <Routes>
            <Route path={"/"} element={<App />}>
                
                {Navs.map((nav, i) => {
                    if (isAuthenticated) {
                        if (nav.isVisibleAfterAuth) {
                            if (nav.role === role || nav.role === "ALL") {
                                console.log(nav);
                                return <Route key={i} path={nav.path} element={nav.element} />
                            }

                        }
                    } else {
                        if (!nav.requireAuth && nav.role === "ALL") {
                            console.log(nav);
                            return <Route key={i} path={nav.path} element={nav.element} />
                        }
                    }
                })}
            </Route>
        </Routes>
    );
};


export default AllRoutes