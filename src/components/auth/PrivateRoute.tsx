
import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  role?: 'student' | 'instructor';
}

const PrivateRoute = ({ role }: PrivateRouteProps) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  
  useEffect(() => {
    // In a real app, we would verify the token validity here
    // by making a request to GET /api/auth/user/
  }, []);
  
  if (!token) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  if (role && user?.role !== role) {
    // Wrong role, redirect to appropriate dashboard
    const redirectTo = user?.role === 'instructor' ? '/instructor-dashboard' : '/dashboard';
    return <Navigate to={redirectTo} replace />;
  }
  
  // Authenticated and role matches, render the children
  return <Outlet />;
};

export default PrivateRoute;
