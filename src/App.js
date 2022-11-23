import React from "react";
import { Route, Routes } from 'react-router-dom';

import { Home } from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext"
export default function App() {

  return (

    <div className="bg-slate-300 h-screen text-red flex">
          
      <AuthProvider>
        <Routes>
          
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>

      </AuthProvider>
    </div>
  )
}