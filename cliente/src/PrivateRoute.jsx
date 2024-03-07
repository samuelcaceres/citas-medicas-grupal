import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  // Aquí colocarías la lógica para verificar si el usuario está autenticado
  const isAuthenticated = true; // Por ejemplo, podrías obtener esto del estado o de algún contexto

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
