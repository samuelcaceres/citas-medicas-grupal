// client/src/components/ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn, ...rest }) => {
  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/inicio-sesion" replace />
  );
};

export default ProtectedRoute;
