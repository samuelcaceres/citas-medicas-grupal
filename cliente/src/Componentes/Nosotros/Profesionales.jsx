import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Profesionales = () => {
  // Datos de los especialistas médicos
  const medicos = [
    { nombre: 'Dr. Juan Pérez', especialidad: 'Cardiología', correo: 'juan.perez@example.com', telefono: '+595991234567' },
    { nombre: 'Dra. María García', especialidad: 'Dermatología', correo: 'maria.garcia@example.com', telefono: '+595991234568' },
    { nombre: 'Dr. Carlos López', especialidad: 'Pediatría', correo: 'carlos.lopez@example.com', telefono: '+595991234569' },
    { nombre: 'Dra. Ana Martínez', especialidad: 'Ginecología', correo: 'ana.martinez@example.com', telefono: '+595991234570' },
    { nombre: 'Dr. Roberto Rodríguez', especialidad: 'Oftalmología', correo: 'roberto.rodriguez@example.com', telefono: '+595991234571' },
    { nombre: 'Dra. Laura González', especialidad: 'Neurología', correo: 'laura.gonzalez@example.com', telefono: '+595991234572' },
    { nombre: 'Dr. Miguel Sánchez', especialidad: 'Cirugía General', correo: 'miguel.sanchez@example.com', telefono: '+595991234573' },
    { nombre: 'Dra. Sandra Gómez', especialidad: 'Psiquiatría', correo: 'sandra.gomez@example.com', telefono: '+595991234574' },
    { nombre: 'Dr. Ricardo Vargas', especialidad: 'Traumatología', correo: 'ricardo.vargas@example.com', telefono: '+595991234575' },
    { nombre: 'Dra. Paula Suárez', especialidad: 'Endocrinología', correo: 'paula.suarez@example.com', telefono: '+595991234576' },
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      <Link to="/nosotros" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '1rem', position: 'absolute', top: 0, left: 0 }}>
        <Button variant="contained" color="primary">
          Volver a Nosotros
        </Button>
      </Link>
      <Typography variant="h4" align="center" gutterBottom>
        Profesionales Médicos
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {medicos.map((medico, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={3} style={{ borderRadius: '1rem' }}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  {medico.nombre}
                </Typography>
                <Typography variant="subtitle2" align="center" gutterBottom>
                  {medico.especialidad}
                </Typography>
                <Typography variant="body2" align="center" paragraph>
                  Correo: {medico.correo}
                </Typography>
                <Typography variant="body2" align="center">
                  Teléfono: {medico.telefono}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Profesionales;
