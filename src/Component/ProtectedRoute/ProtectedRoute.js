import {  Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {

  const token= localStorage.getItem("token");

    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
          navigate('/login', { replace: true });
        }
      }, [token, navigate]);
   
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;