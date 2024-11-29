import React, { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import jwtDecode from "jwt-decode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
function App() {
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const handleLogin = (newToken) => {
    setToken(newToken);
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
  }, [token]);

  return (
    <>
      {/* {token ? (
        <div>
          <h1>Welcome!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )} */}
      <div class="font-vazirmatn text-lg">
        <Layout />
      </div>
    </>
  );
}

export default App;
