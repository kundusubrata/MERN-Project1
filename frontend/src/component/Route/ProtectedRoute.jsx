// ProtectedRoute.jsx
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element, adminOnly = false }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (adminOnly && (!isAuthenticated || user.role !== 'admin')) {
      // Redirect to login if not authenticated or not an admin
      navigate('/login');
    }
  }, [isAuthenticated, user, adminOnly, navigate]);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
