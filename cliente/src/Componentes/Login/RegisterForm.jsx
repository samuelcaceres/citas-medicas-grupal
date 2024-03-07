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

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validatePassword(formData.password)) {
        setError('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.');
        return;
      }
      const response = await axios.post('http://localhost:3000/api/user/register', formData);
      console.log(response.data);
      window.location.href = '/inicio-sesion';
    } catch (error) {
      if (error.response.data.message.includes('username')) {
        setError('El nombre de usuario ya está en uso.');
      } else {
        setError(error.response.data.message);
      }
    }
  };

  const validatePassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);
  };

  return (
    <Container maxWidth="sm" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Registrarse
        </Typography>
        {error && (
          <Stack spacing={2} style={{ marginBottom: '1rem' }}>
            <Alert severity="error">{error}</Alert>
          </Stack>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Nombre de usuario"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ marginBottom: '1rem' }}
          />
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
          <Button type="submit" variant="contained" color="primary" style={{ width: '100%', marginBottom: '1rem' }}>
            Registrarse
          </Button>
        </form>
        <Typography variant="body2" align="center" style={{ marginBottom: '1rem' }}>
          ¡Si ya tienes una cuenta, solo inicia sesión!
        </Typography>
        <Button component={Link} to="/inicio-sesion" variant="outlined" color="primary" style={{ width: '100%' }}>
          Ir a Inicio de Sesión
        </Button>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
