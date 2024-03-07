import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Especialidades = () => {
  // Datos de las especialidades médicas
  const especialidades = [
    { nombre: 'Médico Clínico', descripcion: 'Especialista en medicina general y atención primaria.' },
    { nombre: 'Cardiólogo', descripcion: 'Especialista en el diagnóstico y tratamiento de enfermedades del corazón.' },
    { nombre: 'Endocrinólogo', descripcion: 'Especialista en trastornos hormonales y del metabolismo.' },
    { nombre: 'Dermatólogo', descripcion: 'Especialista en enfermedades de la piel, cabello y uñas.' },
    { nombre: 'Ginecólogo', descripcion: 'Especialista en la salud de la mujer, especialmente el sistema reproductivo.' },
    { nombre: 'Pediatra', descripcion: 'Especialista en la atención médica de niños y adolescentes.' },
    { nombre: 'Neurólogo', descripcion: 'Especialista en trastornos del sistema nervioso central y periférico.' },
    { nombre: 'Psiquiatra', descripcion: 'Especialista en trastornos mentales, emocionales y del comportamiento.' },
    { nombre: 'Traumatólogo', descripcion: 'Especialista en lesiones musculoesqueléticas y del sistema locomotor.' },
    { nombre: 'Oftalmólogo', descripcion: 'Especialista en enfermedades y cirugía de los ojos.' },
    { nombre: 'Otorrinolaringólogo', descripcion: 'Especialista en enfermedades del oído, nariz y garganta.' },
    { nombre: 'Urologo', descripcion: 'Especialista en enfermedades del sistema urinario y masculino.' },
    { nombre: 'Cirujano General', descripcion: 'Especialista en cirugía de órganos abdominales y tejidos blandos.' },
    { nombre: 'Gastroenterólogo', descripcion: 'Especialista en enfermedades del aparato digestivo.' },
    { nombre: 'Nutricionista', descripcion: 'Especialista en nutrición y dietética.' },
    { nombre: 'Oncólogo', descripcion: 'Especialista en el diagnóstico y tratamiento del cáncer.' },
    { nombre: 'Reumatólogo', descripcion: 'Especialista en enfermedades autoinmunes y del sistema musculoesquelético.' },
    { nombre: 'Anestesiólogo', descripcion: 'Especialista en la administración de anestesia y cuidados preoperatorios y postoperatorios.' },
    { nombre: 'Radiólogo', descripcion: 'Especialista en diagnóstico por imágenes y radioterapia.' },
    { nombre: 'Fisioterapeuta', descripcion: 'Especialista en rehabilitación física y terapia física.' },
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      <Link to="/nosotros" style={{ textDecoration: 'none', marginLeft: '1rem', marginTop: '1rem', position: 'absolute', top: 0, left: 0 }}>
        <Button variant="contained" color="primary">
          Volver a Nosotros
        </Button>
      </Link>
      <Typography variant="h4" align="center" gutterBottom>
        Especialidades Médicas
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {especialidades.map((especialidad, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} style={{ borderRadius: '1rem' }}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  {especialidad.nombre}
                </Typography>
                <Typography variant="body2" align="center">
                  {especialidad.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Especialidades;
