import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Nosotros = () => {
  return (
    <div style={{ marginTop: '2rem', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif', padding: '0 1rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Nosotros
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} style={{ marginBottom: '1rem' }}>
          <Card elevation={3} style={{ borderRadius: '1rem', width: '700px', margin: '0 auto' }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
                Profesionales
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                    
Consulta nuestro amplio equipo de profesionales capacitados, altamente calificados y dedicados a satisfacer tus necesidades con excelencia y profesionalismo.
              </Typography>
              <div style={{ textAlign: 'center' }}>
                <Link to="/profesionales">
                  <Button variant="contained" color="primary">Ver Profesionales</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginBottom: '1rem' }}>
          <Card elevation={3} style={{ borderRadius: '1rem', width: '700px', margin: '0 auto' }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
                Especialidades
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Accede y consulta la amplia gama de especialidades medicas disponibles en el sanatorio VitaliClinic.
                
              </Typography>
              <div style={{ textAlign: 'center' }}>
                <Link to="/especialidades">
                  <Button variant="contained" color="primary">Ver Especialidades</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Link to="/home" style={{ marginLeft: '1rem', marginRight: '10px' }}>
        <Button variant="contained" color="primary">Inicio</Button>
        </Link>
        <Link to="/crear" style={{ marginRight: '10px' }}>
        <Button variant="contained" color="primary">Agendar Cita</Button>
        </Link>

        
      </div>
    </div>
  );
};

export default Nosotros;
