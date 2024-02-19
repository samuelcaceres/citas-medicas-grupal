import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Componentes/Home/Home';
import Agendar from './Componentes/Agendar/Agendar';
import EditarEliminarCita from './Componentes/Editar/Editar'; 
import Detailscita from './Componentes/Ver/VerCitas';


const AppRoutes = () => (
  <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear" element={<Agendar/>} />
        <Route path="/editar/:id" element={<EditarEliminarCita />} />
        <Route path="/details/:id" element={<Detailscita />} />
        <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
  </Router>
);

export default AppRoutes;


