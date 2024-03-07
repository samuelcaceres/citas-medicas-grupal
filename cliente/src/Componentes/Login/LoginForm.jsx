import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Token de autenticación:', token);
      setIsLoggedIn(true);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Correo electrónico o contraseña incorrectos');
      } else {
        setError('Error al iniciar sesión. Inténtalo de nuevo más tarde');
      }
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Correo electrónico"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: '1rem' }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Contraseña"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ marginBottom: '1rem' }}
            />
            {error && (
              <Stack spacing={2} style={{ marginBottom: '1rem' }}>
                <Alert severity="error">{error}</Alert>
              </Stack>
            )}
            <Button type="submit" variant="contained" color="primary" style={{ width: '100%', marginBottom: '1rem' }}>
              Iniciar sesión
            </Button>
            <Typography variant="body2" align="center" style={{ marginBottom: '1rem' }}>
            ¡Si no tienes una cuenta, crea una para iniciar sesión!
          </Typography>
            <Button component={Link} to="/" variant="outlined" color="primary" style={{ width: '100%' }}>
              Registrarse
            </Button>
          </form>
          
        ) : (
          <Typography variant="body1" align="center" style={{ marginBottom: '1.5rem' }}>
            ¡Has iniciado sesión correctamente!
          </Typography>
        )}
        {isLoggedIn && (
          <div style={{ textAlign: 'center' }}>
            <Button component={Link} to="/home" variant="contained" color="primary">
              Ir a la Página Principal
            </Button>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default LoginForm;
