import React, { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import jwtDecode from "jwt-decode";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "../src/pages/layout/Layout.jsx";
import SearchJobPage from "./pages/menu/SearchJobPage.jsx";
import HomePage from "./pages/menu/HomePage.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const handleLogin = (newToken) => {
    setToken(newToken);
    // localStorage.setItem("authToken", token); // Save token to localStorage
    // navigate("/home");
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

  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" />; // Redirect to login if not authenticated
    }
    return children; // Render the child components if authenticated
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? <Layout /> : <Navigate to="/login" replace />,
      children: [
        {
          path: "/home",
          element: (
            <ProtectedRoute>
              <HomePage onLogout={handleLogout} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/search-job",
          element: (
            <ProtectedRoute>
              <SearchJobPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login onLogin={handleLogin} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
