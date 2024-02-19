import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "./Component/Routes/AllRoutes";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <AllRoutes/>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);