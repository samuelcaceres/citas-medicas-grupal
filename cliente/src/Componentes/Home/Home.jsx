import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/inicio-sesion');
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Paper elevation={3} style={{ padding: '2rem', borderRadius: '1rem', minHeight: '90vh' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    ¡Bienvenido a VitaliClinic!
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Organiza tus citas médicas de forma sencilla y eficiente.
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: '#f0faff' }}>
                            <Typography variant="h5" align="center" gutterBottom>
                                Agendar Cita
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Permite agendar citas médicas de manera rápida y sencilla.
                            </Typography>
                            <Link to="/crear">
                                <Button variant="contained" color="primary" fullWidth>Agendar Cita</Button>
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: '#f0faff' }}>
                            <Typography variant="h5" align="center" gutterBottom>
                                Ver y editar citas
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Visualiza y edita las citas médicas programadas en tu clínica.
                            </Typography>
                            <Link to="/editar">
                                <Button variant="contained" color="primary" fullWidth>Detalles de las Citas</Button>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justifyContent="center" style={{ marginTop: '2rem' }}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: '#f0faff' }}>
                            <Typography variant="h5" align="center" gutterBottom>
                                Servicios
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Consulta nuestros servicios y agenda citas médicas.
                            </Typography>
                            <Link to="/nosotros">
                                <Button variant="contained" color="primary" fullWidth>Acceder a servicios y especialistas</Button>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <Button variant="contained" color="secondary" size="large" onClick={handleLogout}>Cerrar Sesión</Button>
                </div>
            </Paper>
        </Container>
    );
};

export default Home;
