import React, { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import jwtDecode from "jwt-decode";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/pages/layout/Layout.jsx";
import SearchJobPage from "./pages/menu/SearchJobPage.jsx";

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
    {path:'/search-job', element:<SearchJobPage/>}
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
