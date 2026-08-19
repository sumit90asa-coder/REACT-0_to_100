import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // If there is no user logged in, send them back to the Login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the requested page
  return children;
}