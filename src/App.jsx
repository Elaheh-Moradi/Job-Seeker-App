import React, { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import jwtDecode from "jwt-decode";
import { BrowserRouter, Routes, Route, Router, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/pages/layout/Layout.jsx";
import OfferCart from "./components/OfferCart.jsx";
import HomePage from "./pages/home/HomePage.jsx";
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

const router=createBrowserRouter([{
  path:'/', element:<Layout/>,children:[
    {index:true, element:<HomePage/>}
  ]
}])

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

      <div >
        <RouterProvider router={router}/>
        
      </div>
    </>
  );
}

export default App;
