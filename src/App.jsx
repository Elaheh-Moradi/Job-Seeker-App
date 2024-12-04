import React, { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import jwtDecode from "jwt-decode";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../src/pages/layout/Layout.jsx";
import SearchJobPage from "./pages/menu/SearchJobPage.jsx";
import HomePage from "./pages/menu/HomePage.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [isInit, setIsInit] = useState(false);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("authToken", newToken); // Save token to localStorage
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          handleLogout(); // Token expired
        }
      } catch (err) {
        handleLogout(); // Invalid token
      }
    }
    setIsInit(true);
  }, [token]);

  if (!isInit) {
    return <div>Loading...</div>;
  }

  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" replace />; // Redirect to login if not authenticated
    }
    return children; // Render the child components if authenticated
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Fallback route */}
      <Route
          path="*"
          element={
            !isInit ? (
              <div>Loading...</div> // Show loading until token is checked
            ) : (
              <Navigate to={token ? "/home" : "/login"} replace />
            )
          }
        />
        {/* Login Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* Default Route to Home after Login */}
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="search-job" element={<SearchJobPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
